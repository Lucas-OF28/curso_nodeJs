const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const hbs = exphbs.create({
  partialsDir: ["views/partials"],
})

app.engine("handlebars", exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/dashboard', (req,res)=>{

  const itens = ["a","b","c"]

  res.render('dashboard', {itens})
})

app.get('/blog', (req, res) => {
  const posts = [
    {
      title: "Aprender node",
      category: "Javascript",
      body: "Artigo",
      comments: 4
    },
    {
      title: "Aprender PHP",
      category: "PHP",
      body: "Artigo",
      comments: 3
    },
    {
      title: "PYTON",
      category: "PYTON",
      body: "Artigo",
      comments: 4
    },
    
  ]
  res.render('blog', {posts})
})

app.get('/post', (req, res)=>{
  const post = {
    title: "Aprender node",
    category: "Javascript",
    body: "Artigo",
    comments: 4
  }

  res.render('blogpost', {post})
})

app.get('/', (req,res) =>{

  const user ={
    name: "Lucas",
    surname: "Fabris",
    age: 21,
  }

  const palavra = "palavra"

  const auth = true

  const approved = false

  res.render('home',  {user: user, palavra, auth, approved})
})

app.listen(3000, ()=>{
  console.log("App funcionando!")
})