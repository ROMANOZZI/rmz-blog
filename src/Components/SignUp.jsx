import React from "react";
import axios from "axios";

const SignUp = ({ form, setForm }) => {
  return (
    <div className="Form-control">
      <h2>Sign UP for Free </h2>
      <div className="field ss">
        <div className="small-field">
          <label htmlFor="text" className={form.first ? "label-back" : " "}>
            First Name<span className="req">*</span>
          </label>
          <input
            type="email"
            required
            value={form.first ? form.first : ""}
            onChange={(e) => {
              setForm({ ...form, first: e.target.value });
            }}
          />
        </div>
        <div className="small-field">
          <label htmlFor="text" className={form.second ? "label-back" : " "}>
            Second Name<span className="req">*</span>
          </label>
          <input
            type="text"
            required
            value={form.second ? form.second : ""}
            onChange={(e) => {
              setForm({ ...form, second: e.target.value });
            }}
          />
        </div>
      </div>
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

      <button
        className="btn signup"
        onClick={() => {
          if (form.first && form.second && form.email && form.password) {
            axios
              .post("http://localhost:4000/signup", {
                name: form.first + " " + form.second,
                email: form.email,
                password: form.password,
              })
              .then((res) => {
                console.log("congrats babe");
              });
          }
        }}
      >
        GET STARTED
      </button>
    </div>
  );
};

export default SignUp;
