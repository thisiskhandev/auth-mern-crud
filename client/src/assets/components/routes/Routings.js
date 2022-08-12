import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../HomePage";
import SignIn from "../SignIn";
const Routings = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </>
  );
};

export default Routings;
