//arquivo responsável para tudo que tem relação com o form
//botão de adicionar paciente, na form
var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){
  event.preventDefault();

  var form = document.querySelector("#formAdiciona");
  //extraindo informações do paciente do form
  var paciente = obtemPacienteFormulario(form);

  //cria a tr e td do paciente
  var pacienteTr = montaTr(paciente);

  //variável recebe o retorno da função para avaliar a length da string retornada, validando o paciente
  var erros = validaPaciente(paciente);

  if(erros.length > 0 ){
    var mensagemErro = document.querySelector("#mensagemErro");
    mensagemErro.textContent = erros;
    return;
  }

  //adicionando paciente na tabela
  var tabela = document.querySelector("#tabela-pacientes");

  tabela.appendChild(pacienteTr);

  form.reset();

});

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

//função retorna string vazia se verdadeira e string não vazia se falsa
function validaPaciente(paciente) {

  var erros = [];

  if(!validaPeso(paciente.peso))  return erros.push("O peso é inválido!");
  if(!validaAltura(paciente.altura)) return erros.push("A altura é inválida!");

  return erros;
}
