const router = require('express').Router();

const Archetypes = require('./archetypes-model');

router.get('/', (req, res, next) => {
    Archetypes.get()
      .then(data => {
          res.status(200).json(data)
      })
      .catch(next)
})

module.exports = router;