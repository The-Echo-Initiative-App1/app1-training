
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { TextInput, View, Text, TouchableOpacity, StyleSheet,Alert ,ActivityIndicator} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from  "../context/AuthContext";

export default function SignUpScreen(){
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [isLoading,setIsLoading]=useState(false);

  const router=useRouter();
  const {signUp}=useAuth();
  useEffect(()=>{
    router.push("/(auth)/onboarding");

   
  },[])
  
  const handleSignUp=async()=>{
    if(!email||!password){
      Alert.alert("Error ,please fill in all fields");
      return;
    }
    
    if(password.length<3){
      Alert.alert("Error ,password must be at least 3 characters");
      return;
    }setIsLoading(true)
    try{
      await signUp(email,password);
      Alert.alert("Error,Failed to sign up")

    }
   
    catch(error){
       Alert.alert("Error,Failed to sign up please try again")


    }
     finally{
      setIsLoading(false);
    }

  }

    return(
     <SafeAreaView edges={["top","bottom"]} style={styles.container}>
    <View style={styles.content}>
        <Text style={styles.title}>create Account </Text>
        <Text style={styles.subtitle}>Sign Up to Get Started</Text>
        <View style={styles.form}>
            <TextInput 
            placeholder="Email...." 
            placeholderTextColor={"#999"}
            keyboardType="email-address"
            autoComplete="email"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            />
            <TextInput placeholder="Password...." 
            placeholderTextColor={"#999"}
            autoComplete="password"
            secureTextEntry
            autoCapitalize="none"
            value={password}
            onChangeText={setPassword}
            style={styles.input}
            />
            <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                {isLoading? (
                <ActivityIndicator size={24} color="#fff"/>):(
                <Text style={styles.buttontext} >Sign Up</Text>)}

            </TouchableOpacity>

             <TouchableOpacity style={styles.linkButton} onPress={()=>router.push("/(auth)/login")}>
                <Text style={styles.linkbuttontext}>Already have an account? <Text style={styles.linkbuttontextbold}>Sign In</Text>
                </Text>

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
