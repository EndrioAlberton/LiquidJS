 
 
const express = require('express') 
const path = require("path");
const { Liquid } = require('liquidjs')

const app = express()
const engine = new Liquid({root: __dirname, extname: '.liquid'}) 

app.engine('liquid', engine.express()); 
app.set('views', path.resolve(__dirname, "views")); 
app.set('view engine', 'liquid'); 

//Integra o liduidJS na aplicação express 

app.get("/", (req, res) => {
  let data = new Date();
  res.render("mostrarData", {now: data});
});  
 
//Caminho para a view "mostrarData" 

app.listen(3000, () => {
  console.log("Servidor criado com sucesso");
})    

module.exports = app
