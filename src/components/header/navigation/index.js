import Link from "next/link";
import styles from "./styles.module.scss";
import NavButton from "./button";

const Navigation = () => {
    return (
        <nav className={styles.navigationList}>
            <NavButton />
            <div>About</div>
            <div>Menu</div>
            <Link href={"#"}>Private Dining</Link>
            <Link href={"#"}>Contact</Link>
            <Link href={"#"}>Locations</Link>
            <Link href={"#"}>Events</Link>
        </nav>
    )
}

export default Navigation;