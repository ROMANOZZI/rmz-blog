import React from "react";
import NavBar from "./NavBar";
import { useContext } from "react";
import { postsContext } from "../Context/PostsContext";

const Main = () => {
  const [Posts, setPosts] = useContext(postsContext);
  return <NavBar Posts={Posts} />;
};

export default Main;
