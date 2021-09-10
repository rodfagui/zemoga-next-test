import classes from "./MainPanel.module.css";
import thumbUpImage from "../../public/thumb-up.svg";
import thumbDownImage from "../../public/thumb-down.svg";
import Image from "next/image";
import wikipediaImage from "../../public/wikipedia.svg";

const MainPanel = () => {
  return (
    <div className={classes.MainPanel}>
      <div className={classes.info}>
        <h3>What&apos;s your opinion on</h3>
        <h1>Pope Francis?</h1>
        <p className={classes.description}>
          He&apos;s talking tough on clergy sexual abuse, or is he just another
          pervert protector? (thumbs down) or a true pedophile punishing
          pontiff? (thumps up)
        </p>
        <p className={classes.moreInfo}>
          <Image src={wikipediaImage} alt="wikipediaImage" /> More information
        </p>
        <h2>What&apos;s your veredict?</h2>
      </div>
      <div className={classes.thumbButtons}>
        <div className={classes.thumbButtonUp}>
          <Image src={thumbUpImage} alt="thumbUpImage" />
        </div>
        <div className={classes.thumbButtonDown}>
          <Image src={thumbDownImage} alt="thumbDownImage" />
        </div>
      </div>
    </div>
  );
};

export default MainPanel;
