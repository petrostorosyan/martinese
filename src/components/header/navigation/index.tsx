import Link from "next/link";
import styles from "./styles.module.scss";
import NavButton from "./button";
import { backdropClasses, Button } from "@mui/material";
import { Source_Serif_4 } from "next/font/google";

const source = Source_Serif_4({ subsets: ["latin"], weight: ["200"] });

const Navigation = () => {
    return (
        <nav className={styles.navigationList}>
            <NavButton className={styles.link} btnName={"About"} menuItems={["Careers", "FAQ's", "Gallery"]} />
            <NavButton btnName={"Menu"}/>
            <Button className={`${source.className} ${styles.button}`}><Link href={"#"} className={styles.link}>Private Dining</Link></Button>
            <Button className={`${source.className} ${styles.button}`}><Link href={"#"} className={styles.link}>Contact</Link></Button>
            <Button className={`${source.className} ${styles.button}`}><Link href={"#"} className={styles.link}>Locations</Link></Button>
            <Button className={`${source.className} ${styles.button}`}><Link href={"#"} className={styles.link}>Events</Link></Button>             
        </nav>
    )
}

export default Navigation;