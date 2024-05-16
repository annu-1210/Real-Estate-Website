import React,  { useEffect } from "react";
import './PickUp.css';
import AOS from "aos";
import 'aos/dist/aos.css';

function PickUp2() {
  useEffect(()=>{
    AOS.init({duration: 2000})
  },[])
  return (
    <div className="pick-lines " data-aos='fade-up'>
        <span className='pickOne'>Forget all difficulties in finding a </span>
        <span className='pickTwo'> residence for yourself !</span>
        
    </div>
  )
}

export default PickUp2