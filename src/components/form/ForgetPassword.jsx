import { Link } from "react-router-dom";
import "./ForgetPassword.css";
import { useState } from "react";

const ForgetPassword = ({ setForgetPass }) => {
  const [values, setValues] = useState({ email: "" });
  const [borderColor, setBorderColor] = useState(true);
  // const [errors, setErrors] = useState({});

  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;

  const handleInput = (event) => {
    const newObject = { ...values, [event.target.name]: event.target.value };
    setValues(newObject);
  };
  const handleForgetPassword = (event) => {
    event.preventDefault();
    // setErrors(Validation(values));
    console.log(values);
    if (values.email === "" && !email_pattern.test(values.email)) {
      setBorderColor(false);
    } else {
      setBorderColor(true);
    }
  };

  return (
    <div className="forget-pass-home">
      <div className="forget-pass__form">
        <h1>Forget Password</h1>
        <form className="form" onSubmit={handleForgetPassword}>
          <input
            style={
              borderColor
                ? { border: "1px solid #dddddd" }
                : { border: "1px solid red" }
            }
            className="email-input_forgetPass"
            type="text"
            placeholder="email"
            onChange={handleInput}
            name="email"
          />
          <div className="udpate-password">
            <button type="submit">update password</button>
          </div>
        </form>
        <div className="back-to-login">
          <Link to="/login">Back to login!</Link>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;

/*
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

  */
