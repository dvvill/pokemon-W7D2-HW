const express = require('express');
const router = require('./controllers/pokemonController');

const PORT = 4000;

const app = express();

  app.use(express.urlencoded({extended: false}));
  app.use(express.json());
  const pokemonController = require('./controllers/pokemonController');

  app.use('/pokemon', pokemonController)

  router.put('/:idOfPokemonArray', (req, res) => {
      pokemon[req.params.idOfPokemonArray] = req.body;
      res.send(pokemon[req.params.idOfPokemonArray]);
  })


  app.listen(PORT, () => {
    console.log('we live')
})