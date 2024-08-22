import Image from "next/image";
import styles from "./styles.module.scss";
import logo from "../../../public/assets/logo/white-logo.png";
import Navigation from "./navigation/index";

const Header = () => {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Image src={logo} width={234} height={52} alt="logo" />
                <div className={styles.navigation}>
                  <Navigation />
                  <button>Book Table</button>
                </div>
                
            </div>
        </div>
    )
}

export default Header;