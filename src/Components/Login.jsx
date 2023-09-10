import React from "react";

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
      <button className="btn">Login</button>
    </div>
  );
};

export default Login;
