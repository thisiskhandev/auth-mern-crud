import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../About";
import HomePage from "../HomePage";
import SignIn from "../SignIn";
const Routings = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default Routings;
