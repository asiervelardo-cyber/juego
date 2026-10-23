const BARAJA = [];
let guardado = parseInt(localStorage.getItem("dinero"));
let dinero = isNaN(guardado) ? 1000 : guardado;
 
function guardarDinero(){
    localStorage.setItem("dinero", dinero);
    let el = document.getElementById("dinero");
    if(el) el.textContent = dinero;
}
 
//apuesta.html y juego.html
window.onload = function(){
 
    guardarDinero();
 
    let boton = document.getElementById("apostar");
    if(!boton) return; // en juego.html no hay botón de apostar
 
    boton.onclick = function(){
        let cantidad = document.getElementById("cantidad").value;
        let error = document.getElementById("error");
 
        if(!/^[1-9]\d*$/.test(cantidad)){
            error.textContent = "Introduce un número válido mayor que cero.";
            document.getElementById("cantidad").classList.add("is-invalid");
        }else if(parseInt(cantidad) > dinero){
            error.textContent = "No tienes suficiente dinero.";
            document.getElementById("cantidad").classList.add("is-invalid");
        }else{
            dinero -= parseInt(cantidad);
            localStorage.setItem("apuesta", cantidad);
            guardarDinero();
            window.location.href = "juego.html";
        }
    }
}