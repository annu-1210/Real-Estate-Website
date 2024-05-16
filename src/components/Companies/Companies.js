import React, { useEffect } from "react";
import './Companies.css';
import AOS from "aos";
import 'aos/dist/aos.css'

function Companies() {

  useEffect(()=>{
    AOS.init({duration: 2000})
  },[])
  return (
    <section className="cp-wrapper" >
      <div className="paddings innerWidth flexCenter cp-container">
        <img src="./kenwood-logo.png" alt="logo" data-aos='fade-up' />
        <img src="./jaguar-logo.png" alt="logo"  data-aos='fade-up' />
        <img src="./real-logo.jpg" alt="logo"  data-aos='fade-up' />
        <img src="./adidasLogo.png" alt="logo"  data-aos='fade-up' />
      </div>
    </section>
  
  );
}

export default Companies;
