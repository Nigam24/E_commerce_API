import jwt from 'jsonwebtoken'
const secret = "Vips"

 export const  setUser = (user) => {
    return jwt.sign( {

    _id : user._id,
    email: user.email,
  }, 
secret
);
}