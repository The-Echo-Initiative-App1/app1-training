import { useState } from "react";
import { View,Text, TextInput, TouchableOpacity ,StyleSheet, Alert} from "react-native";
import { users } from "../data/users";
import { useRouter } from "expo-router";
export default function login() {
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const router=useRouter();
    
    function handleLogin() {const user=users.find((user)=>{
       return user.username===username && user.password===password;
    })
    if (user){
        router.push("/home")

    }
    else{
        Alert.alert("use a valid account")
    }}
    return(
        <>
        
        <View style={styles.container}>
            <Text style={styles.loginText} >Login</Text>
          <View>
            
            <Text style={styles.inputTitle}>Username</Text>
            <TextInput placeholder="Enter Your username" value={username} style={styles.textInput}  onChangeText={setUsername}/> 

            <Text style={styles.inputTitle}>Password</Text>
            <TextInput placeholder="Enter Your Password" value={password} style={styles.textInput}  onChangeText={setPassword} secureTextEntry={true}/>
             
             <Text style={styles.forgotText}>Forgot Password?</Text>
            
            <TouchableOpacity>
                <Text style={styles.loginButton}  onPress={handleLogin}>Login</Text>
            </TouchableOpacity>
            
            <Text style={styles.SignUpText}>Have Not Account Yet?</Text>
            <Text style={styles.SignUpText}>Sign Up</Text>


          </View>
        </View>
        </>
    )
}
const styles=StyleSheet.create({
    container:{
        backgroundColor:"#efefef",
        textAlign:"center",
        alignItems:"center"
    },
    textInput:{
    borderWidth: 1,
    borderColor: "#281757",
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    width:300,

    },
    inputTitle:{
        fontWeight:"bold",
        fontSize:15,
        padding:10,
    },
    SignUpText:{
        fontSize:15,
        alignContent:"center",
        padding:5,
        color:"#5e5c5c",
        marginBottom:10,
        marginTop:10,
    },
    loginButton:{
        width:300,
        height:50,
        backgroundColor:"#101e52",
        color:"#c7cfda",
        fontSize:25,
        fontWeight:"bold",
        textAlign:"center",
        padding:7,
        borderRadius:10,
        

    },
    loginText:{
        fontWeight:"bold",
        fontSize:40,
        marginTop:120,
        padding:40,
        color:"#080835"
    },
    forgotText:{
        color:"#666",
        fontSize:13,
        padding:5,
        marginBottom:10,
        
    },

})