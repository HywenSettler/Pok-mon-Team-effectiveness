const { Pokemon } = require("../models/Pokemon");

const getPokemonInfo = async function (req, res) {
    const pokemon = await Pokemon.find({});
    return res.send({ status: 200, pokemon });
}

module.exports = { getPokemonInfo };