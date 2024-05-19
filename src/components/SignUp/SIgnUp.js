import React, { useState, useEffect } from "react";
import "./SIgnUp.css";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function SIgnUp() {
  const [input, setInput] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
  });
  // const [Name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(input));
    navigate("/login");

    //   let obj = { id, Name, email, password };
    //   // console.log(obj);

    //   fetch("http://localhost:8000/user", {
    //     method: "POST",
    //     headers: {
    //       "content-type": "application/json",
    //     },
    //     body: JSON.stringify(obj),
    //   })
    //     .then((res) => {
    //       // res.json();
    //       JSON.stringify(res)
    //       console.log(res.data);
    //       toast.success("Registered Successfully!");
    //       navigate("/login");
    //      localStorage.setItem("user", res);
    //     })
    //     .catch((err) => {
    //       toast.err("Failed:" + err.message);
    //     });
  };
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section className="s-wrapper">
      <div className="flexCenter innerWidth s-container" data-aos="flip-right">
        <form onSubmit={handleSubmit}>
          <h1>SignUp</h1>
          <div className="input-box">
            <input
              name="username"
              value={input.username}
              onChange={(e) =>
                setInput({ ...input, [e.target.username]: e.target.value })
              }
              type="text"
              placeholder="username"
              required
            />
            <FaUser className="s-icon" />
          </div>
          <div className="input-box">
            <input
              name="name"
              value={input.name}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
              type="text"
              placeholder="enter name"
              required
            />
            <FaUser className="s-icon" />
          </div>
          <div className="input-box">
            <input
              name="email"
              value={input.email}
              onChange={(e) =>
                setInput({ ...input, [e.target.email]: e.target.value })
              }
              type="email"
              placeholder="enter email"
              required
            />
            <MdEmail className="s-icon" />
          </div>

          <div className="input-box">
            <input
              name="password"
              value={input.password}
              onChange={(e) =>
                setInput({ ...input, [e.target.password]: e.target.value })
              }
              type="password"
              placeholder="create password"
              required
            />
            <FaLock className="s-icon" />
          </div>
          <div className="checkbox-forget">
            <label htmlFor="checkbox">
              <input type="checkbox" name="checkbox" id="checkbox" />
              Correct Information
            </label>
          </div>
          <button type="submit" className="s-button">
            Signup
          </button>
          <div className="login">
            <span>
              Already Have an Account. <a href="/login"> Login Here</a>
            </span>
          </div>
        </form>
      </div>
    </section>
  );
}

export default SIgnUp;
