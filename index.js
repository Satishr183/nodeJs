const express = require("express"); //For using route using express
const mongoose = require("mongoose"); //For creating Models and Making connection with mongodb(database)
const product = require("./models/product");
const userRoutes = require("./routes/task"); //import route
const url = "mongodb://localhost/Test";

const app = express();
const PORT = 9000;

mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;

con.on("open", () => {
  console.log("connected...");
});

product.aggregate([
    {
      $lookup: {
        from: "categories",
        localField: "categoryId",
        foreignField: "categoryId",
        as: "orders_info",
      },
    },
    // Deconstructs the array field from the
    // input document to output a document
    // for each element
    {
      $unwind: "$orders_info",
    },
  ])
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });

app.use(express.json());

app.use("/task", userRoutes);

app.listen(PORT, () => {
  console.log(`Server started on port: http://localhost:${PORT}`);
});
