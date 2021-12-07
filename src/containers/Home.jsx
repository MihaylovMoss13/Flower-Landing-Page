import React, { useState } from "react";

import CustomCursor from "../CustomCursor/CustomCursor";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";

const Home = () => {
  return (
    <>
      <CustomCursor />
      <div>
        <Navbar />
        <Header />
      </div>
    </>
  );
};

export default Home;
