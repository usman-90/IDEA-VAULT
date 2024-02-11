import jwt from "jsonwebtoken";

const protect = async (req, res, next) => {
  const bearer = req.headers.authorization;
  if (!bearer) {
    res
      .json({
        one: 1,
        authorized: false,
        message: "not authorized",
      })
      .status(401)
      .end();
    return;
  }
  const [, token] = bearer.split(" ");
  if (!token) {
    res
      .json({
        one: 2,

        authorized: false,
        message: "not authorized",
      })
      .status(401)
      .end();
    return;
  }
  try {
    const payload = await jwt.verify(token, process.env.JWT_PASSWORD);
    req.user = payload;
    next();
  } catch (error) {
    res
      .json({
        one: 3,

        authorized: false,
        message: "not authorized",
        error,
      })
      .status(401)
      .end();
    return;
  }
};

export default protect;
