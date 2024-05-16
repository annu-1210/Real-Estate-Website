import React from "react";
import "./Footer.css";
import { FaMeta } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <section className="f-wrapper">
      <div className="  innerWidth f-container ">
        <div className="flexColStart f-left">
          <h1 className="secondaryText f-headings  f-about">ABOUT US</h1>
          <span className="about-span f-spans">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
            modi atque doloribus mollitia!
          </span>
        </div>

        <div className="flexColStart f-mid">
          <h1 className="secondaryText f-headings f-services">OUR SERVICES</h1>
          <a href="/" className="f-spans">Building Contractors</a>
          <a href="/" className="f-spans">Agents / Brokers</a>
          <a href="/" className="f-spans">Architects</a>
          <a href="/" className="f-spans">Interior Decorators</a>
          <a href="/" className="f-spans">Vastu Consultants</a>
          <a href="/" className="f-spans">Home Inspection</a>
        </div>

        <div className="flexColStart f-right">
          <h1 className="secondaryText f-headings f-connect">CONNECT</h1>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
          <FaMeta />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <FaInstagram />
          </a>
          <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
          <FaTwitter />
          </a>
          <a href="https://www.linkedIn.com/" target="_blank" rel="noreferrer">
          <FaLinkedin />
          </a>
        </div>

        <div className="flexColStart f-4">
          <h1 className="secondaryText f-headings f-address">OUR ADDRESS</h1>
<div className="ad-span flexColStart">
          <span className="f-spans">Bootstrap Realestate Inc.</span>
          <span className="f-spans"> 8290 Walk Street, Australia</span>
          <span className="f-spans"> hello@domain.com</span>
          <span className="f-spans">(123) 456-7890</span></div>
        </div>
      </div>
      {/* <hr className="divider" /> */}

      <div className="flexColCenter f-copyright">
        <span>© All Rights Reserved.</span>
        <span>Designed with <FaHeart /> by AnnuPoonia.co Demo Images by Unsplash</span>
      </div>
    </section>
  );
}

export default Footer;
