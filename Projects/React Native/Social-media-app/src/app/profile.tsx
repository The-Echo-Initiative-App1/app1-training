import { users
 } from "@/data/users";
import { View ,Text,Image} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { posts } from "@/data/posts";
import { StyleSheet } from "react-native";
import Navi from "@/components/navi";

 export default function Profile() {
  const user = users[0];
  const post = posts[0];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.profile}>

        <Text style={styles.title}>Profile</Text>

        <Image
          source={ post.image}
          style={styles.profileImage}
        />

        <Text style={styles.username}>
          {user.username}
        </Text>

        <View style={styles.options}>
          <Text style={styles.option}>Language</Text>
          <Text style={styles.option}>Notifications 🔔</Text>
          <Text style={styles.option}>Dark Mode ☀</Text>
          <Text style={styles.option}>Help 🆘</Text>
        </View>

      </View>
      <Navi/>
    </SafeAreaView>
  );
}
 export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },

  profile: {
    alignItems: "center",
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 25,
  },

  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },

  username: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 30,
  },

  options: {
    width: "100%",
  },

  option: {
    fontSize: 18,
    padding: 15,
    backgroundColor: "white",
    marginBottom: 10,
    borderRadius: 10,
  },
});