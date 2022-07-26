import express from "express";
import foodModel from "../models/food.js";

const app = express();

app.get("/foods", async (req, res) => {
  const foods = await foodModel.find({});
  try {
    res.send(foods);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post("/food", async (request, response) => {
  const food = new foodModel(request.body);
  try {
    await food.save();
    response.send(food);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.patch("/food/:id", async (req, res) => {
  try {
    await foodModel.findByIdAndUpdate(request.params.id, request.body);
    await foodModel.save();
    res.send(food);
  } catch (err) {
    res.status(500).send(error);
  }
});

app.delete("/food/:id", async (req, res) => {
  try {
    const food = await foodModel.findByIdAndDelete(req.params.id);

    if (!food) res.status(404).send("No item found");
    res.status(200).send();
  } catch (error) {
    res.status(500).send(error);
  }
});

export default app;
