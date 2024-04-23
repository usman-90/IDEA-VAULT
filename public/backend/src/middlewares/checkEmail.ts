import { database_connection } from "../db";

export const checkUsernameAndEmail = async (req, res, next) => {
  try {
    const collections = await database_connection(["Users"]);
    const userCollection = collections[0];
    const user = await userCollection.findOne({
      $or: [{ email: req?.body?.email }, { userName: req?.body?.userName }],
    });
    console.log(req.body);
    console.log(user, "middleware", user === null);
    if (user) {
      res
        .json({
          message: "Username or Email already taken",
        })
        .status(401)
        .end();
        return
    }
    next();
  } catch (error) {
    console.error(
      "Error occurred while checking username and email...\n",
      error,
    );
  }
};
