let display = document.querySelector("#tela1");

let valor = String();

window.addEventListener("keypress",calc,false);
function calc(a){
 if(a.key === "1" 
  ||a.key === "2" 
  ||a.key === "3" 
  ||a.key === "4" 
  ||a.key === "5" 
  ||a.key === "6" 
  ||a.key === "7" 
  ||a.key === "8" 
  ||a.key === "9" 
  ||a.key === "0"){

     valor = valor + a.key;
     display.value = valor;
     
     
  }
  
  if(a.key === "=" || a.key === "Enter"){
    
   
  }
  
}

