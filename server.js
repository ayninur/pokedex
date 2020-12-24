// Bring in Express Library
const express = require('express');
// Create application object
const app = express();
//Set our listener post
const PORT = process.env.PORT || 3000; //default to 3000 unless one is defined elsewhere
const pokemonRouter = require("./controllers/pokedex.js")
// const pokemon = require('./models/pokemon')
const methodOverride = require('method-override');

/////////////////////////////////////////
// MIDDLEWARE (Functions that run before our routes)
/////////////////////////////////////////

app.use(express.static("public")); //Sets Public Folder to be Served Statically (for images/CSS Files)
app.set("view engine", "jsx"); //Tells Express that are View Engine will use .jsx files
app.engine("jsx", require("express-react-views").createEngine()); //Sets our View engine
app.use(express.urlencoded({ extended: true }));
//Read data sent from forms
app.use(methodOverride("_method"));


// ROUTES AND ROUTERS
app.get("/", (req, res) => {
  res.send("this is a test route to make sure server is running");
});
app.use('/pokemon', pokemonRouter);


// Start the Server Listener
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
