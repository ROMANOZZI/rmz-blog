import React from "react";

const Form = () => {
  const [statue, setStatue] = React.useState("SignUp");
  const [form, setForm] = React.useState({
    email: "",
    password: "",
    username: "",
  });
  return (
    <div className="form">
      <div className="tabs">
        <div
          className={`tab ${statue == "SignUp" ? "Light" : " "}`}
          onClick={() => {
            setStatue("SignUp");
          }}
        >
          SignUp
        </div>
        <div
          className={`tab ${statue == "Login" ? "Light" : ""}`}
          onClick={() => {
            setStatue("Login");
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default Form;
