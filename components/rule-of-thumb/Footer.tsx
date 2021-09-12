import classes from "./Footer.module.css";
import facebookIcon from "../../public/facebook-icon.svg";
import twitterIcon from "../../public/twitter-icon.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={classes.Footer}>
      <div className={`container ${classes.footerContainer}`}>
        <div className={classes.footerLinks}>
          <ul>
            <li>
              <a href="#">Terms and Conditions</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className={classes.footerSocial}>
          <span>Follow us</span>
          <ul>
            <li>
              <a href="#">
                <Image src={facebookIcon} alt="facebookIcon" />
              </a>
            </li>
            <li>
              <a href="#">
                <Image src={twitterIcon} alt="twitterIcon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
