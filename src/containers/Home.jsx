import React, { useState } from "react";

import CustomCursor from "../CustomCursor/CustomCursor";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import Featured from "../components/Featured/Featured";

const Home = () => {
  return (
    <>
      <CustomCursor />
      <div>
        <Navbar />
        <Header />
        <Featured />
      </div>
    </>
  );
};

export default Home;
