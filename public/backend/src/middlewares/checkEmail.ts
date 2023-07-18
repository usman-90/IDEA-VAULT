import executeQuery from "../db";

export const checkUsernameAndEmail = async (req, res, next) => {
  const query = `select username,email from "User" where username = $1 or email=$2`;
  const values = [req.body.userName, req.body.email];
  const  row  = await executeQuery(query, values);
  console.log(row)
  if (row.length == 0) {
    next();
  } else {
    res
      .json({
        message: "username already taken",
      })
      .status(401)
      .end();
  }
};
