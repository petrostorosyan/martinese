import Image from "next/image";
import styles from "./styles.module.scss";
import { Cinzel } from "next/font/google";
import { Source_Serif_4 } from "next/font/google";
import decor from "../../../../public/assets/images/decores/lines-groups.png";
import salad from "../../../../public/assets/images/home-page/explore/salad.webp";
import meat from "../../../../public/assets/images/home-page/explore/meat.webp";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400"],
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["200", "300","400", "500"],
});

const Explore = () => {
  return (
    <section className={`${styles.exploreContainer} ${cinzel.className}`}>
      <Image className={styles.decor} src={decor} alt={"decor"} />
      <h2 className={styles.title}>Explore Martinese</h2>
      <div className={styles.exploreBox}>
        <Image className={styles.img} src={salad} alt={"salad"} />
        <div className={styles.aboutBox}>
          <p className={`${styles.text} ${sourceSerif.className}`}>
            Indulge in the epitome of luxury and sophistication at our high-end
            restaurant, where culinary excellence merges seamlessly with opulent
            surroundings. From the moment you step through our doors, prepare to
            be immersed in a world of refined flavors, impeccable service, and
            an ambiance that transports you to a realm of unparalleled
            indulgence.
          </p>
          <button className={styles.aboutBtn}>About</button>
        </div>
        <Image className={styles.img} src={meat} alt={"meat"} />
      </div>
    </section>
  );
};

export default Explore;
