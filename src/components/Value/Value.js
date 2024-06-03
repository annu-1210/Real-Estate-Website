import React,  { useEffect } from "react";
import "./Value.css";
import AOS from "aos";
import 'aos/dist/aos.css'

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import data from "../../utils/accordion.js";
import PickUp2 from "../PIckupLIne/PickUp2.js";

function Value() {
  useEffect(()=>{
    AOS.init({duration: 2000})
  },[])
  return (
  <>
  <div id="value">
    <PickUp2/>
    <div className="v-wrapper" >
      <div className="paddings innerWidth flexCenter v-container">
        <div className="v-left" data-aos='fade-right'>
          <div className="image-container">
            <img src="./value-1.jpg" alt="value" />
          </div>
        </div>

        <div className="flexColStart v-right" data-aos='fade-left'>
          <span className="yellowText">Our Value</span>
          <span className="primaryText">Value We Give To You</span>
          <span className="valueSpan-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Dolores qui aliquam porro! Suscipit, atque inventore.
          </span>

          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            // preExpanded={[0]}
          >
            {data.map((item, i) => {
              return (
                <AccordionItem className="accordion-item" key={i} uuid={i}>
                  <AccordionItemHeading>
                    <AccordionItemButton className="flexCenter accordionButton">
                      <div className="flexCenter icon">{item.icon}</div>
                      <span className="primaryText">{item.heading}</span>
                      <div className="flexCenter icon">
                        <MdOutlineArrowDropDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>

                  <AccordionItemPanel>
                    <p className="accordion-parah">
                        {item.detail}
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </div>
   </div>
    </>
  );
}

export default Value;
