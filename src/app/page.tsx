import styles from "./page.module.scss";
import Hero from "../components/main/hero-section/index";
import Explore from "../components/main/explore-section/index";
import Branches from "@/components/main/branches-section";
import MenuAndPrivateDining from "@/components/main/menu-section";

export default function Home() {
  return (
    <div className={styles.main}>
      <Hero />
      <Explore />
      <Branches />
      <MenuAndPrivateDining />
    </div>
  );
}
