import { useRouter } from "expo-router";
import { TouchableOpacity,Text ,View} from "react-native";
import { StyleSheet } from "react-native";

export default function Navi(){
    const router=useRouter();
    return(<>
    
    <View style={styles.navContainer}>
        <TouchableOpacity onPress={() => router.push("/home")}>
        <Text style={styles.navText}>Home</Text>
    </TouchableOpacity>
    
     <TouchableOpacity onPress={() => router.push("/profile")}>
        <Text style={styles.navText}>Profile</Text>
    </TouchableOpacity>
    
     <TouchableOpacity onPress={() => router.push("/settings")}>
        <Text style={styles.navText}>Settings</Text>
    </TouchableOpacity> 
    </View>
    </>)
}
const styles=StyleSheet.create({
    navContainer: {
     position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  height: 50,
  backgroundColor: "#efeaea",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
  },

  navText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },

})