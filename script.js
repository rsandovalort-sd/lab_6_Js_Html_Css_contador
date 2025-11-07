const numero = document.getElementById("contador");
let contador = 0
const limite_max = 20;
const limite_min = 0;

document.getElementById("aumentar").addEventListener('click', function(){
    const intervalo = setInterval(function(){
        numero.textContent = contador;
        if(contador >= 10) {
            numero.style.color = "blue";
        }
        contador++;
        if(contador > limite_max){
            clearInterval(intervalo);
        }
    }, 500);
});

document.getElementById("disminuir").addEventListener('click', function(){
    const intervalo = setInterval(function(){
        numero.textContent = contador;
        if(contador <= 10) {
            numero.style.color = "black";
        }
        if (contador <= limite_min){
            clearInterval(intervalo);
        }else{
            contador--;
            numero.textContent = contador;
        }  
    }, 500); 
});
