import RingIcon from "../../assets/RingIcon";
import RollbackIcon from "../../assets/RollbackIcon";
import SettingIcon from "../../assets/SettingIcon";
import styles from "./style.module.css";
import { IoMdRefresh } from "react-icons/io";

const DeploymentFeatures = () => {
  return (
    <div className={styles.deploymentContainer}>
      <div className={styles.deploymentContainerLeft}>
        <div className={styles.deploymentHeader}>
          <IoMdRefresh />
          <span>Instant Rollbacks</span>
        </div>

        <p className={styles.rollbackTitle}>
          Go ahead, deploy on Friday.{" "}
          <span style={{ color: "#666666" }}>
            Instantly <br /> rollback to a working deployment
          </span>
        </p>

        <div className={styles.deploymentInteract}>
          <div className={styles.deployCard}>
            <div className={styles.deployLeft}>
              <div className={styles.platform}>
                <span className={styles.vercelSiteText}>
                  vercel-site / <b>jvjb4ynna</b>
                </span>
                <span style={{ fontSize: "12px" }}>1d ago</span>
              </div>
              <div className={styles.setting}>
                <SettingIcon />
                <span>ba5f55f Update bento box design</span>
              </div>
            </div>
            <div className={styles.deployRight}>
              <RingIcon />
            </div>
          </div>
          <div>
            <RollbackIcon />
          </div>
          <div
            className={styles.deployCard}
            style={{ border: "1px dashed #00000014", alignSelf: "flex-end" }}
          >
            <div className={styles.deployLeft}>
              <div className={styles.platform}>
                <span className={styles.vercelSiteText}>
                  vercel-site / <b>gigj178v</b>
                </span>
                <span style={{ fontSize: "12px" }}>10m ago</span>
              </div>
              <div className={styles.setting}>
                <SettingIcon />
                <span>bx012mm Fis ESLint error on query</span>
              </div>
            </div>
            <div className={styles.deployRight}>
              <RingIcon />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.deploymentContainerRight}>
        <div className={styles.deploymentHeader}>
          <IoMdRefresh />
          <span>Conformance</span>
        </div>

        <p className={styles.conformanceTitle}>
          Move fast, don't break things.{" "}
          <span style={{ color: "#666666" }}>
            Keep <br /> quality high while maintaining velocity <br /> with
            Enterprise Monorepos.
          </span>
        </p>

        <div className={styles.conformanceCard}>
          <div className={styles.conformanceLeft}>
            <p>Conformance</p>
            <div className={styles.conformanceContent}>
              <div>
                <span>Excellent</span>
                <b>9.5</b>
              </div>
              <div>
                <span>Total Issues</span>
                <b>34</b>
              </div>
              <div>
                <span>Major Issues</span>
                <b>12</b>
              </div>
            </div>
          </div>

          <div className={styles.conformanceRight}>
            <p>Code Owners</p>
            <div className={styles.conformanceContent}>
              <div>
                <span>@vercel/design</span>
                <img
                  src="https://vercel.com/api/www/avatar?u=gln&s=44"
                  alt="img"
                />
              </div>
              <div>
                <span>@vercel/eng</span>
                <img
                  src="https://vercel.com/api/www/avatar?u=tomocchino&s=44"
                  alt="img"
                />
              </div>
              <div>
                <span>@vercel/marketing</span>
                <img
                  src="https://vercel.com/api/www/avatar?u=lindsaygilson&s=44"
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeploymentFeatures;
