import Form from "./Components/Form.jsx";
import "./App.css";
import { Link, Route, useLocation } from "wouter";
import { authContext } from "./Context/AuthContext.jsx";
import { PostsContext, PostsContextProvider } from "./Context/PostsContext.jsx";

import React from "react";
import Main from "./Components/Main.jsx";
import axios from "axios";
import { set } from "react-hook-form";
import Myposts from "./Components/Myposts.jsx";

function App() {
  const [user, setUser, isAuthenticated, setIsAuthenticated] =
    React.useContext(authContext);
  const [location, setLocation] = useLocation();

  const [posts, setPosts, myPosts, setMyPosts] = React.useContext(PostsContext);
  React.useEffect(() => {
    if (!localStorage.getItem("refreshToken")) {
      setIsAuthenticated(false);
      setUser({});
      setLocation("/login");
    } else {
      setInterval(() => {
        axios
          .post("http://localhost:4000/refreshToken", {
            refreshToken: localStorage.getItem("refreshToken"),
          })
          .then((res) => {
            if (res.data.accessToken && res.data.user) {
              localStorage.setItem("accessToken", res.data.accessToken);

              setIsAuthenticated(true);
              axios
                .get("http://localhost:4000/posts/main", {
                  headers: {
                    Authorization: `Bearer ${localStorage.getItem(
                      "accessToken"
                    )}`,
                  },
                })
                .then((res) => {
                  axios
                    .get("http://localhost:4000/posts/yourPosts", {
                      headers: {
                        authorization: `Bearer ${localStorage.getItem(
                          "accessToken"
                        )}`,
                      },
                    })
                    .then((res) => {
                      setMyPosts(res.data.data);
                    });
                  setPosts(res.data.data);
                  setLocation("/Main");
                });
            } else {
              setIsAuthenticated(false);
              setUser({});
              setLocation("/login");
            }
          });
      }, 1000 * 60 * 9);
    }
  }, []);

  return (
    <>
      <Route path="/login">
        <Form />
      </Route>
      <Route path="/Main">
        <Main />
      </Route>
      <Route path="/myPosts">
        <Myposts />
      </Route>
    </>
  );
}

export default App;
