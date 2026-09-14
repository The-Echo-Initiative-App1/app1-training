import { router, Stack, useRouter, useSegments } from "expo-router";
import { AuthProvider, useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { View } from "react-native";
import { styleText } from "node:util";


function RouteGard(){
  const router=useRouter();
  const {user,isLoading}=useAuth();

  const segments=useSegments();
  const inAuthGroup=segments[0]==="(auth)";
  const inTabsGroup=segments[0]==="(tabs)";
  useEffect(()=>{
    if(isLoading) return
    if(!user) 
    {if(!inAuthGroup){
       router.replace("/(auth)/login");
    }}
   
    else{
       if(!inTabsGroup){
      router.replace("/(tabs)");}
    }
  },[user,segments,router]);
  if(isLoading){
    return <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
      <ActivityIndicator size="large"/>
      </View>
  }
 
return(
 
 <Stack screenOptions={{ headerShown:false}}>
  <Stack.Screen name="login"/>
  <Stack.Screen name="signup"/>
  
  </Stack>
  
);
}
  

  export default function RootLayout(){
     return (
      <AuthProvider>
        <RouteGard/>
      </AuthProvider>
  
          );
    };
  

