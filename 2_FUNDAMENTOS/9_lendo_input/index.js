const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
})


readline.question("Qual a sua linguagem preferida? : ", (lenguage) =>{
  if(lenguage === "Php"){
    console.log("Porcaria")
  }else{
  console.log(`A minha linguagem preferida é: ${lenguage}`)}
  readline.close()
})
