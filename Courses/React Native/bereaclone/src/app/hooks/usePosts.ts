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
    const loadPost = async () => {
  if (!user) return;

  setIsLoading(true);

  try {
    const { error: deactivateError } = await supabase
      .from("posts")
      .update({ is_active: false })
      .eq("user_id", user.id)
      .eq("is_active", true);

    if (deactivateError) {
      console.error("Error deactivating old posts:", deactivateError);
    }

    const { data: postsData, error: postsError } = await supabase
      .from("posts")
      .select(`
        *,
        profiles(
          id,
          name,
          username,
          profile_image_url
        )
      `)
      .eq("is_active", true)
      .gt("expires_at", new Date().toISOString())
      .order("created_at", { ascending: false });

    if (postsError) {
      console.error("Error loading posts:", postsError);
      throw postsError;
    }

    if (!postsData || postsData.length === 0) {
      setPosts([]);
      return;
    }

    const postsWithProfiles = postsData.map((post) => ({
      ...post,
      profiles: post.profiles || null,
    }));

    setPosts(postsWithProfiles);
  } catch (error) {
    console.error("Error in loadPost:", error);
  } finally {
    setIsLoading(false);
  }
};
const createPost = async (
  imageUri: string,
  description?: string
) => {
  if (!user) {
    throw new Error("User not authenticated");
  }

  try {
    const imageUrl = await uploadPostImage(
      user.id,
      imageUri
    );

    const now = new Date();

    const expiresAt = new Date(
      now.getTime() + 24 * 60 * 60 * 1000
    );

    const { error } = await supabase
      .from("posts")
      .insert({
        user_id: user.id,
        image_url: imageUrl,
        description: description || null,
        expires_at: expiresAt.toISOString(),
        is_active: true,
      });

    if (error) {
      console.error("Error creating post:", error);
      throw error;
    }


    await loadPost();

  } catch (error) {
    console.error("Error in createPost:", error);
    throw error;
  }
};

    return{createPost,posts};
}