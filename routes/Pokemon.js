const express = require('express');
const { getPokemonInfo } = require('../controllers/Pokemon');
const router = express.Router();

router.get('/getPokemonInfo', getPokemonInfo);

module.exports = router;