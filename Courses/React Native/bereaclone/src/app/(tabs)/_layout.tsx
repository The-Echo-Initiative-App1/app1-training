import {  NativeTabs } from "expo-router/unstable-native-tabs";
import { Ionicons } from "@expo/vector-icons";

export default function RootLayout() {
  return (
  <NativeTabs>
    <NativeTabs.Trigger name="index" >
         <NativeTabs.Trigger.Label>
          Home
          </NativeTabs.Trigger.Label>
          
          <NativeTabs.Trigger.Icon sf={"house"}>
          </NativeTabs.Trigger.Icon>
     
      </NativeTabs.Trigger>

    <NativeTabs.Trigger
     name="profile" >
         <NativeTabs.Trigger.Label>
          Profile
          </NativeTabs.Trigger.Label>
          
          <NativeTabs.Trigger.Icon sf={"person"}>
        
          </NativeTabs.Trigger.Icon>
            </NativeTabs.Trigger>
   
    

  </NativeTabs>)};
