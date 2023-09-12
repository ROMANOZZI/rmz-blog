import Form from "./Components/Form.jsx";
import "./App.css";
import { Link, Route, useLocation } from "wouter";
import { authContext } from "./Context/AuthContext.jsx";
import { postsContext } from "./Context/PostsContext.jsx";

import React from "react";
import Main from "./Components/Main.jsx";
import axios from "axios";

function App() {
  const [user, setUser, isAuthenticated, setIsAuthenticated] =
    React.useContext(authContext);
  const [location, setLocation] = useLocation();
  const arr = React.useContext(postsContext);
  const [posts, setPosts] = React.useState(arr);
  React.useEffect(() => {
    if (!localStorage.getItem("refreshToken")) {
      setIsAuthenticated(false);
      setUser({});
      setLocation("/login");
    } else {
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
                setPosts(res.data);

                setLocation("/Main");
              });
          } else {
            setIsAuthenticated(false);
            setUser({});
            setLocation("/login");
          }
        });
    }
  }, []);

  return (
    <>
      <postsContextProvider>
        <Route path="/login">
          <Form />
        </Route>
        <Route path="/Main">
          <Main />
        </Route>
      </postsContextProvider>
    </>
  );
}

export default App;
