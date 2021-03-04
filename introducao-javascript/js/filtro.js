var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
  console.log(this.value);
  var pacientes = document.querySelectorAll(".paciente"); //retorna todos os pacientes em array

  if(this.value.length > 0){
    // console.log("tem algo digitado");
    for(var i = 0; i < pacientes.length; i++){
      var paciente = pacientes[i];
      var tdNome = paciente.querySelector(".info-nome"); //buscando dentro da paciente buscamos uma td com a classe info-nome
      var nome = tdNome.textContent;

      if(nome != this.value){               //se o nome for diferente do que está sendo digitado
        paciente.classList.add("invisivel");
      }else{
        paciente.classList.remove("invisivel");
      }
    }
  }else{
    for (var i = 0; i < pacientes.length; i++){
      var paciente = pacientes[i];
      paciente.classList.remove("invisivel");
    }
  }

})
