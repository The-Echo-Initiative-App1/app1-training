import { TextInput, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
export default function LoginScreen(){
     const router=useRouter()

    return(
        
     <SafeAreaView edges={["top","bottom"]} style={styles.container}>
    <View style={styles.content}>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>Sign In to continue</Text>
        <View style={styles.form}>
            <TextInput 
            placeholder="Email...." 
            placeholderTextColor={"#999"}
            keyboardType="email-address"
            autoComplete="email"
            autoCapitalize="none"
            style={styles.input}
            />
            <TextInput placeholder="Password...." 
            placeholderTextColor={"#999"}
            autoComplete="password"
            secureTextEntry
            autoCapitalize="none"
            style={styles.input}
            />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttontext} >Sign In</Text>

            </TouchableOpacity>

             <TouchableOpacity style={styles.linkButton} onPress={()=>router.push("/signup")}>
                <Text style={styles.linkbuttontext}>Don't have an account? <Text style={styles.linkbuttontextbold}>Sign Up</Text>
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