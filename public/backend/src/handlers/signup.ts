import executeQuery from "../db";
import { comparePassword } from "../utils/password";
import { createToken } from "../utils/token";

export const logIn = async (req, res) => {
  const query = `SELECT password, userName, userId FROM "User" WHERE userName = $1`;
  const values = [req.body.userName];
  const rows = await executeQuery(query, values);
  if (rows.length == 0) {
    res.json({ message: "User not found", signedIn: false }).status(401).end();
    return;
  }
  const isValid = await comparePassword(req.body.password, rows[0].password);
  if (!isValid) {
    res
      .json({
        message: "wrong password",
        signedIn: false,
        password: false,
      })
      .status(401)
      .end();
    return;
  }
  const token = await createToken(rows[0]);
  res.json({ token, message: "signed In", signedIn: true });
};
