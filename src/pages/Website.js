import React from "react";
import Hero from "../components/Hero/Hero";
import Residencies from "../components/Residencies/Residencies";
import Value from "../components/Value/Value";
import Contact from "../components/Contact/Contact";
import GetStarted from "../components/GetStarted/GetStarted";
import Companies from "../components/Companies/Companies";

function Website() {
  return (
    <div className="App">
      <Hero />
      <Residencies />
      <Value />
      <Contact />
      <GetStarted />
      <Companies />
    </div>
  );
}

export default Website;
