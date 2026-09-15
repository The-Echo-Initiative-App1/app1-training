import { View, ActivityIndicator, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {useRouter} from "expo-router"
import { useAuth } from "../../context/AuthContext";
import { useState, } from "react";
import * as ImagePicker from 'expo-image-picker'
import { supabase } from "@/lib/supabase/client";
import { uploadProfileImage } from "@/lib/supabase/storage";

export default function SignUpScreen(){
    const [name, setName]=useState("");
    const [username, setUsername]=useState("");
    const[isLoading,setIsLoading]=useState(false);
    const [profileImage, setProfileImage]=useState<string | null>(null)
    const {user}=useAuth()
    const handleComplete=async()=>{
      if(!name || !username){
            Alert.alert("Error" ,"please fill in all fields");
            return;
        }
        
        if(username.length<3){
            Alert.alert("Error","password must be at least 3 characters");
            return;
        }
        setIsLoading(true);
        try{
            if(!user){
              throw new Error("user not authenticated");
            }
            const {data: existingUser} = await supabase.from("profiles").select("id").eq("username", username ).neq("id", user.id).single();

            if(existingUser){
              Alert.alert("error", "this username is already taken. Please choose another one")
            setIsLoading(false);
            return;
            }

            //upload profile image
            if(profileImage){
              try {
                await uploadProfileImage(user.id, profileImage)
              } catch(error){
                  console.error("Error uploading profile image:", error);
                  Alert.alert(
                    "Warning",
                    "Failed to upload profile image. Continuing without image."
                  );
              }
              
            
            }
          }
        catch(error){
            Alert. alert("error", "failed to complete the onboarding. please try again")
        }
        finally{
            setIsLoading(false);
        }
    };
    const pickImage=async ()=>{
        const {status}=await ImagePicker.requestMediaLibraryPermissionsAsync();
        if(status!== "granted"){
            Alert.alert(
                "permission needed",
                "We need camera roll permission to select a profile picture",
            );
            return;
        }
        const result =await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ["images"],
            allowsEditing:true,
            aspect:[1,1],
            quality:0.8
        });
        if (!result.canceled && result.assets[0]){
            setProfileImage(result.assets[0].uri)
        }
    }
    const takePhoto=async ()=> {
      const {status}=await ImagePicker.requestCameraPermissionsAsync();
        if(status!== "granted"){
            Alert.alert(
                "permission needed",
                "We need camera roll permission to take a photo",
            );
            return;
        }
        const result =await ImagePicker.launchCameraAsync({
            
            allowsEditing:true,
            aspect:[1,1],
            quality:0.8,
        });
        if (!result.canceled && result.assets[0]){
            setProfileImage(result.assets[0].uri)
        }}
    const showImagePicker=()=>{
      Alert.alert("Select Profile Image ", "Choose an option", [
        {text: "camera", onPress: takePhoto},
        {text: "Photot Library", onPress: pickImage},
        {text: "Cancel", style: "cancel"},
      ])
    }
    return (
    <SafeAreaView edges={["top", "bottom"]} style={styles.container}>
        <View style={styles.content}>
            <View style={styles.header}>
                <Text style={styles.title}>Complete Your Profile</Text>
                <Text style={styles.subtitle}>Add your information to get started</Text>
            </View>
            <View style={styles.form}>
                <TouchableOpacity style={styles.imageContainer} onPress={showImagePicker}>
                    {profileImage ? (<Image source={{uri: profileImage}} style={styles.profileImage}/>) : (
                    <View style={styles.placeholderImage}>
                        <Text  style={styles.placeholderText}>+</Text>
                    </View>
                    )}
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
  profileImage:{
    width: 120,
    height: 120,
    borderRadius:60,
    backgroundColor: "#f5f5f5"
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