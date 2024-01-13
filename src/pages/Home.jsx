import "./Home.css";
import LoginForm from "../components/form/LoginForm";
import SignupForm from "../components/form/SignupForm";
import { useState } from "react";
import ForgetPassword from '../components/form/ForgetPassword'
const Home = () => {
  const [login, setLogin] = useState(true); 


  return (
<>
<div className="home">
      {login ? (
        <LoginForm login={login} setLogin={setLogin} />
      ) : (
        <SignupForm login={login} setLogin={setLogin} />
      )}
      {/* <ForgetPassword login={login} setLogin={setLogin} /> */}
    </div>
</>
  );
};

export default Home;
