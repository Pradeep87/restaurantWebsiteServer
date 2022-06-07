const mongoose = require("mongoose");

// const connectDatabase = () => {
//   mongoose
//     .connect("mongodb://localhost:27017/restaurantWebsite", {
//       useNewUrlParser: true,
//     })
//     .then((data) => {
//       console.log(`mongodb connected with server ${data.connection.host}`);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };



const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://proponent:2022%40Prop@cluster0.5ptqsn9.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

// const connectDatabase = () =>{

//   client.connect(err => {
//     // (err) => {
//       if(err) console.log(err) 
//       else console.log("mongdb is connected");
//     //  }
//     // const collection = client.db("restaurantWebsite").collection("categor");
//     // perform actions on the collection object
//     // client.close();
//   });
  
// }

const connectDatabase = () =>{
try {
  // Connect to the MongoDB cluster
   mongoose.connect(
    uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 },
    () => console.log("Mongoose is connected")
  );

} catch (e) {
  console.log("could not connect");
}
}

module.exports = { connectDatabase };
