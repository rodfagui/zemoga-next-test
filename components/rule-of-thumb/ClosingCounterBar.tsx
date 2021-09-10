import classes from "./ClosingCounterBar.module.css";

const ClosingCounterBar = () => {
  return (
    <div className={classes.ClosingCounterBar}>
      <div className={classes.closingIn}>
        <div className={classes.text}>
          Closing in
        </div>
      </div>
      <div className={classes.triangle} />
      <div className={classes.days}>
        22<span>days</span>
      </div>
    </div>
  );
};

export default ClosingCounterBar;
