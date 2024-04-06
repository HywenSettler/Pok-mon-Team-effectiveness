const express = require('express');
const mongoose = require('mongoose');
const Pokemon = require('./routes/Pokemon');

const app = express();

app.use('api/v1', Pokemon);

const PORT = 3000; 
app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
});