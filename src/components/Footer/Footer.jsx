import React from "react";
import SectionHeader from "../../SectionHeader/SectionHeader";
import "./style.scss";

const Footer = () => {
  return (
    <section className="footer" data-scoll-section>
      <SectionHeader title="Made in" />
      <h1 className="location" id="location-text">
        Rotterdam
      </h1>
    </section>
  );
};

export default Footer;
