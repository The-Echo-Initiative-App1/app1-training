import {
  Text,
  View,
  StyleSheet,
  TextInput,
  ActivityIndicator,
} from "react-native";

import { Link, useRouter } from "expo-router";
import { Host,Button} from '@expo/ui/jetpack-compose'


export default function Index() {
  const router=useRouter();
  return (
     <Host>
      <View style={styles.container}>
      <Text style={styles.helloWorldtitle }>Hello People</Text>
      
     
      <TextInput placeholder="Email"/>
      <ActivityIndicator size={"large"}/>
      <Link href={"/about"}>Go To About Screen</Link>
     <Button >
        <Text>Navigate</Text>
        </Button>
        
    </View>
    </Host>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  helloWorldtitle:{
    color:"red",
  },
  image:{
    width:200,
    height:200,
  },
});
