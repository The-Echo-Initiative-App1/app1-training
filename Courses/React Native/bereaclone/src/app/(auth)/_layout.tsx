import { router, Stack, useRouter, useSegments } from "expo-router";
import { AuthProvider, useAuth } from "../context/AuthContext";
import { useEffect } from "react";


function RouteGard(){
  const router=useRouter();
  const {user}=useAuth();

  const segments=useSegments();
  const inAuthGroup=segments[0]==="(auth)";
  const inTabsGroup=segments[0]==="(tabs)";
  useEffect(()=>{
    if(!user)
    {if(!inAuthGroup){
       router.replace("/(auth)/login");
    }}
   
    else{
       if(!inTabsGroup){
      router.replace("/(tabs)");}
    }
  },[user,segments,router]);
 
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
  

