import React, { useState } from "react";
import "./SignupForm.css";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { signInWithGoogle } from "../../auth/Firbase";
import { auth } from "../../auth/Firbase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignupForm = () => {
  // const [errors, setErrors] = useState({});
  const [error, setError] = useState(null);
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

    if (values.password.length !== values.confirmPassword.length) {
      setConfirmpassBorderColor(false);
      Swal.fire("Passwords do not match!");
    }

    createUserWithEmailAndPassword(
      auth,
      values.email,
      values.password,
      values.confirmPassword
    )
      .then((item) => {
        console.log(item);
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          setError("Email already in use");
          console.log("hihihi");
        }
      });

    // if (error.code === "auth/email-already-in-use") {
    //   setTimeout(() => {
    //     setValues({ email: "", password: "", confirmPassword: "" });
    //   }, 2000);
    // }
    setValues({ email: "", password: "", confirmPassword: "" });
  };

  const signInWithGoogleHandler = () => {
    signInWithGoogle();
  };

  return (
    <div className="signup-home">
      {error && <div className="error">{error}</div>}
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
            value={values.email}
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
            value={values.password}
          />
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
            value={values.confirmPassword}
          />
          <div className="submit-btn">
            <button type="submit" className="signup">
              Signup
            </button>
          </div>
          {/* <div className="google-signin">
        </div> */}
          <div className="social-media">
            <i className="bi bi-facebook"></i>
            <i className="bi bi-whatsapp"></i>
            <i onClick={signInWithGoogleHandler} className="bi bi-google"></i>
            <i className="bi bi-twitter-x"></i>
            <i className="bi bi-telegram"></i>
            <i className="bi bi-instagram"></i>
          </div>
          <div className="account">
            <Link to="/login">Already have an account!</Link>
          </div>
        </form>
        {/* <button  className="google-signin">sign in with Google</button> */}
      </div>
    </div>
  );
};

export default SignupForm;


