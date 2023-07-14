import jwt from 'jsonwebtoken';

const protect = (req, res, next) => {
  const bearer = req.headers.authrization;
  if (!bearer) {
    res
      .json({
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
        authorized: false,
        message: "not authorized",
      })
      .status(401)
      .end();
    return;
  }
  try {
    const payload = jwt.verify(token,process.env.JWT_PASSWORD);
    req.user = payload;
    next()
  } catch (error) {
    res
    .json({
      authorized: false,
      message: "not authorized",
      error,
    })
    .status(401)
    .end();
  return;
    
  }
};
