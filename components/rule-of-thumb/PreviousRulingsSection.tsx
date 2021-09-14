import { useState } from "react";
import classes from "./PreviousRulingsSection.module.css";
import LargeRuling from "./LargeRuling";
import SquareRuling from "./SquareRuling";

import { thumb } from "types/thumbs";

type Props = {
  thumbs: Array<thumb>;
  updateThumbVotes: (
    id: string,
    votes: { positive: number; negative: number }
  ) => Promise<{ message: string }>;
};

const PreviousRulingsSection = (props: Props) => {
  const { thumbs, updateThumbVotes } = props;
  const [selectedRenderOption, setSelectedRenderOption] = useState("grid");
  const [showOptions, setShowOptions] = useState(false);
  const renderedList =
    selectedRenderOption === "list"
      ? thumbs.map((thumb) => (
          <LargeRuling
            key={thumb.id}
            id={thumb.id}
            name={thumb.name}
            description={thumb.description}
            picture={thumb.picture}
            lastUpdated={thumb.lastUpdated}
            category={thumb.category}
            votes={thumb.votes}
            updateThumbVotes={updateThumbVotes}
          />
        ))
      : thumbs.map((thumb) => (
          <SquareRuling
            key={thumb.id}
            id={thumb.id}
            name={thumb.name}
            description={thumb.description}
            picture={thumb.picture}
            lastUpdated={thumb.lastUpdated}
            category={thumb.category}
            votes={thumb.votes}
            updateThumbVotes={updateThumbVotes}
          />
        ));
  const visibilityOption = showOptions ? "visible" : "hidden";
  const openSelectOptions = () => {
    setShowOptions(!showOptions);
  };
  const handleSelectOptions = (showOption: string) => {
    setShowOptions(false);
    setSelectedRenderOption(showOption);
  };

  return (
    <main className={classes.PreviousRulingsSection}>
      <div className="container">
        <div className={classes.heading}>
          <h1>Previous Rulings</h1>
          <div className={classes.select}>
            <div className={classes.button} onClick={openSelectOptions}>
              <span>{selectedRenderOption}</span>
              <span className={classes.arrowCharacter}>&#9660;</span>
            </div>
            <div
              className={classes.options}
              style={{ visibility: visibilityOption }}
            >
              <div
                className={classes.option}
                onClick={() => handleSelectOptions("list")}
              >
                List
              </div>
              <div
                className={classes.option}
                onClick={() => handleSelectOptions("grid")}
              >
                Grid
              </div>
            </div>
          </div>
        </div>
        <div className={classes.rulings}>{renderedList}</div>
      </div>
    </main>
  );
};

export default PreviousRulingsSection;
