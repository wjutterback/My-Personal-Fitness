const router = require('express').Router();

router.get('/', (req, res) => {
  console.log('router got');
});

module.exports = router;
