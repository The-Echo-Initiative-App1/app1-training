import { Text, View, StyleSheet, TextInput, ActivityIndicator } from "react-native";
import { Image} from "expo-image";

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.helloWorldTitle}>hello world</Text>
      <Image source={{uri:"https://newyorkpass.com/de/things-to-do/one-week-in-nyc",}}
      style={styles.image}
      />
      <TextInput placeholder="email"/>
      <ActivityIndicator size={"large"}/>
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
