import { React, useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container ">
        <a href="/">
          <img src="./real-logo1.jpg" alt="logo" width={60} height={50} />
        </a>
        <div className={menuOpened ? "open" : "flexCenter h-menu"}>
          <a href="/" id="residence">
            Home
          </a>
          <Link to="/value">Our Value</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/residencies">Residencies</Link>
          <button className="button">
            <Link to="/login">SignIn</Link>
          </button>
        </div>
        <div className="menu-icon">
          <BiMenuAltRight
            size={30}
            className="nav-icon"
            name="menu-outline"
            onClick={() => setMenuOpened(!menuOpened)}
          />
        </div>
      </div>
    </section>
  );
}

export default Header;
