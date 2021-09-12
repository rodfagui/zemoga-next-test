import classes from "./LargeRuling.module.css";
import thumbDownSquare from "../../public/thumb-down-square.svg";
import thumbUpIcon from "../../public/thumb-up-icon.svg";
import thumbDownIcon from "../../public/thumb-down-icon.svg";
import Image from "next/image";

type LargeRuling = {
  image: string;
  name: string;
  description: string;
  registeredDate: string;
  field: string;
};

const LargeRuling = (props: LargeRuling) => {
  const { image, name, description } = props;
  const calculateQualificationBar = (
    thumbUpVotes: number,
    thumbDownVotes: number 
  ) => {
    const totalVotes = thumbUpVotes + thumbDownVotes;
    const thumbUpPercentaje = Math.round((thumbUpVotes / totalVotes) * 100);
    const thumbDownPercentaje = 100 - thumbUpPercentaje;
    return [thumbDownPercentaje, thumbUpPercentaje];
  };
  const [thumbDownPercentaje, thumbUpPercentaje] = calculateQualificationBar(125, 50);
  const thumbDownStyle = {
    width: `${thumbDownPercentaje}%`,
  };
  const thumbUpStyle = {
    width: `${thumbUpPercentaje}%`,
  };
  return (
    <div className={classes.LargeRuling}>
      <div className={classes.image}>
        <Image src={image} alt={name} height="170px" />
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
            
          </div>
        </div>
        <div className={classes.qualificationBar}>
          <div className={classes.thumbUpQualificationBar} style={thumbUpStyle}>
            <div className={classes.qualificationIcon}>
              <Image src={thumbUpIcon} alt="thumbUpIcon" height={22.5} width={22.5} />
            </div>
            <div className={classes.qualificationPercentage}>{thumbUpPercentaje}%</div>
          </div>
          <div className={classes.thumbDownQualificationBar} style={thumbDownStyle}>
            <div className={classes.qualificationPercentage}>{thumbDownPercentaje}%</div>
            <div className={classes.qualificationIcon}>
              <Image src={thumbDownIcon} alt="thumbUpIcon" height={22.5} width={22.5} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LargeRuling;
