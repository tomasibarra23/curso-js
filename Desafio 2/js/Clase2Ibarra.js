numeroUno = parseInt(prompt("Ingrese un numero"));
numeroDos = parseInt(prompt("Ingrese otro numero"));

/* Para este ejemplo comparamos dos numeros ingresados por el usuario, los parseamos y comparamos que el primero sea mayor al segundo
   Con una segunda validacion comprobamos si el segundo es mayor al primero, y por ultimo, el unico caso que nos queda afuera
   Es el caso de que sean iguales por eso lo dejamos abierto con solo un else. */
if (numeroUno > numeroDos) {

    console.log('El primer numero ingresado es mayor que el segundo');
} else if (numeroDos > numeroUno) {
    console.log("El segundo numero ingresado es mayor al primero");
} else {
    console.log("los numeros ingresados son iguales!");

}
/* En este ejemplo comparamos dos cadenas de texto, en caso de que sean iguales se imprime que son iguales,
 y con un elseif hacemos una segunda comparativa por si son distintas e imprimimos ese mensaje. */
cadenaUno = prompt("Ingrese un texto");
cadenaDos = prompt("Ingrese otro texto");

if (cadenaUno !== cadenaDos) {
    console.log("los textos ingresados son distintos");
} else if (cadenaUno == cadenaDos) {
    console.log("Ingresaste dos textos iguales, perfecto");
}

/* Para este caso comparamos que el numero que ingresa el usuario este entre los valores que se le pide al usuario y para cambiar
  hacemos la comparacion dentro de un booleano, si es true, imprime que esta bien, caso contrario, que está mal */
numAComparar= parseInt(prompt("Ingrese un numero entre 50 y 100"));

let comparacionResul = (numAComparar > 49 && numAComparar < 101);

if (comparacionResul == true) {
    console.log("Excelente, ingreso un numero entre los valores indicados");
} else {
    console.log("El numero que ingreso no esta entre los valores indicados");
}
