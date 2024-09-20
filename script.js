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
