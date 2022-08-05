//npm install chalk

const chalk = require('chalk')

const nota = 6



if(nota >= 7){
  console.log(chalk.green.bold("Parabéns você esta aprovado"))
}else{
  console.log(chalk.red.bold("Não foi aprovado"))
}
