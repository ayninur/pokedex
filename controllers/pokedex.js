// Get Route from Express
const { Router } = require("express");
// create new router for our pokedex views
const router = Router();
// Import our starter data or pokedex router
const pokemon = require("../models/pokemon.js");
// bc forms only allow get&post requests (this is delete)
const methodOverride = require('method-override');

//////////////////////
// Routes
//////////////////////

// Index -shows our list
router.get('/', (req, res) => {
    // res.send('Hello from pokedex')
    res.render('pokemon/index.jsx', {pokemon})
});


// Delete
router.delete("/:index", (req, res) => {
    pokemon.splice(req.params.index, 1);
    res.redirect("/pokemon/");
});
// Create
router.post("/", (req, res) => {
    pokemon.push(req.body.pokemon);
    res.redirect("/pokemon/");
});
// New
router.get("/new", (req, res) => {
    res.render("pokemon/new.jsx");
});
// Show (always last)
router.get('/:index', (req, res) => {
    res.render('pokemon/show.jsx', {
        pokemon: pokemon[req.params.index], //grabs specific data but these are still variables that need a lil logic
        index: req.params.index,
    });
});


module.exports = router;
