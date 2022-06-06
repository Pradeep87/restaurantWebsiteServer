const express = require("express");
const app = express();
const swaggerUi = require('swagger-ui-express'),
swaggerDocument = require('./swagger.json');

// imports routes
const categoryRoutes = require("./routes/categoryRoutes/categoryRoutes");
const foodRoutes = require("./routes/foodItem/foodRoute");
const subCategories = require("./routes/categoryRoutes/subCategoryRoutes");


app.use(express.json());

app.use("/api/admin/category", categoryRoutes);
app.use("/api/admin/subcategory", subCategories);
app.use("/api/admin/food",foodRoutes)

//serving swagger UI link
app.use(
  '/api-docs',
  swaggerUi.serve, 
  swaggerUi.setup(swaggerDocument)
);


module.exports = app;
