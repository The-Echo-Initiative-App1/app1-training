import { Tabs } from "expo-router";
import {Ionicons} from "@expo/vector-icons";
export default function TabsLayout() {
  return (
    <Tabs screenOptions={{tabBarActiveTintColor: "coral"}}>
        <Tabs.Screen
         name="index"
          options={{
            title: "home",
             tabBarIcon: ({color, size, focused})=> 
             <Ionicons name={focused ? "home" : "home-outline"} color={color} size={size}/>,
          }}
          />
         <Tabs.Screen 
         name="about"
         options={{
            title: "about",
             tabBarIcon: ({color, size, focused})=> 
             <Ionicons name={focused ? "information-circle" : "information-circle-outline"} color={color} size={size}/>,
          }}
          />
          <Tabs.Screen 
          name="profile" 
          options={{
            title: "profile",
             tabBarIcon: ({color, size, focused})=> 
             <Ionicons name={focused ? "person" : "person-outline"} color={color} size={size}/>,
          }}
          />
    </Tabs>
  );
}
