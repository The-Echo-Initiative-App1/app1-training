import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
  TextInput,
  Modal,
} from "react-native";

import {  useRouter } from "expo-router";
import {  SafeAreaView } from "react-native-safe-area-context";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { Image } from "expo-image";
import { usePosts } from "../hooks/usePosts";




export default function Index() {
  const router=useRouter();
  const [showPreview,setShowPreview]=useState(false);
  const [previewImage,setpreviewImage]=useState<string| null>(null);
  const [description,setDescription]=useState<string>("");
  const [isUploading,setIsUploading]=useState(false);
  const {createPost}=usePosts();


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
  return (
  <SafeAreaView style={styles.container} edges={["bottom","top"]}>
    
      <TouchableOpacity style={styles.fab} onPress={showImagePicker}>
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
      
      <Modal visible={showPreview} transparent animationType="fade">
           <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Preview Your Post</Text>
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
                <Text style={styles.postButtonText}>Post</Text>
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
})