import styles from "./style.module.css";
import { BiSolidUpArrow } from "react-icons/bi";
import CodeIcon from "../../assets/CodeIcon";
import WorldIcon from "../../assets/WorldIcon";
import PushIcon from "../../assets/PushIcon";
import VercelIcon from "../../assets/VercelIcon";
import TriangleIcon from "../../assets/TriangleIcon";

const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.heroSectionContent}>
        <h1>Your complete platform for the web.</h1>
        <p>
          Vercel provides the developer tools and cloud infrastructure to build,
          scale, and secure a faster, more personalized web.
        </p>
        <div className={styles.actionBtn}>
          <button className={styles.deployBtn}>
            <VercelIcon width="16" height="16" />
            Start Deploying
          </button>
          <button className={styles.demoBtn}>Got a Demo</button>
          <div className={styles.triangle}>{<TriangleIcon />}</div>
        </div>
      </div>
      <div className={styles.heroGradient}>
        <div className={styles.triangleRainbow}></div>
      </div>

      <div className={styles.heroTitle}>
        <span>
          Develop with your favorite tools <CodeIcon />
        </span>
        <span>
          Launch globally, instantly <WorldIcon /> Keep pushing <PushIcon />
        </span>
      </div>
    </div>
  );
};

export default HeroSection;
