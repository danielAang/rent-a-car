const express = require('express');

const router = express.Router();
const carrosRoutes = require('./carrosRoutes');

module.exports = () => {
  router.use('/carros', carrosRoutes());

  return router;
};
