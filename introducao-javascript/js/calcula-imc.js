// Alterando o título da página
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

//recebendo os pacientes em array e utilizando loop para verificar cada IMC de cada paciente
var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes.length);

for (var i = 0; i < pacientes.length; i++){
  console.log(pacientes[i]);

  var paciente = pacientes[i];

  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;

  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;

  var tdImc = paciente.querySelector(".info-imc");

  var pesoValido = validaPeso(peso);
  var alturaValida = validaAltura(altura);

  if(!pesoValido){
    console.log("Peso inválido");
    pesoValido = false;
    tdImc.textContent = "Peso inválido!";
    paciente.classList.add("pacienteInvalido");
  }
  if(!alturaValida){
    console.log("Altura inválida");
    alturaValida = false;
    tdImc.textContent = "Altura inválida!";
    paciente.classList.add("pacienteInvalido");
  }
  if(alturaValida && pesoValido){
    var imc = calculaImc(peso, altura);
    tdImc.textContent = imc; //função .toFixed() que recebe a quantidade de casas decimais
  }
}

function calculaImc(peso, altura){
  var imc = 0;
  imc = peso / (altura * altura);

  return imc.toFixed(2);
}

function validaPeso(peso){
  if(peso >= 10 && peso <= 400){
    return true;
  }else{
    return false;
  }
}

function validaAltura(altura){
  if(altura >=0.5 && altura <=3.00){
    return true;
  }else{
    return false;
  }
}
