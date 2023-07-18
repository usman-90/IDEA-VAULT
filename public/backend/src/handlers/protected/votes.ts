import executeQuery from "../../db";

export const downVote = async (req, res) => {
  const query = `INSERT INTO Vote (userId, ideaId, voteType ) VALUES ($1,$2,'downVote') ON CONFLICT (ideaId,userId) DO UPDATE SET voteType = 'downVote'`;
  const values = [req.user.userId, req.params.ideaid];
  const row = executeQuery(query, values);
  res.status(200).json({
    message: "ok",
  });
  
};
export const upVote = async (req, res) => {
  const query = `INSERT INTO Vote (userId, ideaId, voteType ) VALUES ($1,$2,'upVote') ON CONFLICT (ideaId,userId) DO UPDATE SET voteType = 'upVote'`;
  const values = [req.user.userId, req.params.ideaid];
  const row = executeQuery(query, values);
  res.status(200).json({
    message: "ok",
  });
  
};
