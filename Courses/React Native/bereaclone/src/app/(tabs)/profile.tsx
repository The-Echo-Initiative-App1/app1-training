import { Text, View, StyleSheet, TouchableOpacity, ScrollView, Alert} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "../context/AuthContext";
import { use, useState } from "react";
import { Image } from "expo-image";
import * as ImagePicker from "expo-image-picker";
import { uploadProfileImage } from "../lib/supabase/storage";
import { useRouter } from "expo-router";


export default function Profile() {
   const {user,uploadUser,signOut}=useAuth();
   const [isUpdating,setIsUpdating]=useState(false);
   const router=useRouter();


   const handleUpdateProfileImage=async()=> {
     if (!user) return;
   
    
      const {status}=await ImagePicker.requestMediaLibraryPermissionsAsync();
      if(status!=="granted"){
        Alert.alert("Permission nedded","We need camera roll permissions to select a profile image"
         
        );
        return;
      }
      const result=await ImagePicker.launchImageLibraryAsync({
        mediaTypes:["images"],
        allowsEditing:true,
        aspect:[1,1],
        quality:0.8,

      })
      if(!result.canceled && result.assets[0]){
        setIsUpdating(true);
        try{
          const imageUrl=await uploadProfileImage(user?.id,
            result.assets[0].uri);
            await uploadUser({profileImage:imageUrl});
            Alert.alert(
              "succes","profile image update ."
            )

        }
        catch(error){
          console.error("Error updating profile image",error)
          Alert.alert(
            "Error",
            "Failed to update profile image.Please try again"
          )


        }
        finally{
          setIsUpdating(false);
        }
      }
     

   };
   const handleSignOut = async ()=>{
    Alert.alert("Sign out ", "Are you sure you want to sign ouy",
     [ {text:"cancel"
      ,style:"cancel"},
      {text:"Sign Out"
      ,style:"destructive", 
       onPress:async()=>{
        await signOut();

        router.replace("/(auth)/login")
       }}
    
    ])

   }
  return (
    <SafeAreaView style={styles.container} edges={["top","bottom"]}>
      <ScrollView contentContainerStyle={styles.content}>
      <View style={styles.profileSectin}>
         <TouchableOpacity onPress={handleUpdateProfileImage} disabled={isUpdating}>
            
      {user?.profileImage? (
        <Image source={{uri: user.profileImage}}
       style={styles.profileImage}
       cachePolicy={"none"}/>
      ):
       (<View style={[styles.profileImage,styles.profileImagePlaceholder]}>
       <Text style={styles.profileImageText}>
        {user?.name?.[0]?.toUpperCase() || "U" }
          </Text>
       </View>
            )}
               <View style={styles.editBadge}>
                    <Text style={styles.editBadgeText}>Edit</Text>
                </View>   
                        
         </TouchableOpacity>
          <Text style={styles.name}>{user?.name ||"No Name"}</Text> 
          <Text style={styles.username}>{user?.username ||"user"}</Text>
           <Text style={styles.email}>{user?.email}</Text>
          
           <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account</Text>

          <TouchableOpacity style={styles.settingItem}>
            <Text style={styles.settingLablel}>Edit Profile</Text>
            <Text style={styles.settingValue}>→</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingItem}>
            <Text style={styles.settingLablel}>Notifications</Text>
            <Text style={styles.settingValue}>→</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingItem}>
            <Text style={styles.settingLablel}>Privacy</Text>
            <Text style={styles.settingValue}>→</Text>
          </TouchableOpacity>
        </View>
            <View style={styles.section}>
              <TouchableOpacity style={[styles.settingItem,styles.signOutButton]} onPress={handleSignOut}>
              <Text style={styles.signOutText}>Sign Out</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.settingItem,styles.deleteButton]}>
              <Text style={styles.deletetext}>Delete Account</Text>
              </TouchableOpacity>
            </View>
            </View>
        </ScrollView>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#fff"
  },
  content:{
     padding: 32,
  },
  profileSectin:{
    alignItems:"center",
    marginBottom:32,
    paddingBottom:32,
    borderBottomWidth:1,
    borderBottomColor:"#f0f0f0",
  },
  profileImage:{
    width:100,
    height:100,
    borderRadius:50,
    marginBottom:16,
    
  },
   profileImagePlaceholder:{
    backgroundColor:"#f0f0f0",
    justifyContent:"center",
    alignItems:"center",
   },
    profileImageText:{
      fontSize:40,
      fontWeight:"600",
      color:"#666",
    },
    editBadge:{
      position:"absolute",
      bottom:10,
      left:"50%",
      transform:[{translateX:-22}],
      backgroundColor:"#000",
      paddingHorizontal:12,
      paddingVertical:6,
      borderRadius:16,

    },
    editBadgeText:{
      color:"#fff",
      fontSize:12,
      fontWeight:"600",

    },
    name:{
      fontSize:24,
      fontWeight:"bold",
      marginBottom:4,
      color:"#000",
    },
    username:{
      fontSize:16,
      marginBottom:4,
      color:"#666",
    },
    email:{
      fontSize:14,
      color:"#999",
    },
    section:{
      marginBottom:32,

    },
     sectionTitle:{
      fontSize:18,
      fontWeight:"600",
      marginBottom:16,
      color:"#000",
     },
     settingItem:{
       flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: "#f9f9f9",
    borderRadius: 12,
    marginBottom: 8,
  },
     settingLablel:{
       fontSize: 18,
    color: "#999",
     },
     settingValue:{
       fontSize: 18,
    color: "#999",
     },
     signOutButton:{
         backgroundColor: "#f5f5f5",
    marginBottom: 8,
     },
     signOutText:{
      fontSize: 16,
    color: "#000",
    fontWeight: "500",
     },
     deleteButton:{
       backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ff3b30",
     },
     deletetext:{fontSize: 16,
    color: "#ff3b30",
    fontWeight: "500",},


});