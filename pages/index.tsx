import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { ReactNode } from "react";
import { ParsedUrlQuery } from "querystring";

import HeroSection from "@/components/rule-of-thumb/HeroSection";
import BannerSection from "@/components/rule-of-thumb/BannerSection";
import PreviousRulingsSection from "@/components/rule-of-thumb/PreviousRulingsSection";
import SubmitNameSection from "@/components/rule-of-thumb/SubmitNameSection";
import Divider from "@/components/rule-of-thumb/Divider";
import Footer from "@/components/rule-of-thumb/Footer";

import { connectToDatabase } from "../libs/db";
import { thumb } from "../types/thumbs";

type HomeProps = {
  thumbs: Array<thumb>
};

const Home: NextPage<HomeProps> = (props: HomeProps) => {
  const homeStyles = {
    backgroundColor: "white",
    width: "1440px",
    marginLeft: "auto",
    marginRight: "auto",
    paddingBottom: "8rem",
  };

  const { thumbs } = props;

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
      <PreviousRulingsSection thumbs={thumbs} />
      <SubmitNameSection />
      <Divider />
      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const client = await connectToDatabase();
  const db = client.db();

  const thumbsCollection = db.collection("thumbs");

  const thumbs = await thumbsCollection.find().toArray();

  client.close();

  return {
    props: {
      thumbs: thumbs.map((thumb) => {
        return {
          id: thumb._id.toString(),
          name: thumb.name,
          description: thumb.description,
          category: thumb.category,
          picture: thumb.picture,
          lastUpdated: thumb.lastUpdated,
          votes: thumb.votes,
        };
      }),
    },
    revalidate: 1,
  };
};

export default Home;
