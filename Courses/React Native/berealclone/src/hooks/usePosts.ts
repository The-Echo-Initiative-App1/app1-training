import { useAuth } from "../context/AuthContext";
import { supabase } from "../lib/supabase/client";
import { uploadPostImage } from "../lib/supabase/storage";

export const usePosts=()=>{
    const {user}=useAuth()
    const createPost=async (imageUri: string, description?: string)=>{
        if(!user){
            throw new Error("User not authenticated")
        }
        try{
            const imageUrl= await uploadPostImage(user.id, imageUri)
            const now=new Date
            const expiresAt= new Date(now.getTime()+24*60*60*1000)

            const {error} = await supabase.from("posts").insert({
                user_id: user.id,
                image_url: imageUrl,
                description: description || null,
                expires_at: expiresAt.toISOString(),
                is_active: true,
            })
            .select()
            .single()
            if(error){
                console.error("Errorcreating post:", error)
                throw error;
            }
            
        }catch(error){
            console.error("Error in createpost:", error)
            throw error;
        }
    }
    return{createPost}
}   