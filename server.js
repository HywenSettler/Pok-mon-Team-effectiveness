const mongoose = require('mongoose');
const { Pokemon } = require("./models/Pokemon");

mongoose.connect("mongodb+srv://Hywen:Porygon->2@cluster0.wq6h7qg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then().catch(error => {
  console.log("Error in connecting to MongoDB");
})

mongoose.connection.on('connecting', () => {
  console.log("Connecting to DB");
});

mongoose.connection.on('connected', () => {
  console.log("Connected to DB");
});

mongoose.connection.on('disconnecting', () => {
  console.log("Connecting to DB");
});

mongoose.connection.on('disconnected', () => {
  console.log("Connecting to DB");
});

async function x() {
  let m = await Pokemon.findOne();

  console.log(m);
}

x();