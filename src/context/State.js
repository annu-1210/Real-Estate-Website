import React from "react";
import PropertyContext from "./PropertyContext.js";
import data from '../assets/slider.js';


const State = (props)=>{

const state = {data}

return (
    <PropertyContext.Provider value={state}>
        {props.children}
    </PropertyContext.Provider>
)
}

export default State;
