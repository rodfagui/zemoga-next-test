import classes from "./HeaderSection.module.css";
import searchImage from "../../public/search.svg";
import Image from "next/image";

const HeaderSection = () => {
  return (
    <header className={classes.HeaderSection}>
      <div className={classes.mask}>
        <div className={`container ${classes.maskContainer}`}>
          <div className={classes.logo}>Rule of thumb.</div>
          <div className={classes.navigation}>
            <nav className={classes.navbar}>
              <a href="#" className="active">
                Past trials
              </a>
              <a href="#">How It Works</a>
              <a href="#">Login / Sign Up</a>
            </nav>
            <div className={classes.search}>
              <Image src={searchImage} alt="searchImage"/>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderSection;
