import { Text, View, StyleSheet, TextInput, ActivityIndicator } from "react-native";
import { Image} from "expo-image";
import {Button,Host, Column, ModalBottomSheet, } from '@expo/ui/jetpack-compose'
import {useState} from "react";
export default function Profile() {
  const [isOpened, setisOpened]=useState(false)
    const [color,setColor]=useState("#3276b1")
  return (
    <View style={styles.container}>
      <Text style={styles.helloWorldTitle}>hello world</Text>
      <Text>profile screen</Text>

      <Host>
        <Button onClick={() => setisOpened(true)}><Text>Open Bottom Sheet</Text></Button>
        <ColorPicker/>
        <Column>
          
          <ModalBottomSheet isOpened={isOpened} onIsOpenedChange={setisOpened}>
            <Text>hello everyone</Text>
            <View style={{height:500}}>
              <Text>hello</Text>
            </View>
          </ModalBottomSheet>
        </Column>
      </Host>
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
