// Usando o objeto abaixo, faça os exercícios a seguir:

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.

console.log(`Bem vinda ${info.personagem}!`);

// Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console.

info['recorrente'] = 'Sim'

console.log(info);

// Faça um for/in que mostre todas as chaves do objeto.

for (let key in info) {
  console.log(`Chave: ${key}`);
}

// Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto.

for (let key in info) {
  console.log(`Chave: ${key} Valor: ${info[key]}`);
}

// Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves.

let info_2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: "Sim"
}

// imprimindo os valores dos 2 objetos

// for (let key in info) {  
//   for (let key_2 in info_2) {
//     console.log(`${info[key]} e ${info_2[key_2]}`);
//   }
// }

for (let key in info) {  
  if (info_2[key] == "Sim" && info[key] == "Sim") {
    console.log("Ambos recorrentes // Atenção para essa última linha");
  } else {
    console.log(`${info[key]} e ${info_2[key]}`);  
  }    
}