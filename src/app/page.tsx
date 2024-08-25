import styles from "./page.module.scss";
import Hero from "../components/main/hero-section/index";

export default function Home() {
  return (
    <div className={styles.main}>
      <Hero />
    </div>
  );
}
