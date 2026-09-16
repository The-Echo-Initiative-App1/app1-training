import { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
type Post = {
  id: string;
  userId: string;
  description: string;
  image: any;
};
export default function PostCard({ post }: { post: Post }) {

 const [liked,setLiked]=useState(false);
 
   return(<>
   <View>
            <View style={styles.post}>
                <Text style={styles.postText}>{post.userId}</Text>
                <Text style={styles.postText}>{post.description}</Text>
                <Image source={post.image } style={{width:300,height:200,borderRadius:12,padding:10}} />
            </View>
            <View style={styles.post}>
            <TouchableOpacity style={styles.section}  onPress={() => setLiked(!liked)}> 
                <Text style={liked ? styles.liked : styles.notLiked}> {liked ? "♥" : "♡"} </Text>  
            </TouchableOpacity>
            </View>
            </View>

    </>
)}
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
    postImage: {
  width: 300,
  height: 200,
  borderRadius: 12,
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

})
