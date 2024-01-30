import { useNavigate } from "react-router-dom";
import "./Home.css";
const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="home">
        <h1>welcome to the ami-dashboard</h1>
        <div className="home-btns">
          <button onClick={() => navigate("/login")}>login</button>
          <button onClick={() => navigate("/signup")}>signup</button>
        </div>
      </div>
    </>
  );
};

export default Home;
