import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginForm.css";
import Validation from "./Validation";

const LoginForm = ({ login, setLogin, setForgetPass }) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  }); 

  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    const newObject = { ...values, [event.target.name]: event.target.value };
    setValues(newObject);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    console.log(values);
  };

  return (
    <div className="login-form">
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className="form">
        <input
          style={errors.email && { borderColor: "red" }}
          className="login-email__input"
          type="text"
          placeholder="email"
          onChange={handleInput}
          name="email"
        />
        <input
          style={errors.password && { borderColor: "red" }}
          className="login-password__input"
          type="password"
          placeholder="password"
          onChange={handleInput}
          name="password"
        />
        <div className="submit-btn">
          <button type="submit">Login</button>
        </div>
        <div className="new-account">
          <Link onClick={() => setLogin(!login)}>Dont have an account!</Link>
          <Link onClick={()=>setForgetPass(true)}>Forget Password!</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
