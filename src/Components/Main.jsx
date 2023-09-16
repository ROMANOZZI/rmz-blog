import React from "react";
import NavBar from "./NavBar";
import { useContext } from "react";
import { PostsContext } from "../Context/PostsContext";
import Feed from "./Feed";

const Main = () => {
  const [posts, setPosts, myPosts, setMyPosts] = useContext(PostsContext);
  return (
    <>
      <NavBar />
      <Feed posts={posts} />
    </>
  );
};

export default Main;
