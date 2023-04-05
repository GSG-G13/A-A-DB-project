const express = require('express');

const router = express.Router();

const routers = require('./router');

router.use(routers);

module.exports = router;
