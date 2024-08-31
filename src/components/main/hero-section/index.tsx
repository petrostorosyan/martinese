import Image from "next/image";
import styles from "./styles.module.scss";
import text from "../../../../public/assets/images/home-page/hero-text.webp";

const Hero = () => {
  return (
    <section className={styles.heroContainer}>
      <Image className={styles.text} src={text} alt={"text"} />
      <button className={styles.button}>Reservation</button>
    </section>
  );
};

export default Hero;
