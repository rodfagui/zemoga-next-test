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
  const [selectedRenderOption, setSelectedRenderOption] = useState("list");
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
  return (
    <section className={classes.PreviousRulingsSection}>
      <div className="container">
        <div className={classes.heading}>
          <h1>Previous Rulings</h1>
          <select
            className="select"
            value={selectedRenderOption}
            onChange={(evt) => setSelectedRenderOption(evt.target.value)}
          >
            <option value="list">List</option>
            <option value="grid">Grid</option>
          </select>
        </div>
        <div className={classes.rulings}>{renderedList}</div>
      </div>
    </section>
  );
};

export default PreviousRulingsSection;
