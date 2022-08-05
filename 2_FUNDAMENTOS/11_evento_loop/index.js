function a(){
  console.log("Executando a()")
}

function b(){
  console.log("Executando b()")
  c()
  a()
}

function c(){
  console.log("Executando c()")
}

b()
