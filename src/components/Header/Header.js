
import { React, useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpened, setMenuOpened] = useState(false);

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return {
        right: !menuOpened && "-100%",
      };
    }
  };

  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <a href="/">
          <img src="./real-logo1.jpg" alt="logo" width={60} height={50} />
         
        </a>
        <OutsideClickHandler onOutsideClick={() => setMenuOpened(false)}>
          <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
            <a href="/" id="residence">Home</a>
            <Link to="/value">Our Value</Link>
            <Link to="/contact" >Contact Us</Link>
            <Link to="/residencies">Residencies</Link>
            <button className="button">
              <Link to="/login">SignIn</Link>
            </button>
          </div>
        </OutsideClickHandler>
        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
}

export default Header;
