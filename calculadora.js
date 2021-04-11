let disp1 =document.querySelector("#tela1");
let disp2 =document.querySelector("#tela2");
let carac;
let comp,comp1,comp2;

//input via botão da interface
window.addEventListener("onclick",inserirb);
    function inserirb(a){
    carac = a;
    calc(a);
    }
//input via teclado
window.addEventListener("keydown",inserirt);
    function inserirt(a){
    carac = a.key;
    calc(carac);
    }

// calculadora 
 function calc(){
   if( carac == 1 
   || carac == 2 
   || carac == 3 
   || carac == 4 
   || carac == 5 
   || carac == 6 
   || carac == 7 
   || carac == 8 
   || carac == 9 
   || carac == 0
   || carac=="+"
   || carac=="-"
   || carac=="*"
   || carac=="/"
   || carac=="."){
    
       //inclusão de ponto ao inicio dos valores e correção do display ao iniciar a inserção.
        if(disp1.innerHTML.length == 1 && disp1.innerHTML == 0 && carac !=="."){
        disp1.innerHTML="";
    }
    //expressão da tela 1
  disp1.innerHTML +=  carac;
  }
  //contador de caracteres ate o ultimo operador
    if (carac=="+"
     || carac=="-"
     || carac=="*"
     || carac=="/")
     {
         comp1 = disp1.innerHTML.length-1;
     }
 


  //função apagar
  if(carac == "Backspace"){
  disp1.innerHTML = disp1.innerHTML.substring(0,disp1.innerHTML.length -1); 
        if (disp1.innerHTML == ""){
        disp1.innerHTML=0;
        } 
  }
  //função zerar calculadora.
  if(carac == "Delete"){
      disp1.innerHTML =0;
      comp1 = comp2 = 0;
  }
//função igual ou calcular
  if(carac == "=" || carac == "Enter" ){
         //repetição da ultima operação com o ultimo resultado se o resultado anterior for igual a operação anterior.
        if (eval(disp1.innerHTML) == disp2.innerHTML && disp1.innerHTML.length > 2 ){            
            disp1.innerHTML = disp2.innerHTML + disp1.innerHTML.substr(comp1);            
            comp2 = disp2.innerHTML.length;
            comp1= comp2
        }
 //valor a ser impresso na tela de resultado        
  disp2.innerHTML =  eval(disp1.innerHTML);
  
  }  
}



