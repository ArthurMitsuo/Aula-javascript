var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event){
  var alvoEvento = event.target;
  var paiDoAlvo = alvoEvento.parentNode //TR = paciente que queremos remover
  paiDoAlvo.classList.add("fadeOut");

  setTimeout(function(){
    paiDoAlvo.remove();
  }, 500);
});



// pacientes.forEach(function(paciente){
//   paciente.addEventListener("dblclick", function(){
//     console.log("Fui clicado com um duplo click");
//     this.remove();
//   })
// })
