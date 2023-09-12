import React from "react";
import { useLocation } from "wouter";

const NavBar = () => {
  const [location, setLocation] = useLocation();
  return (
    <div className="NavBar-container">
      <div className="NavBar">
        <div className="logo">
          <h1>RMZ BLOG</h1>
        </div>
        <div className="tabs">
          <div className={`tab ${location == "/Main" ? " " : "light"} `}>
            my Posts
          </div>
          <div className={`tab ${location == "/Main" ? "Light" : " "} `}>
            Posts
          </div>
        </div>
        <div className="nav-item logout">Logout</div>
      </div>
    </div>
  );
};

export default NavBar;
