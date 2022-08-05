const http = require('http')

const port = 3000

const server = http.createServer((req,res) => {
  res.statusCode = 200
  res.setHeader('Contenty-Type', 'text/html')
  res.end('<h1>Olá, esse é o meu primeiro server HTML!</h1>', 'utf-8')
})

server.listen(port, () => {
  console.log("Rodando na porta 3000")
})