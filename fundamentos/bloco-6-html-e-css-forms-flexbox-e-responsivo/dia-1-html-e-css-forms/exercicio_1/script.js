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
  if (elemInput.value.length === 0) {
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
  // A variavel 
}


function fnStartValidation() {
// Declara um objeto/dictionary, uma especie de de-para para os diferentes tipos de input
// existem os inputs tipo texto, select, radio e date, logo, a declaracao do objeto poderá ficar assim:  
  let dicValidationStrategies = {
    default: fnValidationPadrao,
    date: fnDateValidation,
    select: fnSelectValidation,
    radio: fnRadioValidation
  }  
  // Percorrer o objeto iteravel inputs identificando o tipo de cada elemento para enfim chamar a funcao de validacao por tipo de input
  // utilizando um loop for/in no objeto inputs declarado mais acima
  for (let inputName in inputs)  {
    let elemInput = document.querySelector('[name=${inputName}]');
    let strInputType = inputs[inputName].type;
    // Se existir a propriedade type no objeto inputs declarado lá em cima chama a função correspondente ao match no dictionary
    // declarado dentro dessa função
    if (strInputType) {
      let strValidationFunctionByType = dicValidationStrategies[strInputType];
      return strValidationFunctionByType(elemInput, inputName);
    }     
    return dicValidationStrategies.default(elemInput, inputName);
  }    

}

function fnHandleSubmit(event) {
  // Anulando o comportamento padrão do input type submit do html;
  // Isso é necessário para que procedimentos sejam realizados antes desse comportamento padrão;
  // Essa é a funcionalidade do preventDefault;
  event.preventDefault();
  fnStartValidation();
}

window.onload = function() {
 fnCreateStateOptions();
 let btnSubmit = document.querySelector('#submit-button');
 btnSubmit.addEventListener('click', fnHandleSubmit);
}