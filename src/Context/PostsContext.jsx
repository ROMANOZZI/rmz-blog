import React from "react";
import { createContext } from "react";
const PostsContext = createContext([]);

const PostsContextProvider = ({ children }) => {
  let [myposts, setMyPosts] = React.useState([]);
  let [posts, setPosts] = React.useState([]);
  return (
    <PostsContext.Provider value={[posts, setPosts, myposts, setMyPosts]}>
      {children}
    </PostsContext.Provider>
  );
};

export { PostsContext, PostsContextProvider };
