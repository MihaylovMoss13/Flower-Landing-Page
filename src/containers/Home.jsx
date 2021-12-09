import React, { useRef, useState, useEffect } from "react";

import CustomCursor from "../CustomCursor/CustomCursor";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import Featured from "../components/Featured/Featured";
import About from "../components/About/About";
import Gallery from "../components/Gallery/Gallery";
import Footer from "../components/Footer/Footer";
import useLocoScroll from "../hooks/useLocoScroll";

const Home = () => {
  const [preloader, setPreloader] = useState(true);

  useLocoScroll(!preloader);

  const [timer, setTimer] = useState(1);
  const id = useRef(null);

  const clear = () => {
    window.clearInterval(id.current);
    setPreloader(false);
  };

  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer(timer => timer - 1);
    }, 1000);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  return (
    <>
      <CustomCursor />

      {preloader ? (
        <div className="loader-wrapper absolute">
          <h1> Harry Flower </h1>
          <h2>Rotterdam</h2>
        </div>
      ) : (
        <div
          className="main-container"
          id="main-container"
          data-scroll-container
        >
          <Navbar />
          <Header />
          <Featured />
          <About />
          <Gallery />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Home;
