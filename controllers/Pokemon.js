const { Pokemon } = require("../models/Pokemon");

const getPokemonInfo = async function (req, res) {
    const pokemon = await Pokemon.findOne({number: 18});
    return res.send({ status: 200, pokemon });
}

module.exports = { getPokemonInfo };