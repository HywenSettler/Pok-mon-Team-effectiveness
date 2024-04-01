const express = require('express');
const Connection = require('./server')

const instance = new Connection();

const app = express();

app.use('api/v1',getData);