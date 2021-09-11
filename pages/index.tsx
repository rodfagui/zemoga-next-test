import type { NextPage } from "next";
import Head from "next/head";

import HeroSection from "@/components/rule-of-thumb/HeroSection";
import BannerSection from "@/components/rule-of-thumb/BannerSection";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Rule of thumb</title>
        <meta
          name="description"
          content="Browse a huge list of celebrities and vote them!"
        />
      </Head>
      <HeroSection />
      <BannerSection />
    </>
  );
};

export default Home;
