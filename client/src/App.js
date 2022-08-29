import React from "react";
import Navbar from "./components/routes/Navbar";
import Routings from "./components/routes/Routings";
import "./assets/styles/styles.scss";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Routings />
    </React.Fragment>
  );
};

export default App;
