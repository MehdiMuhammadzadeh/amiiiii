import React, { useState } from "react";
import "./SignupForm.css";
import { Link } from "react-router-dom";
import Validation from "./Validation";
import Swal from "sweetalert2";

const SignupForm = ({ login, setLogin }) => {
  const [errors, setErrors] = useState({});
  const [emailBorderColor, setEmailBorderColor] = useState(true);
  const [passwordBorderColor, setPasswordBorderColor] = useState(true);
  const [confirmpassBorderColor, setConfirmpassBorderColor] = useState(true);
  const [values, setValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
  const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
  const confirmPassword_pattern =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

  const handleInput = (event) => {
    const newObject = { ...values, [event.target.name]: event.target.value };
    setValues(newObject);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // setErrors(Validation(values));

    if (values.email === "" && !email_pattern.test(values.email)) {
      setEmailBorderColor(false);
    } else {
      setEmailBorderColor(true);
    }
    if (values.password === "" && !password_pattern.test(values.password)) {
      setPasswordBorderColor(false);
    } else {
      setPasswordBorderColor(true);
    }
    if (
      values.confirmPassword === "" &&
      !confirmPassword_pattern.test(values.confirmPassword)
    ) {
      setConfirmpassBorderColor(false);
    } else {
      setConfirmpassBorderColor(true);
    }

    if(values.password.length !== values.confirmPassword.length) {
      console.log('Passwords are not match');
      setConfirmpassBorderColor(false)
      Swal.fire("Passwords do not match!");
    }

    console.log(values);
  };

  return (
<div className="signup-home">
<div className="signup-form">
      <h1>Signup</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          style={
            emailBorderColor
              ? { border: "1px solid #dddddd" }
              : { border: "1px solid red" }
          }
          className="email-input"
          type="text"
          placeholder="email"
          onChange={handleInput}
          name="email"
        />
        <input
          style={
            passwordBorderColor
              ? { border: "1px solid #dddddd" }
              : { border: "1px solid red" }
          }
          className="password-input"
          type="password"
          placeholder="password"
          onChange={handleInput}
          name="password"
        />
        <div></div>
        <input
          style={
            confirmpassBorderColor
              ? { border: "1px solid #dddddd" }
              : { border: "1px solid red" }
          }
          className="confirm-password__input"
          type="password"
          placeholder="confim password"
          onChange={handleInput}
          name="confirmPassword"
        />
        <div className="submit-btn">
          <button type="submit" className="signup">Signup</button>
        </div>
        <div className="social-media">
          <i className="bi bi-facebook"></i>
          <i className="bi bi-whatsapp"></i>
          <i className="bi bi-twitter-x"></i>
          <i className="bi bi-telegram"></i>
          <i className="bi bi-instagram"></i>
        </div>
        <div className="account">
          <Link to='/login'>Already have an account!</Link>
        </div>
      </form>
    </div>
</div>
  );
};

export default SignupForm;
