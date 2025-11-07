const numero = document.getElementById("contador");
let contador = 0

document.getElementById("aumentar").addEventListener('click', function(){
    contador++;
    numero.textContent = contador;
    if(contador >= 10) {
        numero.style.color = "blue";
    }
});

document.getElementById("disminuir").addEventListener('click', function(){
    numero.textContent = contador;
    contador--;
});
