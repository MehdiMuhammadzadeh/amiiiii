import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header className="main-header">
        <div>
          <Link className="logo-link" to="/dashboard  ">
            Dashboard
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
