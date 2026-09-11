import { Text, View, StyleSheet, TextInput, ActivityIndicator, Button } from "react-native";
import { Image} from "expo-image";
import { Link, useRouter } from "expo-router";
export default function Index() {
  const router=useRouter()
  return (
    <View style={styles.container}>
      <Text style={styles.helloWorldTitle}>hello world</Text>
      <Link href={"/about"}>go to about screen</Link>
      <TextInput placeholder="email"/>
      <ActivityIndicator size={"large"}/>
      <Button title="Navigate" onPress={()=> router.push("/about")}/ >
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  helloWorldTitle:{
    color: "red"
  },
  image:{
  width:200,
  height:200
  },
});
