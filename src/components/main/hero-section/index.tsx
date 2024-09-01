import Image from "next/image";
import styles from "./styles.module.scss";
import text from "../../../../public/assets/images/home-page/hero-text.webp";
import Button from "@/components/shared/button"; 
import { ButtonType } from "@/types/buttontypes";
import variables from "../../../app/styles/_variables.module.scss";

const buttonProps: ButtonType  = {
  width: "270px",
  height: "57px",
  name: "Reservation",
  routePath: "/",
  color: `${variables.secondaryColor}`,
  fontSize: "18px",
  border: `1px solid ${variables.secondaryColor}`
};

const Hero = () => {
  return (
    <section className={styles.heroContainer}>
      <Image className={styles.text} src={text} alt={"text"} />
      <Button buttonProps={buttonProps} />
    </section>
  );
};

export default Hero;
