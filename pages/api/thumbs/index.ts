import type { NextApiRequest, NextApiResponse } from "next";
import { ObjectId } from "mongodb";
import { connectToDatabase } from "libs/db";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "PATCH") {
    const id = req.body.id;
    const newVotes = req.body.votes;
    const client = await connectToDatabase();
    const db = client.db();
    
    const thumbsCollection = db.collection("thumbs");

    const thumb = await thumbsCollection.findOne({ _id: new ObjectId(id) });

    if (!thumb) {
      res.status(404).json({ message: "Thumb not found!" });
      client.close();
      return;
    }

    const result = await thumbsCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { votes: newVotes, lastUpdated: Date.now() } }
    );

    client.close();

    res.status(200).json({ message: "Thumb changed!" });
  }
}
