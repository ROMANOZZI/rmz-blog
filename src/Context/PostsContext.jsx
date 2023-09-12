import React from "react";
import { createContext } from "react";
const postsContext = createContext();

const PostsContextProvider = ({ children }) => {
  let [posts, setPosts] = React.useState([]);
  return (
    <postsContext.Provider value={[posts, setPosts]}>
      {children}
    </postsContext.Provider>
  );
};

export { postsContext, PostsContextProvider };
