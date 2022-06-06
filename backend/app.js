const express = require("express");
const app = express();

// imports routes

const categoryRoutes = require("./routes/categoryRoutes/ctegoryRoutes");
const foodRoutes = require("./routes/foodItem/foodRoute");
const subCategories = require("./routes/categoryRoutes/subCategoryRoutes");


app.use(express.json());

app.use("/api/admin/category", categoryRoutes);
app.use("/api/admin/subcategory", subCategories);
app.use("/api/admin", foodRoutes);

app.get("/", (req, res) => {
  res.send("<h1> hello from the server side </h1> ");
  console.log("hello from the server side");
});

module.exports = app;
