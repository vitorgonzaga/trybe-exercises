let statusAprovacao = "informe o status";

switch (statusAprovacao) {
  case "aprovada":
    console.log(`Parabéns! Você foi aprovada(o)!`);
    break;

  case "lista":
    console.log(`Você está na lista de espera`);
    break;
  
  case "reprovada":
    console.log(`Você está na lista de espera`);
    break;

  default:
    console.log(`não se aplica`);

}