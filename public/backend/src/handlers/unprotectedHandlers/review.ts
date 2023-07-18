import executeQuery from "../../db";

export const getreview = async (req, res) => {
  const query = `SELECT  feedbackId, feedback.userId, starCount, reviewBody, name FROM feedback, "User" WHERE feedback.userId = "User".userId LIMIT 6`;
  const rows = await executeQuery(query, []);
  res.json({ data: rows, message: "ok" }).status(200).end();
};
