import React, { useEffect, useRef, useState } from "react";
import SectionHeader from "../../SectionHeader/SectionHeader";
import gsap from "gsap";
import cn from "classnames";
import SplitText from "../../utils/Split3.min.js";
import useOnScreen from "../../hooks/useOnScreen";
import "./style.scss";

const About = () => {
  const ref = useRef();

  const [reveal, setReveal] = useState(false);
  const onScreen = useOnScreen(ref);

  useEffect(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen]);

  useEffect(() => {
    if (reveal) {
      const split = new SplitText("#headline", {
        type: "lines",
      });

      gsap.to(split.lines, {
        duration: 1,
        y: -20,
        opacity: 1,
        stagger: 0.1,
        ease: "power2",
      });
    }
  }, [reveal]);
  return (
    <section
      className={cn("about-section", { "is-reveal": reveal })}
      data-scoll-section
    >
      <SectionHeader title="about" />
      <p ref={ref} id="headline" className={cn({ "is-reveal": reveal })}>
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
