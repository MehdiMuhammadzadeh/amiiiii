import "./Home.css";
import LoginForm from "../components/form/LoginForm";
import SignupForm from "../components/form/SignupForm";
import { useState } from "react";
import ForgetPassword from "../components/form/ForgetPassword";
const Home = () => {
  const [login, setLogin] = useState(true);
  const [forgetPass, setForgetPass] = useState(false);

  return (
    <>
      <div className="home">
        {login ? (
          [
            forgetPass ? (
              <ForgetPassword key={Math.random()} setForgetPass={setForgetPass} />
            ) : (
              <LoginForm
              key={Math.random()}
                login={login}
                setLogin={setLogin}
                setForgetPass={setForgetPass}
              />
            ),
          ]
        ) : (
          <SignupForm login={login} setLogin={setLogin} />
        )}
      </div>
    </>
  );
};

export default Home;
