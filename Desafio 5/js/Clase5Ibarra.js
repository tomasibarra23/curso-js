class Bebida {
    constructor(marca, variedad, precio) {
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



const cervezaBT     = new Cerveza("Postanak","Belgian Tripel" ,185);
const cervezaIR     = new Cerveza("Postanak","Irish Red" ,140);
const cervezaH      = new Cerveza("Postanak","Honey" ,155);
const vinoMeviPN    = new Vino("Mevi","Pinot Noir" ,835);
const vinoBenegasCF = new Vino("Carmela Benegas","Cabernet Franc Rosé" ,470);

const personaUno    = new Cliente("Tomás","Ibarra",24,true);
const personaDos    = new Cliente("Juan Ignacio","Garcia",28,true);
const personaTres   = new Cliente("Joaquina","Millán",24,false);
const personaCuatro = new Cliente("Cristobal","Odo",25,false);



let rtaCli = prompt("usted quiere saber los precios de las cervezas? si/no");

rtaCli.toLocaleLowerCase();

if (rtaCli === "si"){
    console.log(cervezaBT.consultarPrecio());
    console.log(cervezaIR.consultarPrecio());
    console.log(cervezaH.consultarPrecio());

}

let rtaCli2 = prompt("usted quiere saber los precios de los vinos? si/no");

rtaCli2.toLocaleLowerCase();

if (rtaCli2 === "si"){
    console.log(vinoMeviPN.consultarPrecio());
    console.log(vinoBenegasCF.consultarPrecio());

}

let rtaCli3 = prompt("Y le gustaría conocer los precios por Pack de las cervezas?");

rtaCli3.toLocaleLowerCase();

if (rtaCli3 === "si"){
    console.log(cervezaBT.precioPorPack());
    console.log(cervezaIR.precioPorPack());
    console.log(cervezaH.precioPorPack());

}

let rtaCli4 = prompt("Y le gustaría conocer los precios por Pack de los vinos?");
rtaCli4.toLocaleLowerCase();

if (rtaCli4 === "si"){
    console.log(vinoMeviPN.precioPorCaja());
    console.log(vinoBenegasCF.precioPorCaja());

}


