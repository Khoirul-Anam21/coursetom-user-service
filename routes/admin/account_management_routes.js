const accountRoute = require('express').Router();

accountRoute.get('/students') // tambah query
accountRoute.put('/bio') // update biodata

module.exports = accountRoute;