const chalk = require("chalk")
const inquirer = require('inquirer')

inquirer
  .prompt([
    {
      name: 'nome',
      message: "Qual o nome?",
    },
    { 
      name: 'idade',
      message:"Qual a idade"
    }]
  )
  .then((answers) => {
    if(!answers.nome || !answers.idade){
      throw new Error("Nome e idade obrigatórios")
    }
    const response = `O nome é ${answers.nome} e ele tem ${answers.idade} anos`
    console.log(chalk.bgYellow.black(response))
  })
  .catch((err) => {
    console.log(err)
  })