document.getElementById("aumentar").addEventListener('click', function(){
    let contador = 1
    const limite = 20;
    const numero = document.getElementById("contador");


    const intervalo = setInterval(function(){
        numero.textContent = contador;
        if(contador >= 10) {
            numero.style.color = "black";
        }else{
            numero.style.color = "red";
        }
        contador++;
        if(contador > limite){
            clearInterval(intervalo);
        }

    }, 1000);

});
