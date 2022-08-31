import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../views/About";
import HomePage from "../views/HomePage";
import SignIn from "../views/SignIn";
import SignUp from "../views/SignUp";
const Routings = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/contact"
          element={
            <>
              <h1>Contact Page</h1>
            </>
          }
        />
      </Routes>
    </>
  );
};

export default Routings;
