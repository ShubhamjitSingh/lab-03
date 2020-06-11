const router = require('express').Router();

//rosorce routes
(require('./routes/pages')(router));

module.exports = router;