import classes from "./PreviousRulingsSection.module.css";
import kanyeImage from "../../public/kanye-small.svg";
import LargeRuling from "./LargeRuling";

const PreviousRulingsSection = () => {
  return (
    <section className={classes.PreviousRulingsSection}>
      <div className="container">
        <div className={classes.heading}>
          <h1>Previous Rulings</h1>
          <button>List</button>
        </div>
        <div className={classes.rulings}>
          <LargeRuling
            image={kanyeImage}
            name="Kanye West"
            description="Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit…"
            registeredDate="23-01-2020"
            field="sports"
          />
          <LargeRuling
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
