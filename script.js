const numero = document.getElementById("contador");
let contador = 1
const limite_max = 20;
const limite_min = 1;

document.getElementById("aumentar").addEventListener('click', function(){
    const intervalo = setInterval(function(){
        numero.textContent = contador;
        if(contador >= 10) {
            numero.style.color = "red";
        }
        contador++;
        if(contador > limite_max){
            clearInterval(intervalo);
        }
    }, 1000);
});

document.getElementById("disminuir").addEventListener('click', function(){
    const intervalo = setInterval(function(){
        numero.textContent = contador;
        if (contador > limite_min){
            contador--;
        }   
    }, 1000); 
});
