import React from "react";
import { useContext } from "react";
import { PostsContext } from "../Context/PostsContext";
import Comment from "../images/chat.png";
import UpVote from "../images/up-arrow.png";
import DownVote from "../images/down-arrow.png";

const Feed = ({ posts }) => {
  return (
    <div className="feed-container">
      <h1>Main-Feed</h1>
      <div className="feed">
        {posts.map((post) => (
          <div className="post">
            <div className="text-container">
              <h2>{post.title}</h2>
              <p>{post.content}</p>
            </div>
            <p className="small create-date"></p>

            <div className="reacts-container">
              <div className="react">
                <p>upVote</p>
                <img src={UpVote} alt="upVote" />
              </div>
              <div className="react">
                <p>downVote</p>

                <img src={DownVote} alt="downVote" />
              </div>
              <div className="react">
                <p>add comment</p>

                <img src={Comment} alt="Comment" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;
