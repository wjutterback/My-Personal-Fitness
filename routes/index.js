const router = require('express').Router();
const apiRoutes = require('./api/apiroute');
const routes = require('./routes');
router.use('/', routes);
router.use('/api', apiRoutes);
module.exports = router;
