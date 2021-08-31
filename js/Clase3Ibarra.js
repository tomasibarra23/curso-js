
/*Le pedimos al usuario dos datos, un numero, y un numero para que se sume cada iteracion del for
 hacemos una esctructura repetitiva de for del 1 al 10 con un incremental de uno por cada iteracion
 sumandole en cada una el numeroDos */
numeroUno = parseInt(prompt("Ingrese un numero"));
numeroDos = parseInt(prompt("Ingrese el numero que quiere que se sume por cada iteracion"))

for (contador = 1 ; contador<= 10 ; contador++){

    numeroUno = numeroUno + numeroDos;
    console.log("El numero en la iteracion numero " + contador + " es: " + numeroUno);
}

/*le pedimos al usuario que ingrese una cadena de texto que evaluamos despues en un while si es la palabra ESC
en caso de que sea distinta le concatenamos su longitud, cuando la palabra es ESC sale del while */
let longitudPalabra;
textoUno = prompt("Ingrese una cadena de texto");

while(textoUno != "ESC") {

    longitudPalabra = textoUno.length;
    textoConcat = textoUno + "." +  longitudPalabra;
    console.log("Su texto ingresado fue: " + textoUno + " Y su texto concatenado con su longitud es: " + textoConcat);

    textoUno = prompt("Como su palabra fue distinto de ESC, por favor ingrese otra palabra");

}
/* Se le pide al usuario un input de cuantas veces se repita la palabra hola, usamos ese numero y lo usamos en una estructura de control
personalmente creo que hubiera sido mejor un For pero lo hice a forma de ejemplo para usar el do...while*/
let textoHola = parseInt(prompt("Ingrese la cantidad de veces que quiere que se repita la palabra hola"));
let contadorHolas = 1;
do {
    console.log("hola");
    contadorHolas++
}while(contadorHolas <= textoHola);

