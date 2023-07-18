import executeQuery from "../../db";

export const setVisiblity = async (req, res) => {
  const query = `INSERT INTO Visiblity (ideaId,userId) SELECT $1,$2 WHERE NOT EXISTS (SELECT 1 FROM Visiblity WHERE ideaId = $1 AND userId=$2) RETURNING *`;
  const values = [req.body.ideaId, req.body.userId];
  const row = await executeQuery(query, values);
  res
    .json({
      message: "ok",
    })
    .status(200)
    .end();
};

export const checkVisiblity = async (req, res) => {
  const query = `SELECT userId FROM Visiblity WHERE ideaId =$1`;
  const values = [req.params.ideaId];
  const row = await executeQuery(query, values);
  res
    .json({
      data: row,
      message: "ok",
    })
    .status(200)
    .end();
};

export const checkSpecificVsiblity = async (req, res) => {
  const query = `select userId,ideaId from visiblity where userId = $1 and ideaId = $2`;
  const values = [req.params.userid, req.params.ideaid];
  const row = await executeQuery(query, values);
  res
    .json({
      row,
      message: "ok",
    })
    .status(200)
    .end();
};
