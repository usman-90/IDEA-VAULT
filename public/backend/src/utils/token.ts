import jwt from "jsonwebtoken";

export const createToken = async (user) => {
    console.log(user)
  const token = await jwt.sign(
    { userName: user.username, userId: user.userid },
    process.env.JWT_PASSWORD
  );

  return token;
};
