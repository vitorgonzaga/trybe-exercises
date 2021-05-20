let notaCandidato = Math.ceil(Math.random()*100);

console.log(`Nota do candidato: ${notaCandidato}`);

if (notaCandidato >= 80) {
  console.log("Parabéns, você foi aprovada(o)!");
}
else if (notaCandidato > 60 && notaCandidato < 80) {
  console.log("Você está na lista de espera.");
}
else {
  console.log("Você foi reprovada(o).");
}