require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const PORT = 8080;

const app = express();

app.use(cors());

app.get("/", async (_, res) => {
  try {
    const data = await axios.get(
      `https://api.alerts.in.ua/v1/iot/active_air_raid_alerts/31.json?token=${process.env.SECRET_KEY}`
    );

    res.json(data.data);
  } catch (error) {
    res.json(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
