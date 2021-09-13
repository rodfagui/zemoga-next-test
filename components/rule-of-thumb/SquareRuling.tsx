import Image from "next/image";
import { useState, useContext } from "react";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

import classes from "./SquareRuling.module.css";

import thumbUpSquare from "../../public/thumb-up-square.svg";
import thumbDownSquare from "../../public/thumb-down-square.svg";
import thumbUpIcon from "../../public/thumb-up-icon.svg";
import thumbDownIcon from "../../public/thumb-down-icon.svg";

import { calculateQualificationBarPercentages } from "utils/votes";
import { getShortedText } from "utils/string";

import { thumbsDispatchContextType } from "types/thumbs";
import { thumbsDispatchContext } from "contexts/thumbs.context";

type SquareRulingProps = {
  id: string;
  name: string;
  description: string;
  category: string;
  picture: string;
  lastUpdated: number | Date;
  votes: {
    positive: number;
    negative: number;
  };
  updateThumbVotes: (
    id: string,
    votes: { positive: number; negative: number }
  ) => Promise<{ message: string }>;
};

const SquareRuling = (props: SquareRulingProps): JSX.Element => {
  TimeAgo.addLocale(en);

  const timeAgo = new TimeAgo("en-US");

  const {
    id,
    picture,
    name,
    description,
    lastUpdated,
    category,
    votes,
    updateThumbVotes,
  } = props;

  const [isThumbUpSelected, setIsThumUpSelected] = useState(false);
  const [isThumbDownSelected, setIsThumDownSelected] = useState(false);
  const [wasVoteSubmited, setWasVoteSubmited] = useState(false);
  const lastUpdatedTimeAgo = timeAgo.format(new Date(lastUpdated));

  const qualificationImage =
    votes.positive >= votes.negative ? thumbUpSquare : thumbDownSquare;

  const dispatch = useContext<thumbsDispatchContextType>(thumbsDispatchContext);

  const [thumbDownPercentaje, thumbUpPercentaje] =
    calculateQualificationBarPercentages(votes.positive, votes.negative);

  const thumbDownStyle = {
    width: `${thumbDownPercentaje}%`,
  };
  const thumbUpStyle = {
    width: `${thumbUpPercentaje}%`,
  };

  const handleSelectThumbUp = () => {
    setIsThumUpSelected(!isThumbUpSelected);
    setIsThumDownSelected(false);
  };
  const handleSelectThumbDown = () => {
    setIsThumDownSelected(!isThumbDownSelected);
    setIsThumUpSelected(false);
  };
  const handleClickSubmitVoteButton = async (
    id: string,
    isThumbUpSelected: boolean,
    isThumbDownSelected: boolean,
    wasVoteSubmited: boolean
  ) => {
    if (wasVoteSubmited) {
      setIsThumUpSelected(false);
      setIsThumDownSelected(false);
      setWasVoteSubmited(false);
    } else {
      let newVotes = {
        positive: votes.positive,
        negative: votes.negative,
      };
      if (isThumbUpSelected) {
        newVotes.positive = newVotes.positive + 1;
      } else {
        if (isThumbDownSelected) {
          newVotes.negative = newVotes.negative + 1;
        }
      }
      const data = await updateThumbVotes(id, newVotes);
      if (data.message === "Thumb changed!") {
        dispatch({ type: "UPDATE", id: id, votes: newVotes });
        setWasVoteSubmited(true);
      }
    }
  };

  const thumbUpButtonStyle = {
    border: isThumbUpSelected ? "1px solid #ffffff" : "none",
    display: wasVoteSubmited ? "none" : "",
  };
  const thumbDownButtonStyle = {
    border: isThumbDownSelected ? "1px solid #ffffff" : "none",
    display: wasVoteSubmited ? "none" : "",
  };

  const isSubmitButtonDisabled = !(isThumbUpSelected || isThumbDownSelected);

  return (
    <div className={classes.SquareRuling}>
      <div className={classes.image}>
        <Image src={`/${picture}`} alt={name} layout="fill" />
      </div>
      <div className={classes.mask}>
        <div className={classes.qualification}>
          <Image
            src={qualificationImage}
            alt="qualificationImage"
            layout="fill"
          />
        </div>
        <div className={classes.description}>
          <h2>{name}</h2>
          <p>{getShortedText(description, 75)}</p>
        </div>
        <div className={classes.date}>
          <span>
            {wasVoteSubmited
              ? "Thank you for your vote!"
              : `${lastUpdatedTimeAgo} in ${category}`}
          </span>
        </div>
        <div className={classes.voteButtons}>
          <div
            style={thumbUpButtonStyle}
            className={classes.thumbButton}
            onClick={handleSelectThumbUp}
          >
            <Image src={thumbUpSquare} alt="thumbUpSquare" layout="fill" />
          </div>
          <div
            style={thumbDownButtonStyle}
            className={classes.thumbButton}
            onClick={handleSelectThumbDown}
          >
            <Image src={thumbDownSquare} alt="thumbDownSquare" layout="fill" />
          </div>
          <button
            type="button"
            className={classes.submitVoteButton}
            disabled={isSubmitButtonDisabled}
            onClick={() =>
              handleClickSubmitVoteButton(
                id,
                isThumbUpSelected,
                isThumbDownSelected,
                wasVoteSubmited
              )
            }
          >
            {wasVoteSubmited ? "Vote Again" : "Vote Now"}
          </button>
        </div>
        <div className={classes.qualificationBar}>
          <div className={classes.thumbUpQualificationBar} style={thumbUpStyle}>
            <div className={classes.qualificationIcon}>
              <Image src={thumbUpIcon} alt="thumbUpIcon" layout="fill" />
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
              <Image src={thumbDownIcon} alt="thumbUpIcon" layout="fill" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SquareRuling;
