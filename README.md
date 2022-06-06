this is a Restaurant Webapp build using React,
Node Backend and Expressjs based code setup to be integrated with MongoDB, which has
Seprated Routes,
Multi Middlewares,
Clean and Manageable code

Getting Started

//

Running project(all commands from root of project directory)

npm install : to install bacend dependencies

npm run client-deps : to install frontend dependencies

npm run dev : to run the server 

//

Files Structure

/controllers -- API handlers/exontrollers for different routes, containing CRUD operations/verbs like PUT, GET, POST, etc
/coon.js -- contains db connection URL
/routes -- Entry points for CRUD verbs where based on verb, handler/controller action is executed
/models -- Objects containing validation for data, like name:String etc
app.js -- File responsible for calling routes and their corresponding handlers/controllers
server.js -- main file responsible for running server 
Package.json -- file containing npm dependencies and one start script

//

Deployment : Not yet ready


