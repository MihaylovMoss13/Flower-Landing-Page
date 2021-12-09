import React from "react";
import SectionHeader from "../../SectionHeader/SectionHeader";
import "./style.scss";

const About = () => {
  return (
    <section className="about-section" data-scoll-section>
      <SectionHeader title="about" />
      <p id="headline">
        Harry Flower create traditional and tailor-made floral arrangements for
        subsequent purchase. We also guide clients on appropriate plant-related
        care. This website is also a blog about flowers and the floral designers
        who make them into art. Creativity and the art of "making" require
        dialog. We value art, we value insight, and we value opinion.
      </p>
    </section>
  );
};

export default About;
