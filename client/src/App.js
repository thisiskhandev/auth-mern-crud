import React from "react";
import Navbar from "./assets/components/routes/Navbar";
import Routings from "./assets/components/routes/Routings";
import "./assets/styles/styles.scss";

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Routings />
    </React.Fragment>
  );
};

export default App;
