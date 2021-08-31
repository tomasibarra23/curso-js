let nombre          = prompt("ingrese su nombre");
let apellido        = prompt("ingrese su apellido");
let edad            = parseInt(prompt("ingrese su edad"));
 
console.log("Buenos dias " + nombre + " " +  apellido);

console.log("Nos enteramos que tenes: " + edad + " asi que vamos a jugar con las concatenaciones");

let edadAumentada   = edad + 5;
console.log("si a tu edad le sumamos el entero 5 tu edad seria " + edadAumentada);

let edadConcatenada = edad + "5";
console.log("pero si a tu edad le sumamos el string 5 tu edad seria " + edadConcatenada);
