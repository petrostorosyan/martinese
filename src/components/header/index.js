import Image from "next/image";
import styles from "./styles.module.scss";
import logo from "../../../public/assets/logo/white-logo.png";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
        <Image src={logo} width={234} height={52} />
    </div>
  )
}

export default Header;