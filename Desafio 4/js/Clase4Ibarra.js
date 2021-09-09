function consumoAlcohol(precio,cuotas){
    if (cuotas === 0) {
        console.log("usted no puede elegir esa cantidad de cuotas, tiene que ser mayor a 0")
        return;
    } else if (cuotas > 18 ){
        console.log("usted no puede tener mas cuotas que 18!")
        return;
    }

    let precioCuotas= (precio / cuotas);
    return precioCuotas;
}

let PrecioProd= parseInt(prompt('Cuanto sale el producto que compro?'));
let cantCuotas= parseInt(prompt('En cuantas cuotas quiere pagar el producto?'));


let precioAPagar= consumoAlcohol(PrecioProd,cantCuotas);

if ( precioAPagar !== undefined ){
console.log("Usted Pagara " + precioAPagar + " por mes");
}