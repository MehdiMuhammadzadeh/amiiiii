import { useNavigate } from "react-router-dom";
import "./Home.css";
const Home = () => {

const navigate = useNavigate()

  return (
    <>
      <div className="home">
          <h1>welcome to the ami-dashboard</h1>
          <div className="home-btns">
            <button onClick={()=> navigate('/login')}>login</button>
            <button onClick={()=> navigate('/signup')}>signup</button>
          </div>
      </div>
    </>
  );
};

export default Home;



/*
  const [login, setLogin] = useState(true);
  const [forgetPass, setForgetPass] = useState(false);
 *  {login ? (
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
 */