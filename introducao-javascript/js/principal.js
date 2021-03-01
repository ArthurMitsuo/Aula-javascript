var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiroPaciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

var pesoValido = true;
var alturaValida = true;

if(peso <= 0 || peso >= 400){
  console.log("Peso inválido");
  pesoValido = false;
  tdImc.textContent = "Peso inválido!";
}
if(altura <= 0 || altura >= 3.00){
  console.log("Altura inválida");
  alturaValida = false;
  tdImc.textContent = "Altura inválida!";
}
if(alturaValida && pesoValido){
  var imc = peso / (altura * altura);
  tdImc.textContent = imc;
}



console.log(imc);
