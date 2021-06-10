let selectEstados = document.querySelector('#select-estado');
let arrUfs = ['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MS','MT','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO']

for (let uf of arrUfs) {
  let elOption = document.createElement('option');
  elOption.value = uf;
  elOption.innerHTML = uf;
  selectEstados.appendChild(elOption);
}