import jwt from "jsonwebtoken";

export const EncodeToken = (email, user_id) => {
  const KEY = "124-ABC-XAaaay";
  const EXPIRE = "24h";
  const PAYLOAD = { email, user_id };
  return jwt.sign(PAYLOAD, KEY, { expiresIn: EXPIRE });
};

export const DecodeToken = (token) => {
  try {
    const KEY = "124-ABC-XAaaay";
    return jwt.verify(token, KEY);
  } catch (error) {
    return null;
  }
};
