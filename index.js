const express = require('express');
const mongoose = require('mongoose');
const Pokemon = require('./routes/Pokemon');

mongoose.connect("mongodb+srv://Hywen:Porygon->2@cluster0.wq6h7qg.mongodb.net/Pokédex?retryWrites=true&w=majority&appName=Cluster0").then().catch(error => {
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
})

const app = express();

app.use('/api/v1', Pokemon);

const PORT = process.env.port || 3000;
app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT);
});