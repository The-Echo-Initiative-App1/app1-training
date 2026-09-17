import { View,Text ,Image,StyleSheet, ScrollView, TouchableOpacity, Modal, TextInput} from "react-native";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PostCard from "@/components/PostCard";
import { useState } from "react"; 

import { posts } from "@/data/posts";
import Navi from "@/components/navi";

export default function Home(){
  const [showModal, setShowModal] = useState(false);
  const [description, setDescription] = useState("");
  const [postList, setPostList] = useState(posts);

    
    return(<>
       <SafeAreaView style={{ flex: 1 }}>
        
    <View style={styles.container} >
        <Text style={styles.welcome}>Welcome To Home Page</Text>
        <FlatList
  data={postList}
  renderItem={({ item }) => (
    <PostCard post={item} />
  )}
  keyExtractor={(item) => item.id}
/>
<TouchableOpacity
  onPress={() => setShowModal(true)}
  style={{
    backgroundColor: "black",
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    marginBottom:35,
    borderRadius:50,
  }}
>
  <Text style={{ color: "white", fontSize: 30 }}>+</Text>
</TouchableOpacity>
</View>

<Modal visible={showModal} >
   <View style={styles.modalContainer}>
  <Text  style={styles.modalTitle}>Create Post</Text>
  <TextInput placeholder="Write your post here..." value={description} onChangeText={setDescription}  style={styles.input}    multiline></TextInput>
  <TouchableOpacity  style={[styles.button,styles.postButton]} onPress={() => {
    const newPost = {
      id: Date.now().toString(),
      userId: "1",
      description: description,
      image: require("@/data/post1.jpg"),
    };

    setPostList([...postList, newPost]);
    setDescription("");
    setShowModal(false);
  }}>
  <Text  style={styles.postButtonText}>Post</Text>
</TouchableOpacity>
<TouchableOpacity onPress={() => setShowModal(false)} style={[styles.button,styles.cancelButton]} >
  <Text  style={styles.cancelButtonText}>Cancel</Text>
</TouchableOpacity>
</View>
  

</Modal>



<Navi/>
        </SafeAreaView></>)
}
const styles=StyleSheet.create({
    container:{
     flex: 1,
  paddingHorizontal: 20,
 
       
    },

    post:{
    backgroundColor: "#fcfcfc",
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
    fontSize:20,
    },
    postText:{
        fontSize:15,
        fontWeight:"600",
        padding:5,
        
    },

    postList:{},
    welcome:{
     marginTop:30,
     fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
    color:"#090737"
    },
    section:{
    padding: 3,
    borderRadius: 10,
    },
    liked: {
  color: "red",
  fontSize: 28,
},

notLiked: {
  color: "black",
  fontSize: 28,
},
modalContainer: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#f5f5f5",
  padding: 20,
},

modalTitle: {
  fontSize: 28,
  fontWeight: "bold",
  marginBottom: 25,
},

input: {
  width: "100%",
  height: 120,
  borderWidth: 1,
  borderColor: "#ccc",
  borderRadius: 12,
  padding: 15,
  backgroundColor: "white",
  textAlignVertical: "top",
  marginBottom: 20,
},

button: {
  width: "100%",
  padding: 15,
  borderRadius: 10,
  alignItems: "center",
  marginBottom: 10,
},

postButton: {
  backgroundColor: "#090737",
},

cancelButton: {
  backgroundColor: "#ddd",
},

postButtonText: {
  color: "white",
  fontSize: 18,
  fontWeight: "bold",
},

cancelButtonText: {
  color: "black",
  fontSize: 18,
  fontWeight: "bold",
},

})