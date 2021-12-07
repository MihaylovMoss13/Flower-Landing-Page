import React from "react";
import "./style.scss";

const Header = () => {
  return (
    <section className="header-container">
      <ul className="header-menu">
        <li>Intro</li>
        <li>About</li>
        <li>Featured</li>
      </ul>
      <h1 id="header-text">Art Objects</h1>
    </section>
  );
};

export default Header;
