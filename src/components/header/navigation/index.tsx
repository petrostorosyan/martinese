import Link from "next/link";
import styles from "./styles.module.scss";
import NavButton from "./button";
import {Source_Serif_4} from "next/font/google";

const sourceSerif = Source_Serif_4({ subsets: ["latin"], weight: ['300'], });

const Navigation = () => {
    return (
        <nav className={styles.navigationList}>
            <NavButton />
            <NavButton />
            <div>About</div>
            <div>Menu</div>
            <Link href={"#"} className={`${sourceSerif.className} ${styles.navLink}`}>Private Dining</Link>
            <Link href={"#"} className={`${sourceSerif.className} ${styles.navLink}`}>Contact</Link>
            <Link href={"#"} className={`${sourceSerif.className} ${styles.navLink}`}>Locations</Link>
            <Link href={"#"} className={`${sourceSerif.className} ${styles.navLink}`}>Events</Link>
        </nav>
    )
}

export default Navigation;