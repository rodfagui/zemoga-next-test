import type { NextPage } from "next";
import Head from "next/head";

import HeroSection from "@/components/rule-of-thumb/HeroSection";
import BannerSection from "@/components/rule-of-thumb/BannerSection";
import PreviousRulingsSection from "@/components/rule-of-thumb/PreviousRulingsSection";
import SubmitNameSection from "@/components/rule-of-thumb/SubmitNameSection";
import Divider from "@/components/rule-of-thumb/Divider";
import Footer from "@/components/rule-of-thumb/Footer";

const Home: NextPage = () => {
  const homeStyles = {
    backgroundColor: "white",
    width: "1440px",
    marginLeft: "auto",
    marginRight: "auto",
    paddingBottom: "8rem",
  };

  return (
    <div style={homeStyles}>
      <Head>
        <title>Rule of thumb</title>
        <meta
          name="description"
          content="Browse a huge list of celebrities and vote them!"
        />
      </Head>
      <HeroSection />
      <BannerSection />
      <PreviousRulingsSection />
      <SubmitNameSection />
      <Divider />
      <Footer />
    </div>
  );
};

export default Home;
