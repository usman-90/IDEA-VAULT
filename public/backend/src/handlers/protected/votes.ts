import executeQuery from "../../db";

export const downVote = async (req, res) => {
  const query = `INSERT INTO Vote (userId, ideaId, voteType ) VALUES ($1,$2,'downVote') ON CONFLICT (ideaId,userId) DO UPDATE SET voteType = 'downVote'`;
  const values = [req.user.userId, req.params.ideaid];
  const row = executeQuery(query, values);
  res
    .json({
      message: "ok",
    })
    .status(200)
    .end();
};
export const upVote = async (req, res) => {
  const query = `INSERT INTO Vote (userId, ideaId, voteType ) VALUES ($1,$2,'upVote') ON CONFLICT (ideaId,userId) DO UPDATE SET voteType = 'upVote'`;
  const values = [req.user.userId, req.params.ideaid];
  const row = executeQuery(query, values);
  res
    .json({
      message: "ok",
    })
    .status(200)
    .end();
};


