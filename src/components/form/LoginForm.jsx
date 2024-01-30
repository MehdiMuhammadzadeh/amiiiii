import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginForm.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../auth/Firbase";

const LoginForm = ({ login, setLogin, setForgetPass }) => {
  // const [errors, setErrors] = useState({});
  const [emailBorderColor, setEmailBorderColor] = useState(true);
  const [passwordBorderColor, setPasswordBorderColor] = useState(true);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
  const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

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
    console.log(values);

    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        console.log(userCredential, "UserCredential");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="login-home">
      <div className="login-form">
        <h1>Login</h1>
        <form onSubmit={handleSubmit} className="form">
          <input
            style={
              emailBorderColor
                ? { border: "1px solid #dddddd" }
                : { border: "1px solid red" }
            }
            // style={errors.email && { borderColor: "red" }}
            className="login-email__input"
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
            // style={errors.password && { borderColor: "red" }}
            className="login-password__input"
            type="password"
            placeholder="password"
            onChange={handleInput}
            name="password"
            value={values.password}
          />
          <div className="submit-btn">
            <button type="submit">Login</button>
          </div>
          <div className="new-account">
            <Link to="/signup">Dont have an account!</Link>
            <Link to="/forget-password">Forget Password!</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
