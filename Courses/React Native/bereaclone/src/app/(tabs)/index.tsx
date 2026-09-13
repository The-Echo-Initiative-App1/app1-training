import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
  TextInput,
  Modal,
  FlatList,
} from "react-native";
import { Post } from "../hooks/usePosts";
import {  useRouter } from "expo-router";
import {  SafeAreaView } from "react-native-safe-area-context";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { Image } from "expo-image";
import { usePosts } from "../hooks/usePosts";
import { useAuth } from "../context/AuthContext";
import { formatTimeAgo } from "../lib/supabase/date-helper";
import { formatTimeRemaining } from "../lib/supabase/date-helper";
type PostCardProps = {
  Post: Post;
  currentUserId: string;
};

const PostCard=({Post,currentUserId}:PostCardProps) => {
  const postUser=Post.profiles;
  const isOwnPost=Post.user_id===currentUserId;
  return(
    <View>
      <View style={styles.postContainer}>
          <View style={styles.postHeader}>
            <View style={styles.userInfo}>
                 {postUser?.profile_image_url?(<Image source={{uri:postUser.profile_image_url}}
                  style={styles.avatar}/>):(
                    <View style={[styles.avatar,styles.avatarPlaceholder]}>
                      <Text style={styles.avatarText}>
                        {postUser?.name?.[0]?.toUpperCase() || "U" }
                      </Text>
                    </View>
                  )}
            </View>
            <View>
              <Text style={styles.username}>{ isOwnPost?"You":`@${postUser?.username}`}</Text>
              <Text style={styles.timeAgo}>{formatTimeAgo(Post.created_at)}</Text>
            </View>
          </View>
            <View style={styles.timeRemainingBadge}>
              <Text style={styles.timeRemainingText}>
                {formatTimeRemaining(Post.expires_at)}
              </Text>
            </View>
      </View>
      <Image source={{uri:Post.image_url}}
      style={styles.postImage}
      contentFit="cover"/>

      <View style={styles.postFooter}>
        {Post.Description && (<Text style={styles.postDescription}>{Post.Description}</Text>)} {""}
        <Text style={styles.postInfo}>{isOwnPost ? "Your Post": `${postUser?.name} post`} • Expires in {formatTimeRemaining(Post.expires_at)}</Text>
      </View>
    </View>
  )
}



