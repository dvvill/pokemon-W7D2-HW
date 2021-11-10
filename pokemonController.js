const express = require('express');

const router = express.Router()
const pokemon = require('../models/pokemon');


router.get('/', (req, res) => {
    res.json(pokemon);
})

router.post('/', (req, res) => {
    console.log('hiting post route')
    console.log('req.body', req.body)
    pokemon.push(req.body);

    res.json(pokemon)
})

router.delete('/:id', (req, res) => {
    console.log('deleting pokemon')
    pokemon.splice(req.params.id, 1);
    res.json(pokemon)
})



router.get('/:id', (req, res) => {
    res.json(pokemon[req.params.id]);
})


module.exports = router;