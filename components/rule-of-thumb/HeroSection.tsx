import HeaderSection from "./HeaderSection";
import MainPanel from "./MainPanel";
import ClosingCounterBar from "./ClosingCounterBar";
import classes from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <div className={classes.HeroSection}>
      <HeaderSection />
      <MainPanel />
      <ClosingCounterBar />
    </div>
  );
};

export default HeroSection;
