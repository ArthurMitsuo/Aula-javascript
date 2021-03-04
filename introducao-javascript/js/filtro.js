var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
  console.log(this.value);
  var paciente = document.querySelectorAll(".paciente"); //retorna todos os pacientes em array
  for(var i = 0; i < paciente.length; i++){
    var paciente = pacientes[i];
    var tdNome = paciente.querySelector(".info-nome"); //buscando dentro da paciente buscamos uma td com a classe info-nome
    var nome = paciente.textContent;
  }

})
