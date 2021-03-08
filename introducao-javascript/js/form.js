//arquivo responsável para tudo que tem relação com o form
//botão de adicionar paciente, na form
var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){
  event.preventDefault();

  var form = document.querySelector("#formAdiciona");
  //extraindo informações do paciente do form
  var paciente = obtemPacienteFormulario(form);

  //variável recebe a array criada na função
  var erros = validaPaciente(paciente);
  console.log(erros);

  if(erros.length > 0 ){
    exibeMensagensDeErro(erros);

    return;
  }
  adicionaPacienteNatabela(paciente);

  form.reset();
  document.querySelector("#mensagens-erro").innerHTML = "";

});

function adicionaPacienteNatabela(paciente){
  //cria a tr e td do paciente
  var pacienteTr = montaTr(paciente);
  //adicionando paciente na tabela
  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);
}

function obtemPacienteFormulario(form){
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form. altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  }

  return paciente;
}

function montaTr(paciente){
  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

  return pacienteTr;
}

function montaTd(dado, classe){
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);

  return td;
}


function validaPaciente(paciente) {

  var erros = [];
  if(paciente.nome.length == 0){
    erros.push("O nome não pode ser em branco!")
  }
  if(!validaPeso(paciente.peso)){
    erros.push("O peso é inválido!");
  }
  if(!validaAltura(paciente.altura)){
    erros.push("A altura é inválida!");
  }
  if(paciente.gordura.length == 0){
    erros.push("Gordura não pode ser em branco!")
  }
  if(paciente.peso.length == 0){
    erros.push("Peso não pode ser em branco!")
  }
  if(paciente.altura.length == 0){
    erros.push("Altura não pode ser em branco!")
  }


  return erros;
}

function exibeMensagensDeErro(erros){
  var ul = document.querySelector("#mensagens-erro");
  ul.innerHTML = "";

  erros.forEach(function(erro){   //para cada item do array, vai fazer alguma coisa, que no caso é a função
    var li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
  })
}
