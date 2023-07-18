import executeQuery from "../../db";

export const postFeedbacks = async (req, res) => {
  const query = `INSERT INTO feedback (userId, reviewBody, starCount ) VALUES ($1,$2, $3)`;
  const values = [req.user.userId, req.body.reviewBody, req.body.starCount];
  const row = await executeQuery(query, values);
  res
    .json({
      message: "Ok",
    })
    .status(200)
    .end();
};
