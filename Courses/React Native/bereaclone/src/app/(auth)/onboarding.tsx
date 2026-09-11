import { useRouter } from "expo-router";
import { useState } from "react";
import { TextInput, View, Text, TouchableOpacity, StyleSheet,Alert ,ActivityIndicator,Image} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from  "../context/AuthContext";
import * as ImagePicker from "expo-image-picker";
import Profile from "../(tabs)/profile";
import { supabase } from "../lib/supabase/client";
import { uploadProfileImage } from "../lib/supabase/storage";

export default function SignUpScreen(){
     const[name,setName]=useState("");
     const[username,setUsername]=useState("");
     const[isLoading,setIsLoading]=useState(false); 
     const[ProfileImage,setProfileimage]=useState<string|null>(null)
    const { user,uploadUser } = useAuth();
    const router=useRouter();
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
         setProfileimage(result.assets[0].uri)
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
         setProfileimage(result.assets[0].uri)
      }

     }
     const showImagePicker = () => {
  Alert.alert(
    "Select profile image",
    "Choose an option",
    [
      { text: "Camera", onPress: takephoto },
      { text: "Photo Library", onPress: pickImage },
      { text: "Cancel", style: "cancel" },
    ]
  );
};const handleComplete = async () => {
  if (!name || !username) {
    Alert.alert("Error", "Please fill in all fields");
    return;
  }

  if (username.length < 3) {
    Alert.alert("Error", "Username must be at least 3 characters");
    return;
  }

  setIsLoading(true);

  try {
      if(!user){
        throw new Error("User not authenticated")
      }

    const { data: existingUser } = await supabase
      .from("profiles")
      .select("id")
      .eq("username", username)
      .neq("id", user.id)
      .single();

    if (existingUser) {
      Alert.alert(
        "Error",
        "The username is already taken, please choose another one"
      );
      return;
    }
  //upload profile image
   let ProfileImageUrl: string|undefined;
  if (ProfileImage) {
    try {
       ProfileImageUrl= await uploadProfileImage(user.id, ProfileImage);
    } catch (error) {
      console.error("Error uploading profile image", error);
      Alert.alert(
        "Warning",
        "Failed to upload profile image. Continuing without image"
      );
    }
  }
  //updateProfile
  await uploadUser({
    name,
    username,
    profileImage:ProfileImageUrl,
    onboardingCompleted:true,
  });
  router.replace("/(tabs)")
  } catch (error) {
    Alert.alert(
      "Error",
      "Failed to complete onboarding, please try again"
    );
  } finally {
    setIsLoading(false);
  }};

    return(
     <SafeAreaView edges={["top","bottom"]} style={styles.container}>
    <View style={styles.content}>
        <View style={styles.header}>
            <Text style={styles.title}>Complete your project</Text>
            <Text style={styles.subtitle}>Add you information to get started</Text>

        </View>
        <View style={styles.form}>
            <TouchableOpacity style={styles.imageContainer} onPress={showImagePicker}>
              {ProfileImage ?(<Image source={{uri:ProfileImage}}
                                     style={styles.profileImage}/>
                                    )
              :(
                <View style={styles.placeholderImage}>
                    <Text style={styles.placeholderText}>+</Text>
                </View>
              )}
                <View style={styles.editBadge}>
                    <Text style={styles.editText}> Edit</Text>
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
                {isLoading? (
                <ActivityIndicator size={24} color="#fff"/>):(
                <Text style={styles.buttontext} >Complete Set Up</Text>)}

            </TouchableOpacity>

            

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
    fontWeight:"600",

  },
  form:{
    width:"100%",
    alignItems:"center",

  },
  imageContainer :{
    marginBottom:32,
    position:"relative",
  },
  profileImage:{
    width:120,
    height:120,
    borderRadius:60,
    backgroundColor:"#f5f5f5",
  },
  placeholderImage :{
   width:120,
   height:120,
    position:"relative",
    backgroundColor:"#f5f5f5",
    borderRadius:60,
    justifyContent:"center",
    alignItems:"center",
    borderWidth:2,
    borderColor:"#e0e0e0",
    borderStyle:"dashed",
  },
  placeholderText :{
   fontSize:48,
   color:"#999"
  },
  input:{
    backgroundColor:"#f5f5f5",
    borderRadius:12,
    padding:16,
    fontSize:16,
    marginBottom:16,
    borderWidth:1,
    borderColor:"#e0e0e0",
    width:"100%",

  },
  button:{
    backgroundColor:"#000",
    borderRadius:12,
    padding:16,
    alignItems:"center",
    width:"100%",


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
