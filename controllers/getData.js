const client = require("../server");

let data = await client.db('Pokédex');

console.log(data);