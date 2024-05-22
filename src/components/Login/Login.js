import React, { useEffect } from "react";
import "./Login.css";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function Login() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const [visible, setVisible] = useState(false);

  const usenavigate = useNavigate();

  const loginProceed = (e) => {
    e.preventDefault();

    const loggedUser = JSON.parse(localStorage.getItem("user"));
    try {
      if (loggedUser.email === null) {
        toast.error("Please Enter Valid Credentials");
      } else if (
        input.email === loggedUser.email &&
        input.password === loggedUser.password
      ) {
        toast.success("LogedIn Successfully!");
        localStorage.setItem("loggedin", true);
        usenavigate("/");
      }
    } catch (error) {
      toast.error("Please Enter Valid Credentials");
    }
  };

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section className="l-wrapper">
      <div className="flexCenter innerWidth l-container" data-aos="zoom-in">
        <form onSubmit={loginProceed}>
          <h1>LogIn</h1>
          <div className="input-box">
            <input
              name="email"
              value={input.email}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
              type="email"
              placeholder="enter email"
            />
            <FaUser className="l-icon" />
          </div>
          <div className="input-box">
            <input
              name="password"
              value={input.password}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
              type={visible ? "text" : "password"}
              placeholder="password"
            />
            {visible ? (
              <IoEyeOutline
                className="l-icon"
                onClick={() => setVisible(!visible)}
              />
            ) : (
              <FaLock className="l-icon" onClick={() => setVisible(!visible)} />
            )}
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
