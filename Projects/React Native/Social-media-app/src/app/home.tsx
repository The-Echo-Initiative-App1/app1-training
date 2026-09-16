import { View,Text ,Image,StyleSheet, ScrollView, TouchableOpacity} from "react-native";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PostCard from "@/components/PostCard";

import { posts } from "@/data/posts";

export default function login(){
   

    
    return(<>
       <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
    <View style={styles.container} >
        <Text style={styles.welcome}>Welcome To Home Page</Text>
        <FlatList
  data={posts}
  renderItem={({ item }) => (
    <PostCard post={item} />
  )}
  keyExtractor={(item) => item.id}
/>
</View>
            
        </ScrollView>
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

})