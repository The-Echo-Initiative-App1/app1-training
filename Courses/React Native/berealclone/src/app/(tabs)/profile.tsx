import { Text, View, StyleSheet, TextInput, ActivityIndicator } from "react-native";
import { Image} from "expo-image";

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.helloWorldTitle}>hello world</Text>
      <Text>profile screen</Text>
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
