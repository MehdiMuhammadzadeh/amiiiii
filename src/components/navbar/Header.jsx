import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header className="main-header">
        <div className="navbar">
          <Link className="logo-link" to="/dashboard">
            Dashboard
          </Link>
          <div className="notif-bell">
          <i className="bi bi-bell-fill"></i>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
