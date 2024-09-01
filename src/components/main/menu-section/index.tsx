"use client";

import Image from "next/image";
import styles from "./styles.module.scss";
import lines from "../../../../public/assets/images/decores/straight-lines.png";
import salad from "../../../../public/assets/images/home-page/menu/salad.webp";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const MenuAndPrivateDining = () => {
  gsap.registerPlugin(ScrollTrigger);

  const infoRef = useRef<HTMLDivElement | null>(null);

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: `.${styles.infoBox}`,
      scrub: true,
    //   markers: true,
      start: "50% 60%",
      end: "55% 55%",
    },
  });

  useGSAP(
    () => {
      if (infoRef.current) {
        tl.from(`.${styles.infoBox}`, {
          x: 1930,
          duration: 2,          
        })
        // .to(`.${styles.infoBox}`, {x: 930});
      }
    },
    { scope: infoRef }
  );

  return (
    <div className={styles.menuContainer}>
      <div ref={infoRef} className={styles.menuContent}>
        <Image className={styles.image} src={salad} alt={"salad"} />
        <Image className={styles.decor} src={lines} alt={"decor"} />
        <div className={styles.infoBox}>
          <p>title</p>
          <p>description</p>
          <button>view menu</button>
        </div>
      </div>
    </div>
  );
};

export default MenuAndPrivateDining;
