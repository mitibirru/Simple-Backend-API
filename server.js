import express from "express";
import mongoose from "mongoose";
import foodRouter from "./routes/foodRoutes.js";

const app = express();

app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://mitibirru:mitibirru@cluster0.i01scvw.mongodb.net/sampleBackend?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(foodRouter);

app.listen(3000, () => {
  console.log("Server is running...");
});
