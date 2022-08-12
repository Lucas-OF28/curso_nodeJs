const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine("handlebars", exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

const obj = [
  {
    name: "bolsa",
    category: "utilitario"
  },
  {
    name: "sapato",
    category: "utilitario"
  },
  {
    name: "cachorro",
    category: "cachorro"
  },
  {
    name: "melancia",
    category: "fruta"
  }
]

app.get('/obj/:id', (req, res) =>{
  const obj = objs[parseInt(req.params.id) - 1]

  res.render('obj', {obj})
})

app.get('/', (req, res) => {
  
  res.render('home', {obj})
})

app.listen(3000, () => {
  console.log("Rodando na porta 3000")
})