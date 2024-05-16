import React, {useEffect} from "react";
import AOS from "aos";
import 'aos/dist/aos.css';

function PickUp3() {
  useEffect(()=>{
    AOS.init({duration: 2000})
  },[])
  return (
    <div className="pick-lines " data-aos='fade-up'>
      <span className="pickOne">Your luxury real estate experts</span>
    </div>
  );
}

export default PickUp3;
