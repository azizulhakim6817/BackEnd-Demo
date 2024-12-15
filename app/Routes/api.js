import express from "express";

const router = express.Router();

// Route for user login OTP
router.get("/", (req, res) => {
  res.send("This is Home Page");
});

export default router;
