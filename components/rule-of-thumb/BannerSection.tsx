import classes from "./BannerSection.module.css";
import closeImage from "../../public/close.svg";
import Image from "next/image";

const BannerSection = () => {
  return (
    <section className={classes.BannerSection}>
      <div className={`container ${classes.bannerContainer}`}>
        <div className={classes.speak}>
          <p>
            Speak Out. Be heard. <span>Be counted</span>
          </p>
        </div>
        <div className={classes.description}>
          <p>
            Rule of Thumb is a crowd sourced court of public opinion where
            anyone and everyone can speak out and speak freely. It’s easy: You
            share your opinion, we analyze and put the data in a public report.
          </p>
        </div>
        <div className={classes.dismiss}>
          <Image src={closeImage} alt="closeImage"/>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
