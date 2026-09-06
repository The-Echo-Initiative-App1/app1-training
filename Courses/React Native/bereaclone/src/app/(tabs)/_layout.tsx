import { Color, Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function RootLayout() {
  return (
  <Tabs screenOptions={{tabBarActiveTintColor:"crimson"}}>
    <Tabs.Screen name="index" options={{
        title:"Home",
        tabBarIcon:({ focused })=>(<Ionicons 
              name={focused ? "home": "home-outline"}
              color={"black"}
              size={24}/>),}}/>
     <Tabs.Screen name="about" options={{title:"About" ,tabBarIcon:({focused})=>(<Ionicons name={focused ? "information-circle":"information-circle-outline"}
                                                                                  color={"black"}
                                                                                  size={24}/>), }}/>
    
     <Tabs.Screen name="profile" options={{title:"Profile", tabBarIcon:({focused})=>(<Ionicons name={focused ? "person":"person-outline"}
             color={"black"}
              size={24}/>),}}/>

   
  </Tabs>);
}