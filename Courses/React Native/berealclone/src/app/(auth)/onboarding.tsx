import { View, ActivityIndicator, Text, TextInput, TouchableOpacity, StyleSheet, Alert} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {useRouter} from "expo-router"
import { useAuth } from "../../context/AuthContext";
import { useState, } from "react";
import * as ImagePicker from 'expo-image-picker'
export default function SignUpScreen(){
    const [name, setName]=useState("");
    const [username, setUsername]=useState("");
     const[isLoading,setIsLoading]=useState(false); 
    const handleComplete=()=>{

    }
    return (
    <SafeAreaView edges={["top", "bottom"]} style={styles.container}>
        <View style={styles.content}>
            <View style={styles.header}>
                <Text style={styles.title}>Complete Your Profile</Text>
                <Text style={styles.subtitle}>Add your information to get started</Text>
            </View>
            <View style={styles.form}>
                <TouchableOpacity style={styles.imageContainer}>
                    <View style={styles.placeholderImage}>
                        <Text  style={styles.placeholderText}>+</Text>
                    </View>
                    <View  style={styles.editBadge}>
                        <Text  style={styles.editText}>Edit</Text>
                    </View>
                </TouchableOpacity>

                <TextInput style={styles.input}
                  placeholder="Full Name"
                  placeholderTextColor="#999"
                  value={name}
                  onChangeText={setName}
                  autoCapitalize="words"/>
                <TextInput style={styles.input}
                  placeholder="Username"
                  placeholderTextColor="#999"
                  value={username}
                  onChangeText={setUsername}
                  autoComplete="username"/>
                <TouchableOpacity style={styles.button} onPress={handleComplete}>
                {isLoading ? (
                    <ActivityIndicator size={24} color="#fff"/>
                ) : (
                    <Text style={styles.buttonText}>COmplete Setup</Text>
                )}
            </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
    );
} 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  content:{
    flex:1,
    justifyContent: "center",
    padding: 24, 

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
    color: "#666",

  },
  form:{
    width:"100%",
    alignItems:"center"
  },
  imageContainer:{
    marginBottom:32,
    position:"relative"
  },
  placeholderImage:{
    width:120,
    height:120,
    backgroundColor:"#f5f5f5",
    borderRadius:60,
    justifyContent:"center",
    alignItems:"center",
    borderWidth:2,
    position:"relative",
    borderColor:"#e0e0e0",
    borderStyle:"dashed",
  },
  placeholderText:{
    fontSize:48,
    color:'#999'
  },
  editBadge:{
    position:"absolute",
    bottom:0,
    right:0,
    backgroundColor:"#000",
    paddingHorizontal:12,
    paddingVertical:6,
    borderRadius:16,
  },
  editText:{
    color:"#fff",
    fontSize:12,
    fontWeight:'600',

  },
  input:{
    width:"100%",
    backgroundColor:"#f5f5f5",
    borderRadius:12,
    padding:16,
    fontSize:16,
    marginBottom:16,
    borderWidth:1,
    borderColor:"#e0e0e0"
  },
  button:{
    width:"100%",
    backgroundColor:"#000",
    borderRadius:12,
    padding:16,
    alignItems:"center"
  },
  buttonText:{
    color: "#fff",
    fontSize:16,
    fontWeight:"600",

  },
  linkButton:{
    marginTop:24,
    alignItems:"center"
  },
  linkButtonText:{
    fontSize:14,
    color: "#666"
  },
  linkButtonTextBold:{
    fontWeight:"600",
    color:"#000",
  },


});