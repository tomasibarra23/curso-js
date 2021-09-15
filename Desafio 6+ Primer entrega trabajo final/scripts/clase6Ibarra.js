let precioTotal = 0;
class Bebida {
    constructor(tipo,marca, variedad, precio) {
        this.tipo = tipo;
        this.marca = marca;
        this.variedad = variedad;
        this.precio = precio;
    }

    consultarPrecio(){
        console.log("El precio del producto " +this.marca + " " + this.variedad + " es: " + this.precio)
    };
    
}
class Cerveza extends Bebida {

    precioPorPack(){

        let precioCaja = this.precio * 6 * 0.75
        console.log("El Precio por Pack de Cerveza " + this.marca + " " + this.variedad +  " es de " + this.precio + " y contiene 6 unidades ");
    };
    
}
class Vino extends Bebida {

    precioPorCaja(){

        let precioCaja = this.precio * 6 * 0.85
        console.log("El Precio por Caja del Vino " + this.marca + " " + this.variedad + " es de " + this.precio + " y contiene 6 unidades ");

    };
    
}

class Gin extends Bebida {

    precioPorCaja(){
        let precioCaja = this.precio * 4 * 0.9
        console.log("El Precio por Caja del Gin: " + this.marca + " es de " + this.precio + " y contiene 4 unidades ");
    };
    
}

class Cliente {
    constructor(nombre, apellido, edad, suscripcion) {

        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.suscripcion = suscripcion;
    }

    registrarCliente(nombre,apellido,edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;

        new Cliente(nombre,apellido,edad);

    };

    suscribirse(){
        // Aca iria el metodo de suscribirse, si hubiera uno
    };

    
}

class Suscriptor extends Cliente {
    renovarSuscripcion(){
        if (Cliente.suscripcion === false){
            let rtaSub = alert("Su suscripción ha caducado, desea renovarla? Si/No");
            if (rtaSub =="Si"){
                suscribirse();
            }

        } 
    };
}
const array = [];


function nuevaBebida(d){
    precio1 = parseInt(d.getAttribute("precio"));
    switch (d.getAttribute("tipo")) {
        case 'Cerveza':
            const cervezaAgregada = new Cerveza(d.getAttribute("tipo"), d.getAttribute("marca"), d.getAttribute("Variedad"), precio1);
            cervezaAgregada.consultarPrecio();
            agregar(cervezaAgregada);
          break;
        case 'Vino':
            const vinoAgregado = new Vino(d.getAttribute("tipo"),d.getAttribute("marca"), d.getAttribute("Variedad"), precio1);
            vinoAgregado.consultarPrecio();
            agregar(vinoAgregado);
            break;
        case 'Gin':
            const ginAgregado = new Gin(d.getAttribute("tipo"),d.getAttribute("marca"), d.getAttribute("Variedad"), precio1);
            ginAgregado.consultarPrecio();
            agregar(ginAgregado);
        break; 
    }
    totalBebidas(d);
}
function agregar(bebidaAgregada){
    array.push(bebidaAgregada);
    console.log(array.length);
    console.log(array)
}
function totalBebidas(d){
    var precioTotal = 0;

   array.forEach(d => {
       precioTotal = precioTotal + d.precio
       
   });
    console.log("El precio total de su carrito es de: " + precioTotal);

}

// Funcion que calcula el precio de las cervezas que existen
function precioCervezas(d){
let custResponse = prompt("usted quiere saber los precios de las cervezas? si/no");
custResponse.toLocaleLowerCase();

if (custResponse === "si"){
    var precioCerv = 0;

   array.forEach(d => {
       let tipobebida = d.tipo
       if (tipobebida === "Cerveza"){
       let precioCerv = d.precio
       let marcaCerv = d.marca
       let variedadCerv = d.variedad
       console.log("El precio de la cerveza " + marcaCerv +" "+ variedadCerv + " es de: " + precioCerv)
    }
   });
    

}
}


// Funcion que calcula el precio de los vinos que existen
function precioVinos(d){
    let custResponse2 = prompt("usted quiere saber los precios de los vinos? si/no");
    custResponse2.toLocaleLowerCase();
    
    if (custResponse2 === "si"){
        var precioVino = 0;
    
       array.forEach(d => {
           let tipobebida = d.tipo
           if (tipobebida === "Vino"){
           let precioVino = d.precio
           let marcaVino = d.marca
           let variedadVino = d.variedad
           console.log("El precio del vino " + marcaVino +" "+ variedadVino + " es de: " + precioVino)
        }
       });
        
    
    }
    }

// Funcion que calcula el precio de los pack de cerveza que existen
function precioCervezasPack(d){
    let custResponse3 = prompt("usted quiere saber los precios de las cervezas? si/no");
    custResponse3.toLocaleLowerCase();
    
    if (custResponse3 === "si"){
        var precioCerv = 0;
    
       array.forEach(d => {
           let tipobebidaPack = d.tipo
           if (tipobebidaPack === "Cerveza"){
           let precioPack = d.precio * 6 * 0.75
           let marcaCervPack = d.marca
           let variedadCervPack = d.variedad
           console.log("El Precio por Pack de Cerveza " + marcaCervPack + " " + variedadCervPack +  " es de " + precioPack + " y contiene 6 unidades ");
        }
       });
        
    
    }
    }
    

// Funcion que calcula el precio de las cajas de vinos que existen
function precioVinosPack(d){
    let custResponse4 = prompt("usted quiere saber los precios de los vinos? si/no");
    custResponse4.toLocaleLowerCase();
    
    if (custResponse4 === "si"){
        var precioVinoPack = 0;
    
       array.forEach(d => {
           let tipobebidaPack = d.tipo
           if (tipobebidaPack === "Vino"){
           let precioVinoPack = d.precio * 6 * 0.85
           let marcaVinoPack = d.marca
           let variedadVinoPack = d.variedad
           console.log("El Precio por Caja del Vino " + marcaVinoPack + " " + variedadVinoPack + " es de " + precioVinoPack + " y contiene 6 unidades ");
        }
       });
        
    
    }
    }

// Funcion que calcula el precio total de los productos que se agregaron al carrito
function precioCarrito(d){
let custResponse5 = prompt("Y le gustaría conocer el precio total de su carrito?");
custResponse5.toLocaleLowerCase();

if (custResponse5 === "si"){
    console.log(totalBebidas(Bebida));

}

}