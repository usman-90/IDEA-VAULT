import { hashPassword } from "../utils/password";
import { createToken } from "../utils/token";
import { database_connection } from "../db";

export const signup = async (req, res) => {
  try {
    const collections = await database_connection(["Users"]);
    const userCollection = collections[0];
    const password = await hashPassword(req.body.password);
    const userInsertion = await userCollection.insertOne({
      userName: req.body.userName,
      password,
      name: req.body.name,
      lastName: req.body.lastName,
      email: req.body.email,
      createdAt: new Date(),
      visibleIdeas: [],
      upvotedIdeas: [],
      downvotedIdeas: [],
    });
    if (!userInsertion) {
      res.json({ message: "User not created" }).status(401).end();
      return;
    }
    const user = await userCollection.findOne({
      $or: [{ email: req?.body?.email }, { userName: req?.body?.userName }],
    });
    const token = await createToken(user);
    res
      .json({
        token: token,
        user: {
          userId: user?._id,
          email: user?.email,
          username: user?.userName,
          name: user?.name,
          lastName: user?.lastName,
        },
        message: "successful",
      })
      .status(200)
      .end();
  } catch (error) {
    console.error(
      "Error occurred while checking username and email...\n",
      error,
    );
  }
};
