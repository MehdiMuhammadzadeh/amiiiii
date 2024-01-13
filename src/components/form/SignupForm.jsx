import React, { useState } from "react";
import "./SignupForm.css";
import { Link } from "react-router-dom";
import Validation from "./Validation";

// const styleError = {
//   color: "red",
//   fontSize: "10px",
// };

const SignupForm = ({login, setLogin}) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
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
    <div className="signup-form">
      <h1>Signup</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          style={errors.email && { border: "1px solid red" }}
          className="email-input"
          type="text"
          placeholder="email"
          onChange={handleInput}
          name="email"
        />
        {/* {errors.email && <p style={styleError}>{errors.email}</p>} */}
        <input
          style={errors.password && { border: "1px solid red" }}
          className="password-input"
          type="password"
          placeholder="password"
          onChange={handleInput}
          name="password"
        />
        <div>
          {/* {errors.password && <p style={styleError}>{errors.password}</p>} */}
        </div>
        <input
          style={errors.confirmPassword && { border: "1px solid red" }}
          className="confirm-password__input"
          type="password"
          placeholder="confim password"
          onChange={handleInput}
          name="confirmPassword"
        />
        {/* {errors.confirmPassword && (
          <p style={styleError}>{errors.confirmPassword}</p>
        )} */}
        <div className="submit-btn">
          <button type="submit">Signup</button>
        </div>
        <div className="social-media">
        <i style={{color:'#0066ff', fontSize:'8px', marginRight:'2px'}} className="bi bi-facebook"></i>
        <i style={{color:'#8cff66', fontSize:'8px', marginRight:'2px'}} className="bi bi-whatsapp"></i>
        <i style={{color:'#bfbfbf', fontSize:'8px', marginRight:'2px'}} className="bi bi-twitter-x"></i>
        <i style={{color:'#33ccff', fontSize:'8px', marginRight:'2px'}} className="bi bi-telegram"></i>
        <i style={{color:'#ff0066', fontSize:'8px', marginRight:'2px'}} className="bi bi-instagram"></i>
        </div>
        <div className="new-account">
          <Link onClick={()=>setLogin(!login)}>Already have an account!</Link>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
