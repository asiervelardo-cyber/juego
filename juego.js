const BARAJA = [];

//apuesta.html
window.onload = function(){
    document.getElementById("apostar").onclick = function(){
        let cantidad = document.getElementById("cantidad").value;
        let error = document.getElementById("error");
        if(/^[1-9]\d*$/.test(cantidad)){
            window.location.href = "juego.html";
        }else{
            error.textContent = "Introduce un número válido mayor que cero.";
            apuesta.classList.add("is-invalid");
        }
    }
}