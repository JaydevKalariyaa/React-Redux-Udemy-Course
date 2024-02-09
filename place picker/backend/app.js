import fs from "node:fs/promises";

import bodyParser from "body-parser";
import express from "express";

const app = express();

app.use(express.static("images"));
app.use(bodyParser.json());

// CORS

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // allow all domains
  res.setHeader("Access-Control-Allow-Methods", "GET, PUT");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  next();
});

app.get("/places", async (req, res) => {
  try {
    const fileContent = await fs.readFile("./data/places.json");

    const placesData = JSON.parse(fileContent);

    res.status(200).json({ places: placesData });
  } catch (error) {
    res.status(500).json(error.message);
  }
});

app.get("/user-places", async (req, res) => {
  const fileContent = await fs.readFile("./data/user-places.json");

  const places = JSON.parse(fileContent);

  res.status(200).json({ places });
});

app.put("/user-places", async (req, res) => {
  try {
    const { places } = req.body; // Assuming req.body is the stringified JSON

    await fs.writeFile("./data/user-places.json", JSON.stringify(places));

    res.status(200).json({ message: "User places updated!" });
  } catch (error) {
    console.error("Error writing user places:", error);
    res.status(500).json(error.message);
  }
});

// 404
app.use((req, res, next) => {
  if (req.method === "OPTIONS") {
    return next();
  }
  res.status(404).json({ message: "404 - Not Found" });
});

app.listen(3000);
