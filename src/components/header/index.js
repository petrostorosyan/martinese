import Image from "next/image";
import styles from "./styles.module.scss";
import logo from "../../../public/assets/logo/white-logo.png";
import Navigation from "./navigation/index";
import Link from "next/link";

const Header = () => {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Image src={logo} width={234} height={52} alt="logo" />
                <Navigation />
                <button className={styles.bookTableBtn}>
                    <Link href={"#"} className={styles.link}>Book Table</Link>
                </button>
            </div>
        </div>
    )
}

export default Header;