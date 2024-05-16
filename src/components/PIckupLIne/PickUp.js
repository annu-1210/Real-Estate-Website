import React,  { useEffect } from "react";
import './PickUp.css'
import AOS from "aos";
import 'aos/dist/aos.css'

function PickUp() {
  useEffect(()=>{
    AOS.init({duration: 2000})
  },[])
  return (
    <div className="pick-lines " data-aos='fade-up'>
        <span className='pickOne'>Let me be your real estate advisor </span>
        <span className='pickTwo'> and help you find the perfect home.</span>
        
    </div>
  )
}

export default PickUp