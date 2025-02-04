const express = require("express");
const router = express.Router();
const getNumberProperties = require("./classifyNumber");

router.get("/classify-number", async (req, res) => {
  const { number } = req.query;

  if (!number || isNaN(number)) {
    return res.status(400).json({ number, error: true });
  }

  const result = await getNumberProperties(number);
  res.json(result);
});

module.exports = router;
