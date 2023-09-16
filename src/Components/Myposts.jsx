import React from "react";
import Feed from "./Feed";
import NavBar from "./NavBar";
import { PostsContext } from "../Context/PostsContext";
import AddPost from "./AddPost";
import point from "../images/point.png";
const Myposts = () => {
  const [posts, setPosts, myposts, setMyPosts] = React.useContext(PostsContext);
  return (
    <>
      <NavBar />

      <AddPost />
      {myposts.length > 0 ? (
        <Feed posts={myposts} />
      ) : (
        <div className="noPosts">
          {" "}
          <p>you have no posts yet press here to add one </p>
          <img src={point} alt="point" />{" "}
        </div>
      )}
    </>
  );
};

export default Myposts;
