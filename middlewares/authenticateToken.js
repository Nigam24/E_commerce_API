import { verifyAccessToken } from "../utils/verifyAccessToken.js";
import { authHeader } from "../constants/auth.js";

export const authenticateToken = function (req, res, next) {
  // const token = req.headers[`'${authHeader}'`];
  // const token = authHeader.split(' ')[1];
  const token = req.headers[authHeader];
  console.log("token", token);
  // const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.sendStatus(401);
  }

  const result = verifyAccessToken(token);

  if (!result.success) {
    console.log(result.error);
    return res.status(403).json({ error: "Invalid Request!" });
  }

  req.user = result.data;
  next();
};
