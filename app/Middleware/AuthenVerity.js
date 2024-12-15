import { DecodeToken } from "../utility/tokenUtility";

export default (req, res, next) => {
  let token = req.headers.token || req.cookies.token; // Get token from headers or cookies

  const decoded = DecodeToken(token); // Decode the token

  if (!decoded) {
    return res.status(401).json({ status: "fail", message: "Unauthorized" });
  }

  const { email, user_id } = decoded;
  req.headers.email = email;
  req.headers.user_id = user_id;

  next();
};
