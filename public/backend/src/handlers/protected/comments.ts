import executeQuery from "../../db";

export const postComments = async (req, res) => {
  const query = `INSERT INTO Comments (userId, ideaId , content) values ($1, $2,$3)`;
  const values = [req.user.userId, req.params.ideaid, req.body.content];
  const row = await executeQuery(query, values);
  res
    .json({
      message: "ok",
    })
    .status(200)
    .end();
};
export const likeComment = async (req, res) => {
  const query = `UPDATE Comments SET likesCount = likesCount + 1 WHERE commentId = $1`;
  const row = await executeQuery(query, [req.params.commentid]);
  res
    .json({
      message: "ok",
    })
    .status(200)
    .end();
};

export const dislikeComment = async (req, res) => {
  const query = `UPDATE Comments SET dislikeCount = dislikesCount + 1 WHERE commentId = $1`;
  const row = await executeQuery(query, [req.params.commentid]);
  res
    .json({
      message: "ok",
    })
    .status(200)
    .end();
};

export const postReply = async (req, res) => {
  const query = `INSERT INTO Reply (commentId ,userId, replyContent) VALUES ($1,$2,$3)`;
  const values = [req.params.commentid, req.user.userId, req.body.replyContent];
  const row = await executeQuery(query, values);
  res
    .json({
      message: "ok",
    })
    .status(200)
    .end();
};

export const deleteComment = async (req, res) => {
  const query = `DELETE FROM Comments WHERE commentId = $1`;
  const row = await executeQuery(query, [req.params.commentid]);
  res
    .json({
      message: "ok",
    })
    .status(200)
    .end();
};
