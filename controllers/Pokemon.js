const { Pokemon } = require("../models/Pokemon");

const getPokemonInfo = async function (req, res) {
    console.log("Over here")
    const pokemon = await Pokemon.findOne({"name": "Pidgeot"});
    return res.send({ status: 200, pokemon });
}

module.exports = { getPokemonInfo };