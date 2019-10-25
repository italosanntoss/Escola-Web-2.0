</script>
<script type="text/javascript">
  let nome = "Ítalo Santos";
  console.log(nome);

  let nota = 10;

  if (nota >= 7) {
    console.log("Aprovado");
  } else {
    console.log("Reprovado");
  }

  let i = 0;
  while (i <= 10) {
    console.log(i);
    i++;
  }

  for (i=0; i <=10; i++){
    console.log(i);
  }

  let nomes = ["João", "Pedro", "Chico"];

  for (nome of nomes){
    console.log(nome);
  }

  for (posicao in nomes){
    console.log(nomes[posicao]);
    console.log(posicao);
  }

  function somar(v1,v2){
    let resultado = v1+v2;
    return resultado;
  }

  let exibirValor = function(valor) {
    console.log(valor);
  }

  let r = somar(5,8);
  console.log(r);

  let aluno = {
    nome:"Maria da Paz",
    matricula:"210945711013",
    cpf:"100.200.300-50",
    endereco:{
      logradouro:"Buraco do Afonso",
      complemento:"Perto do chapéu",
      cep:"58230-000",
      numero:"64",
      bairro:"Centro"
    }
  };

  console.log(aluno.nome);
  console.log(aluno.endereco.complemento);


</script>
