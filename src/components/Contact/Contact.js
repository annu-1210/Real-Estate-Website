import React,  { useEffect } from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import AOS from "aos";
import 'aos/dist/aos.css'


function Contact() {
  useEffect(()=>{
    AOS.init({duration: 2000})
  },[])
  return (
    <section className="c-wrapper" id="contact">
      <div className="paddings innerWidth flexCenter c-container">
        <div className="flexColStart c-left" data-aos='zoom-in'>
          <span className="yellowText">Contact Us</span>
          <span className="primaryText">Easy To Contact Us</span>
          <span className="contactSpan-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
            nesciunt voluptatum natus adipisci quidem qui placeat quibusdam
            fugiat eaque commodi.
          </span>
          <div className="flexColStart contactModes">
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexStart icon">
                    <MdCall size={25} />
                  </div>

                  <div className="flexColStart detail">
                    <span className="callSpan">Call</span>
                    <span>000 000 000 00</span>
                  </div>
                </div>
                <div className="flexCenter button">Call Now</div>
              </div>
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexStart icon">
                    <BsFillChatDotsFill size={25} />
                  </div>

                  <div className="flexColStart detail">
                    <span className="callSpan">Chat</span>
                    <span>000 000 000 00</span>
                  </div>
                </div>
                <div className="flexCenter button">Chat Now</div>
              </div>
            </div>
          </div>
        </div>

        <div className="c-right" data-aos='zoom-in'>
          <div className="image-container">
            <img src="./contact-1.jpg" alt="contact" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
