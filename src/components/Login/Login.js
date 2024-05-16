import React,  { useEffect } from "react";
import "./Login.css";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import 'aos/dist/aos.css'

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const usenavigate = useNavigate();

  const loginProceed = (e) => {
    e.preventDefault();
    if (validate()) {
      fetch("http://localhost:8000/user/" + userName)
        .then((res) => {
          return res.json();
        })
        .then((resp) => {
          // console.log(resp);
          if (Object.keys(resp).length === 0) {
            toast.error("Please Enter Valid UserName.");
          } else {
            if (resp.password === password) {
              toast.success('Logedin Successfully!');
              usenavigate("/");
            } else {
              toast.error("Please Enter Valid Credentials");
            }
          }
        })
        .catch((err) => {
          toast.error("Login is Failed due to :" + err.message);
        });
    }
    console.log("proceeding");
  };

  const validate = () => {
    let result = true;
    if (userName === "" || userName === null) {
      result = false;
      toast.warning("Please Enter Username");
    }
    if (password === "" || password === null) {
      result = false;
      toast.warning("Please Enter Password");
    }
    return result;
  };

  useEffect(()=>{
    AOS.init({duration: 2000})
  },[])

  return (
    <section className="l-wrapper" >
      <div className="flexCenter innerWidth l-container" data-aos='zoom-in'>
        <form onSubmit={loginProceed}>
          <h1>LogIn</h1>
          <div className="input-box">
            <input
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              type="text"
              placeholder="username"
            />
            <FaUser className="l-icon" />
          </div>
          <div className="input-box">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="password"
            />
            <FaLock className="l-icon" />
          </div>
          <div className="checkbox-forget">
            <label htmlFor="checkbox">
              <input type="checkbox" name="checkbox" id="checkbox" />
              Correct Information
            </label>
            <a href="/login">Forget Password?</a>
          </div>
          <button type="submit" className="l-button">
            Login
          </button>
          <div className="signUp">
            <span>
              Don't Have an Account? <a href="/signup">SignUp</a>
            </span>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;
