import classes from "./PreviousRulingsSection.module.css";
import kanyeSmallImage from "../../public/kanye-small.svg";
import kanyeImage from "../../public/kanye.svg";
import LargeRuling from "./LargeRuling";
import SquareRuling from "./SquareRuling";

const PreviousRulingsSection = () => {
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
            image={kanyeSmallImage}
            name="Kanye West"
            description="Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit…"
            registeredDate="23-01-2020"
            field="sports"
          />
          <LargeRuling
            image={kanyeSmallImage}
            name="Kanye West"
            description="Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit…"
            registeredDate="23-01-2020"
            field="sports"
          />
          <SquareRuling
            image={kanyeImage}
            name="Kanye West"
            description="Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit…"
            registeredDate="23-01-2020"
            field="sports"
          />
        </div>
      </div>
    </section>
  );
};

export default PreviousRulingsSection;
