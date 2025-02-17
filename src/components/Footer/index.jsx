import styles from "./style.module.css";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import VercelIcon from "../../assets/VercelIcon";

const productsArr = [
  "AI",
  "Enterprise",
  "Next.js",
  "Observability",
  "Previews",
  "Rendering",
  "Security",
  "Turbo",
];

const resourcesArr = [
  "Community",
  "Docs",
  "Guides",
  "Help",
  "Integration",
  "Pricing",
  "Resources",
  "Solution Partners",
  "Templates",
];

const companyArr = [
  "About",
  "Blog",
  "Next.js",
  "Careers",
  "Changelog",
  "Contact Us",
  "Customers",
  "Partners",
  "Privacy Policy",
  "Legal",
];

const socialArr = [
  { name: "GitHub", logo: <FaGithub /> },
  { name: "LinkedIn", logo: <FaLinkedin /> },
  { name: "Twitter", logo: <FaXTwitter /> },
  { name: "Youtube", logo: <FaYoutube /> },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <h4>Products</h4>
        <ul>
          {productsArr.map((prod) => {
            return <li key={prod}>{prod}</li>;
          })}
        </ul>
      </div>

      <div>
        <h4>Resources</h4>
        <ul>
          {resourcesArr.map((prod) => {
            return <li key={prod}>{prod}</li>;
          })}
        </ul>
      </div>

      <div>
        <h4>Company</h4>
        <ul>
          {companyArr.map((prod) => {
            return <li key={prod}>{prod}</li>;
          })}
        </ul>
      </div>

      <div>
        <h4>Social</h4>
        <ul className={styles.social}>
          {socialArr.map((prod) => {
            return (
              <li key={prod}>
                {prod.logo}
                {prod.name}
              </li>
            );
          })}
        </ul>
      </div>

      <VercelIcon />
    </footer>
  );
};

export default Footer;
