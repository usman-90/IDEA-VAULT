import executeQuery from "../../db";

export const getreview = async (req, res) => {
  const query = `SELECT DISTINCT ON ("User".userid )Image.path,"User".name,Feedback.feedbackid ,Feedback.reviewBody, Feedback.starCount FROM "User" JOIN Image ON "User".userid = Image.userid JOIN Feedback ON "User".userid = Feedback.userid ORDER BY "User".userid, Feedback.feedbackId LIMIT 6;`;
  const rows = await executeQuery(query, []);
  res.json({ data: rows, message: "ok" }).status(200).end();
};
