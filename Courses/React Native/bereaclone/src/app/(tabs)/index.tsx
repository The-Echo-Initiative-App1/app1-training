import {
  Text,
  View,
  StyleSheet,
  TextInput,
  ActivityIndicator,
  Button,
} from "react-native";

import { Link, useRouter } from "expo-router";



export default function Index() {
  const router=useRouter();
  return (
     
      <View style={styles.container}>
      <Text style={styles.helloWorldtitle }>Hello People</Text>

     
      <TextInput placeholder="Email"/>
      <ActivityIndicator size={"large"}/>
      <Link href={"/about"}>Go To About Screen</Link>
      <Button title="Navigate" onPress={()=> router.push("/about")}>
      </Button>
        
    </View>
    
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
