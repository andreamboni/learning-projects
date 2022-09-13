document.querySelector(".aloo").addEventListener("click", onClick);

function onClick(event) {
  var outraMensagem = "Também deu certo";
  let mensagem = "Deu certo";

  outraFuncao();

  console.log(mensagem);
  console.log(outraMensagem);

  outraFuncao();
}

mensagem = "Acho que vai dar certo";
outraMensagem = "Vamos ver se vai dar certo";

function outraFuncao() {
  console.log("aloooo");
  console.log(outraMensagem);
  console.log(mensagem);
}
