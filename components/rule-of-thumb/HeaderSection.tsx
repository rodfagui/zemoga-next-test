
import Image from "next/image";

import searchImage from "../../public/search.svg";
import hamburguerImage from "../../public/hamburguer-button.svg";

import classes from "./HeaderSection.module.css";

const HeaderSection = () => {
  return (
    <header className={classes.HeaderSection}>
      <div className={classes.mask}>
        <div className={`container ${classes.maskContainer}`}>
          <div className={classes.logo} role="heading" aria-level={1}>Rule of thumb.</div>
          <div className={classes.navigation}>
            <nav className={classes.navbar} role="navigation">
              <div className={classes.hamburguerMenu}>
                <Image src={hamburguerImage} alt="hamburguerImage" layout="fill"/>
              </div>
              <a href="#" className="active">
                Past trials
              </a>
              <a href="#">How It Works</a>
              <a href="#">Login / Sign Up</a>
            </nav>
            <div className={classes.search}>
              <Image src={searchImage} alt="searchImage" layout="fill"/>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderSection;
