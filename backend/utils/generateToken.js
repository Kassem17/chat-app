import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });

  // setting the token as a cookie :and make it secure
  res.cookie("jwt", token, {
    httpOnly: true, // prevent xss cross-site scripting attack
    sameSite: "strict", // prevent csrf cross-site request forgery attack
    maxAge: 15 * 24 * 60 * 60 * 1000, // ms
    secure: process.env.NODE_ENV !== "development",
  });
};

export default generateTokenAndSetCookie;
// openssl rand -base64 32 : gave a jwt secret key
