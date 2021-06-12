function fnCreateStateOptions() {
  let selectEstados = document.querySelector('#select-estado');
  let arrUfs = ['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MS','MT','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO']

  for (let uf of arrUfs) {
    let elOption = document.createElement('option');
    elOption.value = uf;
    elOption.innerHTML = uf;
    selectEstados.appendChild(elOption);
  }
}

// Criando objeto (dictonary) dos campos com os parâmetros a serem validados antes do submit
// Importante ressaltar que o objeto abaixo considera a propriedade "name" das tags htmls
// Ao submeter o formulário será startado o ".preventDefault()" que cancelará o comportamento padrão desse controle, no caso o comportamento padrão do <button type='Submit'> e sim rodar o código/funcao própria.

// 1. Primeiro passo é declarar o objeto iterável com todos os "names"/DOM object e as propriedades a serem validadas antes de submeter/enviar o formulário;

let inputs = {
  name: {
    maxLength: 40,
    required: true,
  },
  email: {
    maxLength: 50,
    required: true
  },
  cpf: {
    maxLength: 11,
    required: true
  },
  address: {
    maxLength: 200,
    required: true
  },
  city: {
    maxLength: 28,
    required: true,
  },
  state: {
    type: 'select',
    required: true,
  },
  houseType: {
    type: 'radio',
    required: true,
  },
  resume: {
    maxLength: 1000,
    required: true,
  },
  role: {
    maxLength: 40,
    required: true,
  },
  roleDescription: {
    maxLength: 500,
    required: true,
  },
  startDate: {
    type: 'date',
    required: true,
  }
}

// **************************************************************************************************************************
// Função para validacao default, ou seja, quantidade de caracteres (maxLength) e se é campo obrigatório (required === true);
// **************************************************************************************************************************
function fnValidationPadrao (elemInput, strName) {
  // obtem o valor que pode ter sido digitado no elemento (propriedade value)
  let strValueTrimmed = elemInput.value.trim(); // trim() retira os espaços em branco no início e final da string
  // Se for campo required, mas estiver em branco retorna falso
  if (inputs[strName].required && strValueTrimmed.length === 0) {
    return false;
  }
  // verifica restricao de quantidade máxima de caracteres
  // Se o elemento possui indicacao de maxLength verifica se o trimmed.length é maior que o value.length
  if (inputs[strName].maxLength && strValueTrimmed.length > inputs[strName].length) {
    return false
  }
  // Se passou pelas verificacoa dos ifs anteriores, ou seja, pela verificacao de required === true e maxLength, retorna true
  return true
};

// **********************************************************************************************************************************
// Função para validacao de data. Verifica se o campo foi informado, pois é obrigatório e utiliza-se de REGEX para validar o formato;
// **********************************************************************************************************************************
function fnDateValidation(elemInput, strName) {
  // Primeiro verifica se o campo foi preenchido;
  if (elemInput.value.length === 0 || elemInput == null || elemInput == undefined) {
    return {
      message: 'A data não foi informada'
    }
  }
  // Para verificacao de formato de data utiliza-se expressão regular (REGEX - 'REG'ular 'EX'pressions)
  let strRegexForRegularDate = '/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i';

  // O operador lógico NOT (!) retorna true quando o falso
  // Nesse caso se o teste retornar true a condição retornará falso, ou seja, não entra no if.
  if (!strRegexForRegularDate.test(elemInput.value)) {
    return {
      message: 'Formato inválido de Data'
    }
  }
  // Se passou pelas verificaçoes acima retorna true;
  return true;
}

// **********************************************************************************************************************************
// Função para validacao das tags select.
// **********************************************************************************************************************************
function fnSelectValidation(elemInput, strName) {
  // A variavel elemInput nesse caso é um document ref. a tag select  
  let option = elemInput.options[elemInput.selectedIndex];
  if (inputs[strName].required && (!option || option.disabled)) {
    return false;
  }
  return true;
}

// **********************************************************************************************************************************
// Função para validacao dos inputs type radio.
// **********************************************************************************************************************************
function fnRadioValidation (elemInput, strName) {
  let checked = document.querySelector(`[name=${strName}]:checked`);

  if (checked === null) {
    return false;
  }
  return true;
}

// Declara um objeto/dictionary, uma especie de de-para para os diferentes tipos de input
// existem os inputs tipo texto, select, radio e date, logo, a declaracao do objeto poderá ficar assim:  
let dicValidationStrategies = {
  default: fnValidationPadrao,
  date: fnDateValidation,
  select: fnSelectValidation,
  radio: fnRadioValidation
}  


