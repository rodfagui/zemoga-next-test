import classes from "./PreviousRulingsSection.module.css";
import kanyeSmallImage from "../../public/kanye-small.svg";
import kanyeImage from "../../public/kanye.svg";
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
  return (
    <section className={classes.PreviousRulingsSection}>
      <div className="container">
        <div className={classes.heading}>
          <h1>Previous Rulings</h1>
          <select className="select">
            <option value="0">List</option>
            <option value="1">Grid</option>
          </select>
        </div>
        <div className={classes.rulings}>
          <LargeRuling
            id="1"
            picture={kanyeSmallImage}
            name="Kanye West"
            description="Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit…"
            lastUpdated="23-01-2020"
            category="sports"
            votes={{ positive: 2, negative: 2 }}
          />
          {thumbs.map((thumb) => (
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreviousRulingsSection;
