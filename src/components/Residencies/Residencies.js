import React, { useEffect, useContext } from "react";
import PropertyContext from "../../context/PropertyContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./Residencies.css";
import { sliderSettings } from "../../utils/common";
import SliderButtons from "./SliderButtons";
import PickUp from "../PIckupLIne/PickUp";
import PropertyCard from "../PropertyCard/PropertyCard";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function Residencies() {

const {data} = useContext(PropertyContext);


  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div id="residencies">
      <PickUp />
      <div className="r-wrapper">
        <div className="paddings innerWidth r-container">
          <div className="r-head flexColStart" data-aos="fade-right">
            <span className="yellowText">Best Choices</span>
            <span className="primaryText">Popular Residencies</span>
          </div>
          <Swiper
            {...sliderSettings}
            modules={[Autoplay]}
            autoplay={{ delay: 1000 }}
            data-aos="fade-left"
          >
            <SliderButtons />
            {data.map((card) => {
              return (
                <SwiperSlide key={card.id}>
                  <Link to={`/properties/${card.id}`}>
                    <PropertyCard card={card} />
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Residencies;
