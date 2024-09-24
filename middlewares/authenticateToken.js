import { verifyAccessToken } from "../utils/verifyAccessToken.js";
import { authHeader } from "../constants/auth.js";

export const authenticateToken = function (req, res, next) {
  console.log('authenticatetToken')

  if(!req.headers && !req.headers.authorization.startsWith('bearer')){
    return res.status(400).json({message:'unauthorized '})
  }
  const token = req.headers.authorization.split(' ')[1];
  console.log("token", token);


  if (!token) {
    return res.sendStatus(401);
  }

  const result = verifyAccessToken(token);
  let userId = result.data.userId

  req.userId = userId;
  if (!result.success) {
    console.log(result.error);
    return res.status(403).json({ error: "Invalid Request!" });
  }


  next();
};

// import { verifyAccessToken } from "../utils/verifyAccessToken.js";
// // import { authHeader } from "../constants/auth.js";

// export const authenticateToken = function (req, res, next) {
 
//   console.log('authenticateToken started ');
//   const token = req.headers.authorization.split(' ')[1]
//   console.log('token: ', token);
//   //console.log("token", token);
//   // const token = authHeader && authHeader.split(' ')[1];

//   if (!token) {
//     return res.sendStatus(401).json({message:'Unauthorized '});
//   }

//   const result = verifyAccessToken(token);
//   console.log(result)
//   let userId = result.data.userId;
//   req.userId = userId;

//   if (!result.success) {
//     console.log(result.error);
//     return res.status(403).json({ error: "Invalid Request!" });
//   }

//   req.user = result.data;
//   next();
// };