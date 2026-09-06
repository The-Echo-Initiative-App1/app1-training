import { Text, View, StyleSheet, TextInput, ActivityIndicator } from "react-native";
import { Image } from "expo-image";

export default function About() {
  return (
    <View style={styles.container}>
     
      <Image source={{uri:"https://i.pinimg.com/1200x/b6/3f/17/b63f1750a25c5b994e855e5aa9546ba8.jpg",}}
      style={styles.image}/>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image:{
    width:200,
    height:200,
  },
});
