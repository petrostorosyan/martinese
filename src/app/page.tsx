import styles from "./page.module.scss";
import Hero from "../components/main/hero-section/index";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
    </main>
  );
}
