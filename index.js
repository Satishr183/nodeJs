const express = require("express"); //For using route using express
const mongoose = require("mongoose"); //For creating Models and Making connection with mongodb(database)
const userRoutes = require("./routes/task"); //import route
const url = "mongodb://localhost/Test";

const app = express();
const PORT = 9000;

mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;

con.on("open", () => {
  console.log("connected...");
});

app.use(express.json());

app.use("/task", userRoutes);

app.listen(PORT, () => {
  console.log(`Server started on port: http://localhost:${PORT}`);
});
