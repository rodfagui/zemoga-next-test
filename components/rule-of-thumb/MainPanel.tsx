import classes from "./MainPanel.module.css";
import thumbUpButton from "../../public/thumb-up-button.svg";
import thumbDownButton from "../../public/thumb-down-button.svg";
import Image from "next/image";
import wikipediaImage from "../../public/wikipedia.svg";

const MainPanel = () => {
  return (
    <section className={classes.MainPanel}>
      <div className={classes.info}>
        <h3>What&apos;s your opinion on</h3>
        <h1>Pope Francis?</h1>
        <p className={classes.description}>
          He&apos;s talking tough on clergy sexual abuse, or is he just another
          pervert protector? (thumbs down) or a true pedophile punishing
          pontiff? (thumps up)
        </p>
        <div className={classes.moreInfo}>
          <div className={classes.moreInfoImage}>
            <Image src={wikipediaImage} alt="wikipediaImage" layout="fill" />
          </div>
          <span>More information</span>
        </div>
        <h2>What&apos;s your veredict?</h2>
      </div>
      <div className={classes.thumbButtons}>
        <div className={classes.thumbButtonUp}>
          <Image src={thumbUpButton} alt="thumbUpImage" layout="fill" />
        </div>
        <div className={classes.thumbButtonDown}>
          <Image src={thumbDownButton} alt="thumbDownImage" layout="fill" />
        </div>
      </div>
    </section>
  );
};

export default MainPanel;
