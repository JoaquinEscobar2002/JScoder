// La idea es un programa para seleccionar un alimento de un menu, si quieres papas fritas y que devuelva el valor y lo que lleva

//INICIO
//variables que voy a usar

let hamburg = 0;
let hamburgDoble = 0;
let hamburgVeggy = 0;
let papasFritas = 0;
let pedir = 0;
let precioPapas = 0;
let precioTotal = 0;
let sumarPapas = false;
let seguirComprando = false;

//funcion para sumar papas
function papas (cantPapas){
    sumarPapas = confirm("¿Queres papas con tu hamburguesa?")
    if (sumarPapas) {
        papasFritas = papasFritas + cantPapas;
    }
}

// ciclo de compra
do {

    //que quiere pedir
    pedir = parseInt(prompt("¿Que hamburguesa te gustaria pedir? 1. Hamburguesa, 2. Hamburguesa doble, 3. Hamburguesa vegana"))

    if (pedir === 1){
        //sumar hamburguesas simples
        cuantas = parseInt(prompt("¿cuantas te gustaria pedir?"));
        hamburg = hamburg + cuantas;
        let precio = hamburg * 200
        precioTotal = precioTotal + precio
        papas(cuantas)

    } else if (pedir === 2){
        //sumar hamburguesas dobles
        cuantas = parseInt(prompt("¿cuantas te gustaria pedir?"));
        hamburgDoble = hamburgDoble + cuantas;
        let precio = hamburgDoble * 250
        precioTotal = precioTotal + precio
        papas(cuantas)

    } else if (pedir === 3){
        //sumar hamburguesas veganas
        cuantas = parseInt(prompt("¿cuantas te gustaria pedir?"));
        hamburgVeggy = hamburgVeggy + cuantas;
        let precio = hamburgVeggy * 300
        precioTotal = precioTotal + precio
        papas(cuantas)

    } else {
        //ninguna opcion valida
        alert("¡opcion no valida!")
    }

    //sumar mas productos
    seguirComprando = confirm("¿Queres agregar otro producto?");
} while (seguirComprando)

//calcular el precio hamburguesas + papas
precioPapas = papasFritas * 40;
precioTotal = precioTotal + precioPapas;
alert(`Su pedido es ${hamburg} hamburguesas simples, ${hamburgDoble} hamburguesas dobles, ${hamburgVeggy} hamburguesas veganas y ${papasFritas} acompañamientos de papas fritas`);
alert(`El total es: $${precioTotal}`);
