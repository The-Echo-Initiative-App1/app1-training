import { StyleSheet,View,Text } from "react-native";
import { useEffect } from "react";
import { Stack, useRouter } from "expo-router";


export default function Index() {
  
  const router=useRouter();
  useEffect(()=>{
    const timer=setTimeout(()=>{
      router.replace("/login");
    },3000)
    return () => clearTimeout(timer);
  },[])
  
  return <>
  <View style={styles.container}>
    <Text style={styles.Title}> Social media app</Text>
  </View>
  
  </>;
}



const styles=StyleSheet.create({
container:{
  backgroundColor: "#5684AE",
  flex: 1,
  alignItems: "center",
  justifyContent: "center",

},
Title:{
  fontSize: 30,
  fontStyle: "italic",
  fontWeight: "bold",
  textAlign: "center",
},


})