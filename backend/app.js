require('dotenv').config()
const express = require("express");
const app = express();
const swaggerUi = require('swagger-ui-express'),
swaggerDocument = require('./swagger.json');

// imports routes
const errorMiddleware=require("./middelwares/error")
const categoryRoutes = require("./routes/categoryRoutes/categoryRoutes");
const subCategories = require("./routes/categoryRoutes/subCategoryRoutes");
const foodItemRoutes = require("./routes/foodItem/foodItemRoute");


app.use(express.json());

app.use("/api/admin/category", categoryRoutes);
app.use("/api/admin/subcategory", subCategories);
app.use("/api/admin/foodItem",foodItemRoutes)

app.use(errorMiddleware)
//serving swagger UI link
app.use(
  '/api-docs',
  swaggerUi.serve, 
  swaggerUi.setup(swaggerDocument)
);


module.exports = app;
