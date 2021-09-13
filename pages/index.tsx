import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useContext, useEffect } from "react";

import HeroSection from "@/components/rule-of-thumb/HeroSection";
import BannerSection from "@/components/rule-of-thumb/BannerSection";
import PreviousRulingsSection from "@/components/rule-of-thumb/PreviousRulingsSection";
import SubmitNameSection from "@/components/rule-of-thumb/SubmitNameSection";
import Divider from "@/components/rule-of-thumb/Divider";
import Footer from "@/components/rule-of-thumb/Footer";

import { connectToDatabase } from "../libs/db";
import { thumb, thumbsContextType, thumbsDispatchContextType } from "../types/thumbs";
import { thumbsContext, thumbsDispatchContext } from "contexts/thumbs.context";

type HomeProps = {
  thumbs: Array<thumb>;
};

const Home: NextPage<HomeProps> = (props: HomeProps) => {
  const homeStyles = {
    backgroundColor: "white",
    width: "1440px",
    marginLeft: "auto",
    marginRight: "auto",
    paddingBottom: "8rem",
  };

  const { thumbs: thumbsProps } = props;

  const thumbs = useContext<thumbsContextType>(thumbsContext);
  const dispatch = useContext<thumbsDispatchContextType>(thumbsDispatchContext);

  useEffect(() => {
    dispatch({ type: "SET", thumbs: thumbsProps });
  }, [thumbsProps]);

  const updateThumbVotes = async (
    id: string,
    votes: { positive: number; negative: number }
  ): Promise<{ message: string }> => {
    const response = await fetch("/api/thumbs", {
      method: "PATCH",
      body: JSON.stringify({ id, votes }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
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
      <PreviousRulingsSection
        thumbs={thumbs}
        updateThumbVotes={updateThumbVotes}
      />
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
