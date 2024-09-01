import Image from "next/image";
import styles from "./styles.module.scss";
import logo from "../../../public/assets/images/logo/white-logo.png";
import Navigation from "./navigation/index";
import Link from "next/link";
import Button from "../shared/button";
import { ButtonType } from "@/types/buttontypes";
import variables from "../../app/styles/_variables.module.scss";

const buttonProps: ButtonType  = {
    width: "126px",
    height: "38px",
    name: "Book Table",
    routePath: "/",
    color: `${variables.secondaryColor}`,
    fontSize: "16px",
    border: `2px solid ${variables.secondaryColor}`
};

const Header = () => {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Image src={logo} width={234} height={52} alt="logo" />
                <Navigation />
                <Button buttonProps={buttonProps} />
            </div>
        </div>
    )
}

export default Header;