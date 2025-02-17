import styles from "./style.module.css";
import { FaChartLine } from "react-icons/fa6";
import AnalyticsImage from "../../assets/analytics.png";

const Chart = () => {
  return (
    <div className={styles.chartContainer}>
      <div className={styles.chartLeft}>
        <FaChartLine />
        <p>Frontend Observability</p>
      </div>

      <div className={styles.chartRight}>
        <b>Privacy-friendly, lightweight Analytics.</b>
        <span>
          Upgrade your post-launch workflow with actionable, <br /> real-time
          insights.
        </span>

        <div>
          <img src={AnalyticsImage} alt="analytics-png" />
        </div>
      </div>
    </div>
  );
};

export default Chart;
