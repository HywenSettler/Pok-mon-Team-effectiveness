const mongoose = require("mongoose");

const pokemonSchema = new mongoose.Schema({
    number: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    type: {
        type: mongoose.Mixed,
        required: true
    }
})

const Pokemon = mongoose.model('Pokemon', pokemonSchema, 'Pokemon');

module.exports = { Pokemon };