import styles from "./style.module.css";
import CodeIcon from "../../assets/CodeIcon";
import { FiMessageCircle } from "react-icons/fi";
import { FaLock } from "react-icons/fa";
import BlueArrowIcon from "../../assets/BlueArrowIcon";
import RedArrowIcon from "../../assets/RedArrowIcon";
import GreenArrowIcon from "../../assets/GreenArrowIcon";

const Feature = () => {
  return (
    <div className={styles.featureContainer}>
      <div className={styles.featureLeft}>
        <div>
          <CodeIcon height="14" width="14" color="#666666" />
          <span className={styles.gitTitle}>&nbsp;Git-connected Deploys</span>
        </div>
        <div className={styles.leftContent}>
          <strong>From localhost to https, in seconds.</strong>
          <span>Deploy from Git or your CLI.</span>
        </div>

        <div className={styles.commandline}>
          <div className={styles.circles}>
            <div className={styles.commandCircle}></div>
            <div className={styles.commandCircle}></div>
            <div className={styles.commandCircle}></div>
          </div>
          <span>▲ ~ vercel-site/ git push</span>
          <span>Enumerating objects: 1, done.</span>
          <span>Counting objects: 100% (1/1), done.</span>
          <span>Writing objects: 100% (1/1), 72 bytes, done.</span>
          <span>Total 1 (delta 0), reused 0 (delta 0).</span>
          <span>To github.com:vercel/vercel-site.git</span>
          <span>&nbsp;&nbsp;&nbsp;21326a9..81663c3 </span>
        </div>

        <div
          className={`${styles.commandline} ${styles.customLayout}`}
          style={{
            backgroundColor: "white",
            position: "absolute",
            top: "16.5rem",
            right: "3rem",
          }}
        >
          <div className={styles.vercelHeader}>
            <div className={styles.circles}>
              <div
                className={styles.commandCircle}
                style={{ backgroundColor: "#fc0135" }}
              ></div>
              <div
                className={styles.commandCircle}
                style={{ backgroundColor: "#48aeff" }}
              ></div>
              <div
                className={styles.commandCircle}
                style={{ backgroundColor: "#00e3c4" }}
              ></div>
            </div>

            <div className={styles.vercelHeaderMiddle}>
              <FaLock />
              <span>vercel.com</span>
            </div>
          </div>
          <div className={styles.vercelLine}>
            <span className={styles.shadowText}>What will you ship?</span>
            <div style={{ marginTop: "-3.5rem" }}>
              <svg fill="none" height="100" viewBox="0 0 312 144" width="310">
                <rect
                  height="181"
                  stroke="##c9c9c9"
                  width="311"
                  x="0.5"
                  y="0.5"
                ></rect>
                <g>
                  <path
                    clip-rule="evenodd"
                    d="M155.5 78L200 156H111L155.5 78Z"
                    fill="white"
                    fill-rule="evenodd"
                  ></path>
                  <path
                    clip-rule="evenodd"
                    d="M155.5 78L200 156H111L155.5 78Z"
                    fill-rule="evenodd"
                    stroke="#c9c9c9"
                  ></path>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.featureRight}>
        <div className={styles.rightIcon}>
          <FiMessageCircle />
          <span className={styles.gitTitle}>Collaborative pre-production</span>
        </div>
        <div className={styles.rightContent}>
          <strong>Every deploy is remarkable.</strong>
          <span style={{ color: "#666666" }}>
            &nbsp;Chat with your team on real, production-grade UI, not just
            designs.
          </span>
        </div>

        <div className={styles.collaborateContainer}>
          <div className={styles.card} style={{ alignSelf: "flex-start" }}>
            Swapped out the <span>button</span> for <br /> some variants we
            needed
          </div>
          <div className={styles.cardArrow}>
            <div>
              <span className={styles.pranathiTitle}>Pranathi</span>
              <BlueArrowIcon width="18" height="18" color="#48AEFF" />
            </div>
            <div className={styles.card} style={{ alignSelf: "flex-end" }}>
              How About this instead?
            </div>
          </div>

          <div
            className={styles.cardArrow}
            style={{
              alignSelf: "flex-start",
              alignItems: "flex-end",
            }}
          >
            <div className={styles.card} style={{ alignSelf: "flex-start" }}>
              I like it. Does this work with <br /> the brand tweaks{" "}
              <strong>@mamuso</strong>?
            </div>
            <div className={styles.redIcon}>
              <RedArrowIcon width="18" height="18" color="#fc0135" />
              <span
                style={{ backgroundColor: "#fc0135" }}
                className={styles.pranathiTitle}
              >
                Rauno
              </span>
            </div>
          </div>

          <div
            className={styles.cardArrow}
            style={{
              alignSelf: "flex-end",
              alignItems: "flex-end",
              gap: "2rem",
            }}
          >
            <div className={`${styles.card}`}>
              <p className={styles.greatTitle}>This looks great!</p>
            </div>
            <div className={styles.greenIcon}>
              <GreenArrowIcon width="18" height="18" color="#00e3c4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
