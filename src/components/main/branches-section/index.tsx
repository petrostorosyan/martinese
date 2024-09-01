import Image from "next/image";
import styles from "./styles.module.scss";
import { Cinzel } from "next/font/google";
import { Source_Serif_4 } from "next/font/google";
import { branchData } from "../../../app/services/home-page/branches-data";
import Button from "@/components/shared/button";
import { ButtonType } from "@/types/buttontypes";
import variables from "../../../app/styles/_variables.module.scss";

const cinzel = Cinzel({ subsets: ["latin"], weight: ["400"] });
const sourceSerif = Source_Serif_4({subsets: ["latin"], weight: ["300"]});

const buttonProps: ButtonType  = {
  width: "205px",
  height: "50px",
  name: "Book Table",
  routePath: "/",
  color: `${variables.primaryColor}`,
  fontSize: "18px",
  border: `1px solid ${variables.primaryColor}`
};

const Branches = () => {
  return (
    <section className={styles.branchesContainer}>
      <h2 className={`${styles.title} ${cinzel.className}`}>
        Martinese Branches
      </h2>
      <div className={styles.branchBox}>
        {branchData.map((branch) => {
          return (
            <div key={branch.id} className={styles.branch}>
              <Image
                className={styles.branchImg}
                src={branch.branchImgSrc}
                alt={branch.branchName}
                title={branch.branchName}
              />
              <p className={`${styles.branchName} ${sourceSerif.className}`}>{branch.branchName}</p>
            </div>
          );
        })}
      </div>
      <Button buttonProps={buttonProps} />
    </section>
  );
};

export default Branches;
