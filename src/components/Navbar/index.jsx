import styles from "./style.module.css";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.headerLeft}>
        <img
          src="https://vercel.com/vc-ap-vercel-marketing/_next/static/media/vercel-logotype-light.cf7eca76.svg"
          alt="vercel-logo"
        />
        <nav>
          <ul>
            <li>
              <div>
                Products
                <IoIosArrowDown />
              </div>
            </li>
            <li>
              <div>
                Solutions
                <IoIosArrowDown />
              </div>
            </li>
            <li>
              <div>
                Resources
                <IoIosArrowDown />
              </div>
            </li>
            <li>Enterprise</li>
            <li>Docs</li>
            <li>Pricing</li>
          </ul>
        </nav>
      </div>

      <div className={styles.headerRight}>
        <button>Log In</button>
        <button>Contact</button>
        <button className={styles.signUp}>Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;
