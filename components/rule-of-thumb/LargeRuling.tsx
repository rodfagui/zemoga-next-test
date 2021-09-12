import classes from "./LargeRuling.module.css";
import thumbUpSquare from "../../public/thumb-up-square.svg";
import thumbDownSquare from "../../public/thumb-down-square.svg";
import thumbUpIcon from "../../public/thumb-up-icon.svg";
import thumbDownIcon from "../../public/thumb-down-icon.svg";
import Image from "next/image";
import { thumb } from "../../types/thumbs";

const LargeRuling = (props: thumb) => {
  const { id, picture, name, description, lastUpdated, category, votes } = props;
  const calculateQualificationBar = (
    thumbUpVotes: number,
    thumbDownVotes: number
  ) => {
    const totalVotes = thumbUpVotes + thumbDownVotes;
    const thumbUpPercentaje = Math.round((thumbUpVotes / totalVotes) * 100);
    const thumbDownPercentaje = 100 - thumbUpPercentaje;
    return [thumbDownPercentaje, thumbUpPercentaje];
  };
  const [thumbDownPercentaje, thumbUpPercentaje] = calculateQualificationBar(
    125,
    50
  );
  const thumbDownStyle = {
    width: `${thumbDownPercentaje}%`,
  };
  const thumbUpStyle = {
    width: `${thumbUpPercentaje}%`,
  };
  return (
    <div className={classes.LargeRuling}>
      <div className={classes.image}>
        <Image src={picture} alt={name} height="170px" />
      </div>
      <div className={classes.mask}>
        <div className={classes.qualification}>
          <Image src={thumbDownSquare} alt="thumbDownSquare" />
        </div>
        <div className={classes.voteSection}>
          <div className={classes.description}>
            <h2>{name}</h2>
            <p>{description}</p>
          </div>
          <div className={classes.voteButtons}>
            <div className={classes.thumbButton}>
              <Image src={thumbUpSquare} alt="thumbUpSquare" />
            </div>
            <div className={classes.thumbButton}>
              <Image src={thumbDownSquare} alt="thumbDownSquare" />
            </div>
            <button type="button" className={classes.submitVoteButton}>
              Vote Now
            </button>
          </div>
          <div className={classes.date}>
            <span>{"1 month ago in Entertainment"}</span>
          </div>
        </div>
        <div className={classes.qualificationBar}>
          <div className={classes.thumbUpQualificationBar} style={thumbUpStyle}>
            <div className={classes.qualificationIcon}>
              <Image
                src={thumbUpIcon}
                alt="thumbUpIcon"
                height={22.5}
                width={22.5}
              />
            </div>
            <div className={classes.qualificationPercentage}>
              <span>{thumbUpPercentaje}%</span>
            </div>
          </div>
          <div
            className={classes.thumbDownQualificationBar}
            style={thumbDownStyle}
          >
            <div className={classes.qualificationPercentage}>
              <span>{thumbDownPercentaje}%</span>
            </div>
            <div className={classes.qualificationIcon}>
              <Image
                src={thumbDownIcon}
                alt="thumbUpIcon"
                height={22.5}
                width={22.5}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LargeRuling;
