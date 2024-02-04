import { comparePassword } from "../utils/password";
import { createToken } from "../utils/token";
import { database_connection } from "../db";

export const logIn = async (req, res) => {
  try {
    const collections = await database_connection(["Users"]);
    const userCollection = collections[0];

    const user = await userCollection.findOne({
      $or: [
        { email: req?.body?.email ?? "" },
        { userName: req?.body?.userName ?? "" },
      ],
    });

    if (!user) {
      res
        .json({ message: "User not found", signedIn: false })
        .status(401)
        .end();
      return;
    }

    const isValid = await comparePassword(req.body.password, user?.password);

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
    const token = await createToken(user);
    res.json({
      token,
      user: {
        userId: user?._id,
        email: user?.email,
        userName: user?.userName,
        name: user?.name,
        lastName: user?.lastName,
      },
      message: "ok",
      signedIn: true,
    });
  } catch (error) {
    console.error(
      "Error occurred while checking username and email...\n",
      error,
    );
  }
};