export default function Index() {
  
  const [showPreview,setShowPreview]=useState(false);
  const [previewImage,setpreviewImage]=useState<string| null>(null);
  const [description,setDescription]=useState<string>("");
  const [isUploading,setIsUploading]=useState(false);
  
  const router=useRouter();

  
  
  const {createPost,posts}=usePosts();
  const {user}=useAuth();
  //check if user had an active post
  const userAvtivePost=posts.find((post)=>post.user_id===user?.id && post.is_active &&
   new Date(post.expires_at)>new Date());
  const hasActivePost=!!userAvtivePost;


  const pickImage=async()=>{
     
      const {status}=await ImagePicker.requestMediaLibraryPermissionsAsync();
      if(status!=="granted"){
        Alert.alert("Permission nedded","We need camera roll permissions to select a profile image"
         
        );
        return;
      }
      const result=await ImagePicker.launchImageLibraryAsync({
        mediaTypes:["images"],
        allowsEditing:true,
        aspect:[1,1],
        quality:0.8,

      })
      if(!result.canceled && result.assets[0]){
        setpreviewImage(result.assets[0].uri);
        setShowPreview(true);
        setDescription("")
      }
     }
     const takephoto=async()=>{
       const {status}=await ImagePicker.requestCameraPermissionsAsync();
      if(status!=="granted"){
        Alert.alert("Permission nedded","We need camera  permissions to select a profile image"
            
        );
        return;

      }
      const result=await ImagePicker.launchCameraAsync({
  
        allowsEditing:true,
        aspect:[1,1],
        quality:0.8,

      })
      if(!result.canceled && result.assets[0]){
         setpreviewImage(result.assets[0].uri);
         setShowPreview(true);
         setDescription("");
      }

    };
   const showImagePicker = () => {
  Alert.alert(
    "Select profile image",
    "Choose an option",
    [
      { text: "Camera", onPress: takephoto },
      { text: "Photo Library", onPress: pickImage },
      { text: "Cancel", style: "cancel" },
    ]
  )};
  const handlePost=async()=>{
    if(!previewImage) return;
    try{
      await createPost(previewImage,description);
      setpreviewImage(null);
      setDescription("");
      setShowPreview(false);

    }
    catch(error){
      console.error("Error creating post:",error);
      Alert.alert("Error,Failed to craete post .Please try again");
      
    }finally{
      setIsUploading(false);
    }
  }
  const renderPost = ({ item }: { item: Post }) => (
  <PostCard Post={item} currentUserId={user?.id??""} />
);
  return (
  <SafeAreaView style={styles.container} edges={["bottom","top"]}>
            <FlatList data={posts} renderItem={renderPost}/>
              
           
      <TouchableOpacity style={styles.fab} onPress={showImagePicker}>
        <Text style={styles.fabText}>{hasActivePost? "↻":"+"}</Text>
      </TouchableOpacity>
      
      <Modal visible={showPreview} transparent animationType="fade">
           <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>{hasActivePost? "Replace Your Post":"Preview Your Post"}</Text>
              {previewImage && ( <Image source={{uri:previewImage}} style={styles.previewImage}
                      contentFit="cover"></Image>
            )}

            <TextInput  style={styles.descriptionInput}
             placeholder="Add a decription (optional)"
             placeholderTextColor="#999"
             value={description}
             onChangeText={setDescription}
             multiline
             maxLength={500}
             textAlignVertical="top"/>
             
             <View style={[styles.modalButton ,styles.cancelButton]}>
              <TouchableOpacity style={styles.modalButton} onPress={()=>{
                setShowPreview(false);
                setpreviewImage(null);
                setDescription("");
              }}>
                <Text style={styles.cancelButtonText}>Cancel</Text>
                </TouchableOpacity>
              <TouchableOpacity style={[styles.modalButton,styles.postButton]} onPress={handlePost}>
                <Text style={styles.postButtonText} >{hasActivePost ?"Replace":"Post"}</Text>
                </TouchableOpacity>
             </View>

            
            </View>
           </View>
      </Modal>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  fab:{
    position:"absolute",
    bottom:104,
    right:24,
    width:56,
    height:56,
    borderRadius:28,
    backgroundColor:"#000",
    justifyContent:"center",
    alignItems:"center",
    shadowColor:"#000",
    shadowOffset:{width:0,height:4},
    shadowOpacity:0.3,
    shadowRadius:8,
    elevation:8,
  },
  fabText:{
    color:"#fff",
    fontSize:32,
    fontWeight:"300",
    lineHeight:32,

  },
modalContainer:{
  flex:1,
  backgroundColor:"rgba(0,0,0,0.8)",
  justifyContent:"center",
  alignItems:"center",
  padding:24,
},
modalContent: {
  backgroundColor:"#fff",
  borderRadius:16,
  padding:24,
  width: "100%",
  maxWidth:400,
},
modalTitle: {
  fontSize:20,
  fontWeight:"bold",
  marginBottom:16,
  textAlign:"center",
},
previewImage: {
  width:"100%",
  aspectRatio:1,
  borderRadius:12,
  marginBottom:16,
},

descriptionInput: {
  width:"100%",
  minHeight:80,
  maxHeight:120,
  backgroundColor:"#f5f5f5",
  borderRadius:12,
  padding:12,
  fontSize:16,
  marginBottom:24,
  borderWidth:1,
  borderColor:"#e0e0e0",
  color:"#000",
},
modalButtons: {
  flexDirection:"row",
  gap:12,

},
modalButton: {
  flex:1,
  padding:16,
  borderRadius:12,
  alignItems:"center",
},
cancelButton: {
  backgroundColor:"#f5f5f5",
},
cancelButtonText: {
  color:"#000",
  fontSize:16,
  fontWeight:"600",
},

postButton: {backgroundColor:"#000",},
postButtonText: {
  color:"#fff",
  fontSize:16,
  fontWeight:"600",
},
postContainer:{
  backgroundColor:"#fff",
  borderRadius:16,
  overflow:"hidden",
  marginBottom:16,
  shadowColor:"#000",
  shadowOffset:{width:0,height:2},
  shadowOpacity:0.1,
  shadowRadius:8,
  elevation:3,

},
postHeader:{
  flexDirection:"row",
  justifyContent:"space-between",
  alignItems:"center",
  padding:16,
},
userInfo:{
  flexDirection:"row",
  alignItems:"center",
  gap:12,
},
avatar:{
  width:40,
  height:40,
  borderRadius:20,
},
avatarPlaceholder:{
  backgroundColor:"#f5f5f5",
  justifyContent:"center",
  alignItems:"center",

},
avatarText:{
  fontSize:18,
 fontWeight:"600",
 color:"#000",
},
username:{
   fontSize:16,
 fontWeight:"600",
 color:"#000",
},
timeAgo:{
   fontSize:12,
   color:"#666",
},
timeRemainingBadge:{
  backgroundColor:"#000",
  paddingHorizontal:12,
  paddingVertical:6,
  borderRadius:12,

},
timeRemainingText:{
    color:"#fff",
    fontSize:12,
    fontWeight:"600",
},
postImage:{
  width:"100%",
  aspectRatio:1,
  backgroundColor:"#f5f5f5",

},
postFooter:{
  padding:16,

},
postDescription:{
  fontSize:15,
  color:"#000",
  marginBottom:8,
  lineHeight:20,
},
postInfo:{
  fontSize:14,
  color:'#666'
},
})