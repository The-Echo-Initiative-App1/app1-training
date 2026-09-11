import { Text, View, StyleSheet, TextInput, ActivityIndicator} from "react-native";
import { Image } from "expo-image";
import { Button, Host, Column } from "@expo/ui/jetpack-compose";
import { BottomSheet } from "@expo/ui";
import { useState } from "react";
import { Color } from "expo-router";

export default function Profile() {
  const [isOpened, setIsOpened] = useState(false);

  const [color,setColor]=useState("#FF6347")

  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
     

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    width: 200,
    height: 200,
  },
});