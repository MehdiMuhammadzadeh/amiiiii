import { Link } from "react-router-dom";
import "./ForgetPassword.css";

const ForgetPassword = ({signup, setSignup}) => {
  const handleSubmit = () => {};
  return (
    <div className="forget-pass__form">
      <h1>Forget Password</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          // style={errors.email && { border: "1px solid red" }}
          className="email-input_forgetPass"
          type="text"
          placeholder="email"
          // onChange={handleInput}
          name="email"
        />
          <div className="udpate-password">
          <button type="submit">update password</button>
        </div>
      </form>
      <div className="back-to-login">
          <Link onClick={()=>setSignup(!signup)}>Back to login!</Link>
        </div>
    </div>
  );
};

export default ForgetPassword;
