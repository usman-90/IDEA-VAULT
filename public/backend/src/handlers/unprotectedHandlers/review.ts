import { database_connection } from "../../db";

export const getreview = async (req, res) => {
  try {
    const collections = await database_connection(["Feedback", "User"]);
    const feedbackCollection = collections[0];
    const userCollection = collections[1];
    const feedback = await feedbackCollection
      .aggregate([
        { $match: { shown: true } },
        { $sort: { date: -1 } },
        { $limit: 6 },
      ])
      .toArray();
    feedback.forEach(async (element) => {
      element.user = await userCollection.findOne(
        { userid: element.userid },
        { projection: { _id: 0, name: 1, email: 1, profileImg: 1 } },
      );
    });

    res.json({ feedback, message: "ok" }).status(200).end();
  } catch (error) {
    console.error("Error occurred while getting categories...\n", error);
  }

  //  const query = `SELECT DISTINCT ON ("User".userid )Image.path,"User".name,Feedback.feedbackid ,Feedback.reviewBody, Feedback.starCount FROM "User" JOIN Image ON "User".userid = Image.userid JOIN Feedback ON "User".userid = Feedback.userid ORDER BY "User".userid, Feedback.feedbackId LIMIT 6;`;
};
