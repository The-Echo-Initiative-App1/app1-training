import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { supabase } from "../lib/supabase/client";
import { uploadPostImage, uploadProfileImage } from "../lib/supabase/storage";
import { Descriptor } from "expo-router/build/react-navigation";
export interface PostUser{
    id:string;
    name:string;
    username:string;
    profile_image_url?:string;
}

export interface Post{
    id:string;
    user_id:string;
    image_url:string;
    Description?:string;
    created_at:string;
    expires_at:string;
    is_active:boolean;
    profiles?:PostUser;
}
export const usePosts=()=>{
    const [posts,setPosts]=useState<Post[]>([])
    const[isLoading,setIsLoading]=useState(true);
    const{user}=useAuth();

    useEffect(()=>{
        loadPost()

    },[])
    const loadPost=async ()=>{
        if(!user) return
        setIsLoading(true)
        try{
           await supabase.from("posts")
           .select("*").eq("is_active",true)
           .gt("expires_at",new Date().toISOString())
        }
        catch(error){
            console.error("Error in loadPosts:" ,error)

        }finally{
            setIsLoading(false)
        }

    }
    const  createPost=async (imageUri:string, description?:string)=>{
        if(!user){
            throw new Error("User not authenticated");

        }
        try{

            const imageUrl=await uploadPostImage(user.id,imageUri);
            const now=new Date();
            const expiresAt= new Date(now.getTime()+24*60*60*1000);
            
            const {error}=await supabase.from("posts").insert({
                user_id:user.id,
                image_url:imageUrl,
                description:description|| null,
                expires_at:expiresAt.toISOString(),
                is_active:true,
                
            })
            .select()
            .single();
            if(error){
                console.error("Error creating post:",error);
                throw error
            }
        }
        catch(error){
            console.error("Error in createPost",error);
            throw error;

        }
    };

    return{createPost}
}