
import { useRouter } from "expo-router";
import { useState } from "react";
import { TextInput, View, Text, TouchableOpacity, StyleSheet,Alert ,ActivityIndicator} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from  "../context/AuthContext";

export default function SignUpScreen(){

    return(
     <SafeAreaView edges={["top","bottom"]} style={styles.container}>
    <View style={styles.content}>
        <View style={styles.header}>
            <Text style={styles.title}>Complete your project</Text>
            <Text style={styles.subtitle}>Add you information to get started</Text>

        </View>
        <View style={styles.form}>

        </View>
    </View>
    </SafeAreaView>)
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  content:{
    flex:1,
    justifyContent:"center",
    padding:24,

  },
  header:{
    marginBottom:32,

  },
title:{
    fontSize:32,
    fontWeight:"bold",
    marginBottom:8,

  },
  subtitle:{
    fontSize:16,
    marginBottom:32,
    color:"#666",

  },
  form:{
    width:"100%",

  },
  input:{
    backgroundColor:"#f5f5f5",
    borderRadius:12,
    padding:16,
    fontSize:16,
    marginBottom:16,
    borderWidth:1,
    borderColor:"#e0e0e0",

  },
  button:{
    backgroundColor:"#000",
    borderRadius:12,
    padding:16,
    alignItems:"center",

  },
  buttontext:{
    color:"#fff",
    fontSize:16,
    fontWeight:"600",
  },

  linkButton:{
    marginTop:24,
    alignItems:"center",
  },
  linkbuttontext:{
    color:"#666",
    fontSize:14,


  },
  linkbuttontextbold:{
    fontWeight:"600",
    color:"#000",

  }
  })
