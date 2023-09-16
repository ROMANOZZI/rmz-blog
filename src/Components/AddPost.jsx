import React from "react";
import axios from "axios";
import { PostsContext } from "../Context/PostsContext";
const AddPost = () => {
  const [show, setShow] = React.useState(false);
  const title = React.useRef();
  const content = React.useRef();
  const [posts, setPosts, myposts, setMyPosts] = React.useContext(PostsContext);
  return (
    <>
      <div
        className="addPost"
        style={{
          display: show ? "none" : "block",
        }}
        onClick={() => {
          setShow(true);
        }}
      >
        {" "}
        + ADD POST
      </div>
      <div
        className="post-container"
        style={{
          display: show ? "block" : "block",
        }}
      >
        <div className="post">
          <input type="text" placeholder="title" ref={title} />
          <textarea
            placeholder="content"
            ref={content}
            onChange={() => console.log(content.current.value)}
          />
          <button
            onClick={() => {
              axios
                .post(
                  "http://localhost:4000/posts/addPost",
                  {
                    title: title.current.value,
                    content: content.current.value,
                  },
                  {
                    headers: {
                      authorization: `Bearer ${localStorage.getItem(
                        "accessToken"
                      )}`,
                    },
                  }
                )
                .then((res) => {
                  setMyPosts((prev) => [
                    ...prev,
                    {
                      title: title.current.value,
                      content: content.current.value,
                      date: new Date(),
                    },
                  ]);
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
          >
            add post
          </button>
        </div>
      </div>
    </>
  );
};

export default AddPost;
