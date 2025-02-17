import styles from "./style.module.css";
import { TbBuilding } from "react-icons/tb";
import { MdOutlineSecurity } from "react-icons/md";

const ScaleCard = () => {
  return (
    <div className={styles.scaleCard}>
      <h2>
        Scale your{" "}
        <span className={styles.custom}>
          <TbBuilding /> Enterprise
        </span>{" "}
        without compromising{" "}
        <span className={styles.custom}>
          {" "}
          <MdOutlineSecurity /> Security
        </span>
      </h2>
    </div>
  );
};

export default ScaleCard;
