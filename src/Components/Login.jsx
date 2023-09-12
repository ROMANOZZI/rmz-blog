import React from "react";
import axios from "axios";

const Login = ({ form, setForm }) => {
  return (
    <div className="Form-control">
      <h2>Welcome Back! </h2>
      <div className="field">
        <label htmlFor="email" className={form.email ? "label-back" : " "}>
          Email Address<span className="req">*</span>
        </label>
        <input
          type="email"
          required
          value={form.email ? form.email : ""}
          onChange={(e) => {
            setForm({ ...form, email: e.target.value });
          }}
        />
      </div>
      <div className="field">
        <label
          htmlFor="passwprd"
          className={form.password ? "label-back" : " "}
        >
          password <span className="req">*</span>
        </label>
        <input
          type="password"
          required
          value={form.password ? form.password : ""}
          onChange={(e) => {
            setForm({ ...form, password: e.target.value });
          }}
        />
      </div>

      <a href="#" className="link">
        Forgot Password?
      </a>
      <button
        className="btn"
        onClick={(e) => {
          if (form.email && form.password) {
            axios
              .post("http://localhost:4000/login", { user: { ...form } })
              .then((res) => {
                localStorage.setItem("accessToken", res.data.accessToken);
                localStorage.setItem("refreshToken", res.data.refreshToken);
              })
              .catch((err) => {
                console.log(err);
              });
          }
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
