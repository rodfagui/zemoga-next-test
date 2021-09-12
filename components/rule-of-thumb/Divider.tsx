import classes from "./Divider.module.css";

const Divider = () => {
  return (
    <div className="container">
      <hr className={classes.Divider} role="separator" />
    </div>
  );
};

export default Divider;