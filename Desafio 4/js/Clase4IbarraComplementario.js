function calcularIVA(precio){
    let precioConIva= ((precio * 0.21) + precio);
    return precioConIva;
}

let PrecioProducto= parseInt(prompt('Cuanto sale el producto que compro?'));
let precioAumentado= calcularIVA(PrecioProducto);

if ( precioAumentado !== undefined ){
console.log("El precio final del producto con IVA es: " + precioAumentado);
}