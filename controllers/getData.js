const { Pokemon } = require("../models/Pokemon");

const getPokemonInfo = async function(){
    console.log("Over here")
    const pokemon = await Pokemon.findOne({"number": 18});
    return pokemon;
}

module.exports = { getPokemonInfo };