import React from "react";

const feed = (posts) => {
  return (
    <>
      <h1>posts</h1>
      <div className="feed">
        {posts.map((post) => (
          <div className="post">
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <p className="small create-date"></p>
          </div>
        ))}
      </div>
    </>
  );
};

export default feed;
