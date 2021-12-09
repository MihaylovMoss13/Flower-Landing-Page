import React from "react";

import CustomCursor from "../CustomCursor/CustomCursor";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import Featured from "../components/Featured/Featured";
import About from "../components/About/About";
import Gallery from "../components/Gallery/Gallery";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <CustomCursor />
      <div>
        <Navbar />
        <Header />
        <Featured />
        <About />
        <Gallery />
        <Footer />
      </div>
    </>
  );
};

export default Home;
