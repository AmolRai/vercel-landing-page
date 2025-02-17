import styles from "./style.module.css";

const DeployCard = () => {
  return (
    <div className={styles.deployCard}>
      <div className={styles.deployLeft}>
        <h2>
          Ready to deploy? <span>Start building with a free account.</span>
        </h2>
        <p>
          Speak to an expert for your <b style={{ color: "#005ff2" }}>Pro</b> or{" "}
          <span>
            {" "}
            <b style={{ color: "#7d00cc" }}>Enterprise</b> needs.
          </span>
        </p>
        <div className={styles.actionBtn}>
          <button className={`${styles.deployBtn} ${styles.customBtn}`}>
            Start Deploying
          </button>
          <button className={`${styles.contactBtn} ${styles.customBtn}`}>
            Contact Sales
          </button>
        </div>
      </div>

      <div className={styles.deployRight}>
        <p>
          Explore Vercel Enterprise{" "}
          <span style={{ color: "#666666" }}>
            with <br /> an interactive product tour, <br /> trail, or a
            personalized demo.
          </span>
        </p>
        <button className={`${styles.contactBtn} ${styles.customBtn}`}>
          Explore Enterprise
        </button>
      </div>
    </div>
  );
};

export default DeployCard;
