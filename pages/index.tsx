import type { NextPage } from "next";
import Head from "next/head";

import HeroSection from "@/components/rule-of-thumb/HeroSection";

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
    </>
  );
};

export default Home;
