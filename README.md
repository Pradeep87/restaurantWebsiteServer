this is a Restaurant Webapp build using React,
Node Backend and Expressjs based code setup to be integrated with MongoDB, which has
Seprated Routes,
Multi Middlewares,
Clean and Manageable code

Getting Started

//

Running project (all commands from root of project directory)

npm install : to install bacend dependencies

npm run client-deps : to install frontend dependencies

npm run dev : to run the server 

//





Files Structure

/controllers -- API handlers/exontrollers for different routes, containing CRUD operations/verbs like PUT, 
GET, POST, etc

/coon.js -- contains db connection URL

/routes -- Entry points for CRUD verbs where based on verb, handler/controller action is executed

/models -- Objects containing validation for data, like name:String etc

app.js -- File responsible for calling routes and their corresponding handlers/controllers

server.js -- main file responsible for running server 

Package.json -- file containing npm dependencies and one start script
//

Routes and API's

baseUrl: http://localhost:4000

for category 

 post/api/admin/category/new || To create new category 

 get/api/admin/category  || To get all categories 

 put /api/admin/category/:id || To update category 
 delete /api/admin/category || To delete All the category
 delete /api/admin/category/:id  || To delete a category


 post/api/admin/subcategory/new || To create new subcategory 

 get/api/admin/subcategory  || To get all subcategories 

 put /api/admin/subcategory/:id || To update subcategory 
 delete /api/admin/subcategory || To delete All the subcategory
 delete /api/admin/subcategory/:id  || To delete a subcategory





Deployment : Not yet ready


