import { React, useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import OutsideClickHandler from "react-outside-click-handler";
import { useNavigate } from "react-router-dom";

function Header() {
  const [menuOpened, setMenuOpened] = useState(false);
  const userName = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loggedin");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container ">
        <a href="/" className="logo-wrapper">
          <img src="./favicon-real.jpg" alt="logo" width={80} height={40} />
        </a>
        <OutsideClickHandler onOutsideClick={() => setMenuOpened(false)}>
          <div className={menuOpened ? "open" : "flexCenter h-menu"}>
            <a href="/" id="residence" onClick={() => setMenuOpened(false)}>
              Home
            </a>
            <Link to="/value" onClick={() => setMenuOpened(false)}>
              Our Value
            </Link>
            <Link to="/contact" onClick={() => setMenuOpened(false)}>
              Contact Us
            </Link>
            <Link to="/residencies" onClick={() => setMenuOpened(false)}>
              Residencies
            </Link>
            {!localStorage.getItem('loggedin') ? (
              <button className="button">
                <Link to="/login" onClick={() => setMenuOpened(false)}>
                  SignIn
                </Link>
              </button>
            ) : (
              <>
                <span>Hello, {userName.username}</span>
                <button type="submit" className="button" onClick={handleLogout}>
                  LogOut
                </button>
              </>
            )}
          </div>
          <div className="menu-icon">
            <BiMenuAltRight
              size={30}
              className="nav-icon"
              name="menu-outline"
              onClick={() => setMenuOpened(!menuOpened)}
            />
          </div>
        </OutsideClickHandler>
      </div>
    </section>
  );
}

export default Header;
