"use client";

import Image from "next/image";
import styles from "./styles.module.scss";
import lines from "../../../../public/assets/images/decores/straight-lines.png";
import salad from "../../../../public/assets/images/home-page/menu/salad.webp";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

const MenuAndPrivateDining = () => {
  gsap.registerPlugin(ScrollTrigger);

  const infoRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (infoRef.current) {
      const infoBoxElement = infoRef.current;

      gsap.fromTo(
        infoBoxElement,
        {
          x: window.innerWidth, // Start off-screen to the right
          // opacity: 0, // Optional: start with opacity 0 for a fade-in effect
        },
        {
          x: 940, // End at 1100 pixels from the left
          // opacity: 1, // Fade to full opacity
          duration: 2,
          ease: "power3.out", // Smooth easing
          scrollTrigger: {
            trigger: infoBoxElement,
            start: "top 75%", // Start animation when the top of the element is 75% down the viewport
            end: "top 50%", // Adjust this value as needed
            scrub: true, // Sync animation with scrolling
            // markers: true, // Uncomment for debugging
          },
        }
      );
    }
  }, []);

  return (
    <div className={styles.menuContainer}>
      <div className={styles.menuContent}>
        <Image className={styles.image} src={salad} alt={"salad"} />
        <Image className={styles.decor} src={lines} alt={"decor"} />
        <div ref={infoRef} className={styles.infoBox}>
          <p>title</p>
          <p>description</p>
          <button>view menu</button>
        </div>
      </div>
    </div>
  );
};

export default MenuAndPrivateDining;
