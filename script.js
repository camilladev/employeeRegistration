let valores = [];
let idCount = 1;

function addValor(){
  const valorInput = document.getElementById("valorInput").value;
  
  if( valorInput.trim() !==""){
    constnewListItem = document.createElement('li');

    newListItem.textContent = valorInput;

    valores.push({ id: idCount++, valor: valorInput });

    document.getElementById('listValores').appendChild(newListItem);
    document.getElementById("valorInput").value="";
  }
  else{
    alert("Porfavor insira um valor");
  }
}

function deletarValor(id){
    for(let i = 0; i < valores.length; i++){
        if(valores[i].id === id){
            valores.splice(i,1);
            break;
        }
    }  
}

function editarValor(id){
    for(let i = 0; i < valores.length; i++){
        if(valores[i].id ===id){
            let novoValor = prompt("Edite o valor", valores[i].valor);
            if(novoValor){
                valores[i].valor = novoValor
            }
            break;
        }
    }
}