function fnStartValidation() {
  
  // Declara objeto/dictionary vazio para preenchimento com os possíveis logs de erro;
  let validationList = {};
  // Percorrer o objeto iteravel inputs identificando o tipo de cada elemento para enfim chamar a funcao de validacao por tipo de input
  // utilizando um loop for/in no objeto inputs declarado mais acima
  for (let inputName in inputs)  { 
    let strInputType = inputs[inputName].type;
    let elemInput = document.querySelector(`[name=${inputName}]`);    
    // Se existir a propriedade type no objeto inputs declarado lá em cima chama a função correspondente ao match no dictionary
    // declarado dentro dessa função
    if (strInputType) {
      let strValidationFunctionByType = dicValidationStrategies[strInputType];
      varResult = strValidationFunctionByType(elemInput, inputName);
      // return blnResult
      validationList[inputName] = varResult;
    }     
    varResult = dicValidationStrategies.default(elemInput, inputName);
    // return 
    validationList[inputName] = varResult;
  }
  
  // Após concluir o for que percorreu todos os elementos do form, realiza o for do objeto validationList;
  let counter = 0;
  let messages = [];

  for (let index in validationList) {
    // Contando quantos erros foram encontrados;
    if (validationList[index] === false) {
      counter += 1;
    }
    // verificando se, além de valores true or false (booleanos), há mensagem de erro. Caso encontre, soma no contador;
    if (validationList[index].message) {
      counter += 1;
      messages.push(validationList[index].message);
    }
  }  
  return {
    ErrorQtd: counter, messages,
  }
}

function fnLimpaDivs(){
  let errorDivs = document.querySelectorAll('.error');
  for (let div of errorDivs) {
    div.remove();
  }
  let dataDiv = document.querySelector('.data');
  if(dataDiv){
    dataDiv.remove();
  }
}

function renderErrorMessages(messages){
  // Appenda uma div com class='error' para cada mensagem verificada na função fnStartValidation;
  let form = document.querySelector('#cv-form');
  let messageDiv = document.createElement('div');
  messageDiv.className = 'error';
  form.prepend(messageDiv);

  for(let message of messages){
    let p = document.createElement('p');
    p.innerText = message;

    messageDiv.appendChild(p);
  }
}

// ******************************************************************************************************
// INICIO DE FUNCOES DESTINADAS AO PREENCHIMENTO DA DIV QUE CONSOLIDA OS INPUTS REALIZADOS NO FORMULARIO
// ******************************************************************************************************
function defaultRendering(input){
  let p = document.createElement('p');
  p.innerText = input.value;

  return p;
}
// ***************************************
function radioRendering(input){
  let p = document.createElement('p');
  let name = input.getAttribute('name');
  let checked = document.querySelector(`[name=${name}]:checked`);

  if(checked){
    p.innerText = checked.value;
  }

  return p;
}
// ***************************************
function selectRendering(input){
  let p = document.createElement('p');
  let option = getSelectedOption(input)
  p.innerText = option.value;
  
  return p;
}
// ***************************************

let renderStrategies = {
  default: defaultRendering,
  radio: radioRendering,
  select: selectRendering,
}

function renderData(){
  
  let dataDiv = document.createElement('div');
  dataDiv.className = 'data';

  let form = document.querySelector('#cv-form');
  form.prepend(dataDiv);

  for(let name in inputs){
    let inputType = inputs[name].type;
    let input = document.querySelector(`[name=${name}]`);

    let element;

    if(renderStrategies[inputType]){
      element = renderStrategies[inputType](input, dataDiv)
    } else {
      element = renderStrategies.default(input, dataDiv)
    }

    dataDiv.appendChild(element);
  }
}

function fnHandleSubmit(event) {
  // Anulando o comportamento padrão do input type submit do html;
  // Isso é necessário para que procedimentos sejam realizados antes desse comportamento padrão;
  // Essa é a funcionalidade do preventDefault;
  event.preventDefault();
  // inicia rotina de verificacao de cada item declarado no objeto (chave:valor) no início do código;
  // O resulto será uma contagem de logs
  let varResultOfValidation = fnStartValidation();
  // Limpa a div anterior resultado da renderizacao do preenchimento anteior;
  fnLimpaDivs();

  if (varResultOfValidation.ErrorQtd === 0) {
    renderData();
  } else {
    varResultOfValidation.messages.unshift('Dados Inválidos');
  }
  renderErrorMessages(varResultOfValidation.messages)
}

function clearFiels(){
  let formElements = document.querySelectorAll('input');
  let textArea = document.querySelector('textarea');
  let div = document.querySelectorAll('.div-curriculum') // Acho que essa linha está sobrando, pois não há nenhuma div com essa classe;
  for (let index = 0; index < formElements.length && index < div.length; index += 1) {
    formElements[index].value = '';
    textArea.value = '';
    div[index].innerText = ''; // Usou innerText ao invés de innerHTML porque o retorno do querySelectorAll é nodeList ao inves de HTMLdocument.
  }
}

window.onload = function() {
  
  fnCreateStateOptions();
  
  let btnSubmit = document.querySelector('#submit-button');
  btnSubmit.addEventListener('click', fnHandleSubmit);

  let clearButton = document.querySelector('#clear-button');
  clearButton.addEventListener('click', clearFiels);


}