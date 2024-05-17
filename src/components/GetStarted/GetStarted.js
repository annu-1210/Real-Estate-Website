import React,  { useEffect } from "react";
import "./GetStarted.css";
import PickUp3 from "../PIckupLIne/PickUp3";
import AOS from "aos";
import 'aos/dist/aos.css'

function GetStarted() {
  useEffect(()=>{
    AOS.init({duration: 2000})
  },[])
  return (
    <div id="getStarted">
      <PickUp3 />
      <section className="g-wrapper" id="getStarted" data-aos='zoom-in'>
        <div className="paddings innerWidth g-container">
          <div className="flexColCenter inner-container">
            <span className="primaryText" data-aos='zoom-in'>Find Your Best Property</span>
            <span className="secondaryText" data-aos='zoom-in'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
              magni corrupti eos veniam asperiores natus quaerat distinctio
              sequi facilis omnis! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Architecto soluta accusamus, ea ut nesciunt
              fugiat.
            </span>

            <button className="get-button" data-aos='zoom-in'>
              <a href="mailto:annupoonia086@gmail.com">Get Started </a>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default GetStarted;
