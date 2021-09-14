import classes from "./SubmitNameSection.module.css";
import bannerImage from "../../public/banner-image.svg";
import Image from "next/image";

const SubmitNameSection = () => {
  return (
    <aside className={classes.SubmitNameSection} role="doc-tip" aria-label="Submit a name">
      <div className={`container ${classes.bannerContainer}`}>
        <div className={classes.bannerImage}>
          <Image src={bannerImage} alt="bannerImage" layout="fill" />
        </div>
        <div className={classes.bannerLeft}>
          <h2 className={classes.bannerHeading}>Is there anyone else you would want us to add?</h2>
        </div>
        <div className={classes.bannerRight}>
          <button type="button" className={classes.bannerButton}>Submit a name</button>
        </div>
      </div>
    </aside>
  );
};

export default SubmitNameSection;
