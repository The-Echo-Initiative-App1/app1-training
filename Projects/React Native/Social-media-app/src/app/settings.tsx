import { useState } from "react"
import { View, Text, StyleSheet, Modal } from "react-native"
import { styles } from "./profile";
import Navi from "@/components/navi";
import { SafeAreaView } from "react-native-safe-area-context";
import { Alert } from "react-native";

export default function Seetings() {
   const [Switch,setSwiitch]=useState(false);
   const [Switch1,setSwiitch1]=useState(false);
   const [languageModal, setLanguageModal] = useState(false);
   const [language, setLanguage] = useState("English");

    

   return(<>
    <SafeAreaView style={{flex:1  ,backgroundColor: Switch1 ? "#222" : "#f5f5f5",}}>
    <View style={styles.options}>
          <Text style={styles.option}  onPress={() => setLanguageModal(true)}>Language :{language}</Text>
          <Text style={styles.option} onPress={() => setSwiitch(!Switch)} >Notifications : {Switch ? "On 🔔" : "Off 🔕"}</Text>
          <Text style={styles.option} onPress={() => setSwiitch1(!Switch1)}>Dark Mode  {Switch1? "On ☀︎" : "Off ⏾"}</Text>
          <Text style={styles.option} onPress={() =>  Alert.alert("Help", "This is the help section.")}>Help 🆘 </Text>
        </View>
        <Modal visible={languageModal}>
      <Text onPress={() => {
  setLanguage("French");
  setLanguageModal(false);
}}>
  French
</Text>
       <Text onPress={()=>{setLanguage("English");setLanguageModal(false)}}>English</Text>
        <Text onPress={()=>{setLanguage("Chinese");setLanguageModal(false)}}>Chinese</Text>
   </Modal>
        <Navi/>
        </SafeAreaView>
    </>)
}