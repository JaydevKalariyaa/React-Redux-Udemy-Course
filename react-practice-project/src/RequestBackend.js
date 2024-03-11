import axios from "axios";
import { QueryClient } from "@tanstack/react-query";
export const queryClient = new QueryClient();
export const getPosts = async () => {
  try {
    const res = await axios.get("http://localhost:8080/posts");
    return res.data.posts;
  } catch (error) {
    throw new Error("Error in fetching posts.");
  }
};
export const getPost = async (id) => {
  try {
    const res = await axios.get(`http://localhost:8080/posts/${id}`);
    return res.data.post;
  } catch (error) {
    throw new Error("Error in fetching post.");
  }
};
export const addPost = async (post) => {
  try {
    const res = await axios.post("http://localhost:8080/posts", post);
    return res;
  } catch (error) {
    console.log(error);
  }
};
