import React from "react";
import Login from "./Login";
import SignUp from "./SignUp";

const Form = () => {
  const [statue, setStatue] = React.useState("SignUp");
  const [form, setForm] = React.useState({});
  React.useEffect(() => {
    setForm({});
  }, [statue]);
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
      {statue == "SignUp" ? (
        <SignUp form={form} setForm={setForm} />
      ) : (
        <Login form={form} setForm={setForm} />
      )}
    </div>
  );
};

export default Form;
