const express = require("express");
const app = express();

// imports routes
const categoryRoutes = require("./routes/categoryRoutes/categoryRoutes");
const foodRoutes = require("./routes/foodItem/foodRoute");
const subCategories = require("./routes/categoryRoutes/subCategoryRoutes");


app.use(express.json());

app.use("/api/admin/category", categoryRoutes);
app.use("/api/admin/subcategory", subCategories);
app.use("/api/admin", foodRoutes);

module.exports = app;
