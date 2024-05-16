import { React, useContext, useEffect } from "react";
import PropertyContext from "../../context/PropertyContext";
import { useParams } from "react-router-dom";
import Residencies from "../../components/Residencies/Residencies";
import "./Properties.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Properties() {
  const { data } = useContext(PropertyContext);
  const { pid } = useParams();
  const product = data.find((e) => e.id === Number(pid));
  console.log(product);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <section className="pro-wrapper">
        <div className="paddings innerWidth flexCenter pro-container">
          <div className="pro-left" data-aos="flip-right">
            <div className="image-container">
              <img src={product.image} alt="home" />
            </div>
          </div>
          <div className="flexColStart pro-right " data-aos="fade-up">
            <span className="primaryText">{product.name}</span>
            <span className="r-address">{product.address}</span>
            <span className="r-price">
              <span>
                <strong>$</strong>
              </span>
              <span>{product.price}</span>
            </span>
            <span className="yellowText desc-head">Description</span>
            <span className="r-description">{product.description}</span>
          </div>
        </div>
      </section>
      <Residencies />
    </>
  );
}

export default Properties;
