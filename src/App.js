import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Website from "./pages/Website";
import Layout from "./components/Layout/Layout";
import Properties from "./pages/Properties/Properties";
import Login from "./components/Login/Login";
import SIgnUp from "./components/SignUp/SIgnUp";
import Residencies from "./components/Residencies/Residencies";
import Value from "./components/Value/Value";
import Contact from "./components/Contact/Contact";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <ToastContainer theme="colored" />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Website />} />
            <Route path="/properties/:pid" element={<Properties />} />

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SIgnUp />} />
            <Route path="/residencies" element={<Residencies />} />
            <Route path="/value" element={<Value />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
