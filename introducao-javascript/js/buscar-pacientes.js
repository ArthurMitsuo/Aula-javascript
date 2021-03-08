var botaoAdicionar = document.querySelector("#buscar-paciente");

botaoAdicionar.addEventListener("click", function(){
  console.log("Buscando pacientes...");

  var xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

  xhr.addEventListener("load", function(){
    var resposta = xhr.responseText;
    console.log(resposta);
    console.log(typeof resposta);

    var pacientes = JSON.parse(resposta); //retorna como um objeto

    pacientes.forEach(function(paciente){
      adicionaPacienteNatabela(paciente);
    })


  });

  xhr.send();
});
