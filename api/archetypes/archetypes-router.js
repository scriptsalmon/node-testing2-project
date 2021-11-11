const router = require('express').Router();

const Archetypes = require('./archetypes-model');

router.get('/', (req, res, next) => {
    Archetypes.get()
      .then(data => {
          res.status(200).json(data)
      })
      .catch(next)
})

router.get('/:id', (req, res, next) => {
    Archetypes.getById(req.params.id)
      .then(data => {
          res.status(200).json(data)
      })
      .catch(next)
})

router.post('/', (req, res, next) => {
    const { archetype_name, archetype_description } = req.body;
    if(!archetype_name || !archetype_description){
        next({ status: 400, message: "name and description required" })
    } else {
        Archetypes.add(req.body)
          .then(data => {
              res.status(201).json(data)
          })
          .catch(next);
    }
})

module.exports = router;