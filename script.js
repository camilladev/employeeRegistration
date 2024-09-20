let valores = [];
let idCount = 1;

function addValor(){
  let valorInput = document.getElementById("valorInput").value;
  
  if( valorInput){
    valores.push({id: idCount++, nome:valorInput});
    document.getElementById("valorInput").value="";
  }
  else{
    alert("Porfavor insira um valor")
  }
}
