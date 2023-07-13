import executeQuery from "../db";
import { hashPassword } from "../utils/password";
import { createToken } from "../utils/token";

export const signup = async (req, res) => {
  const query = `INSERT INTO "User" (userName , password , name , lastName , email ) VALUES ($1, $2, $3, $4 ,$5) RETURNING userName,userId`;
  const data = {
    userName: req.body.userName,
    password: await hashPassword(req.body.password),
    name: req.body.name,
    lastName: req.body.lastName,
    email: req.body.email,
  };
  const rows = await executeQuery(query, [
    data.userName,
    data.password,
    data.name,
    data.lastName,
    data.email,
  ])
  const token = await createToken(rows[0]);
  console.log(rows);
  res.json({ token: token, message: "successful" }).status(200).end();
};
