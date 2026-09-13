import { AuthProvider } from "@/context/AuthContext";
import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";

export default function RootLayout() {
  const router =useRouter()
  let isAuth=false;
  useEffect(()=>{
    if(!isAuth){
      router.replace("/(auth)/login")
    }
    else{
      router.replace("/(tabs)")
    }
  }, []);
  return (
  <AuthProvider>
  <Stack 
  screenOptions={{headerShown:false}}
  >
    <Stack.Screen name="(auth)"/>
    <Stack.Screen name="(tabs)"/>
  </Stack>
  </AuthProvider>
  );
}
 