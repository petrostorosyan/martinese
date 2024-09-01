import Link from "next/link";
import styles from "./styles.module.scss";
import { ButtonType } from "@/types/buttontypes";

const Button = ({ buttonProps }: { buttonProps: ButtonType  }) => {
  const { width, height, name, routePath, border, color, fontSize } = buttonProps;
  return (
    <Link
      className={styles.btn}
      href={routePath}
      style={{ width, height, border, color, fontSize }}
    >
      {name}
    </Link>
  );
};

export default Button;
