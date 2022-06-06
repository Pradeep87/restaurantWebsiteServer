const express = require("express");
const app = express();

// imports routes

const categoryRoutes = require("./routes/productRoutes/ctegoryRoutes");
const foodRoutes = require("./routes/productRoutes/foodRoute");

app.use(express.json());

app.use("/api/admin", categoryRoutes);
app.use("/api/admin", foodRoutes);

app.get("/", (req, res) => {
  res.send("<h1> hello from the server side </h1> ");
  console.log("hello from the server side");
});

module.exports = app;
