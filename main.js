class Ladrillo {
    constructor(tipo, cantidadPorM2, precioDeLista, cantidadPorPallet) {
        this.tipo = tipo
        this.cantidadPorM2 = cantidadPorM2
        this.precioDeLista = precioDeLista
        this.cantidadPorPallet = cantidadPorPallet
    }
}

const Ladrillo1 = new Ladrillo("comunes", 60, 65, 1000)
const Ladrillo2 = new Ladrillo("huecos del 8", 15, 275, 198)
const Ladrillo3 = new Ladrillo("huecos del 12", 15, 350, 144)
const Ladrillo4 = new Ladrillo("bloques de 13", 12.5, 400, 162)
const Ladrillo5 = new Ladrillo("bloques de 20", 12.5, 400, 108)

const Ladrillos = [Ladrillo1, Ladrillo2, Ladrillo3, Ladrillo4, Ladrillo5]

const tiposDeLadrillos = Ladrillos.map(ladrillo => ladrillo.tipo);
const stringDeLadrillos = tiposDeLadrillos.join(" / ");

function calcularCantidadLadrillos(tipoLadrillo, m2) {
    const ladrilloSeleccionado = Ladrillos.find(ladrillo => ladrillo.tipo === tipoLadrillo);
    const cantidad = Math.ceil(m2 * ladrilloSeleccionado.cantidadPorM2);
    alert(`Necesitas ${cantidad} ${ladrilloSeleccionado.tipo} para hacer una pared de ${m2} M2.`);
}

let nombre = prompt("Bienvenido a Java-Ladrillos. Te voy a ayudar a saber cuántos ladrillos necesitas para construir tus paredes. Para empezar, te pido tu nombre");
let edad = parseFloat(prompt(nombre + ", ¿cuántos años tenés?"));

if (edad >= 18) {
    let cantidadM2;

    while (true) {
        cantidadM2 = parseFloat(Math.ceil(prompt(nombre + ", ingresa la cantidad de metros cuadrados que tenes que hacer de pared, siempre en números positivos. Si ingresas números con decimales, serán redondeados.")));

        if (cantidadM2 < 1) {
            alert("Por favor, " + nombre + " ingresa un número positivo válido para poder calcular la cantidad de ladrillos que necesitas.");
        } else {
            break;
        }
    }

    let tipoLadrillo;

    while (true) {
        tipoLadrillo = prompt("Elegí de qué tipo de ladrillos querés que sea la pared. Tipea la opción tal cual te la ponemos a continuación: " + stringDeLadrillos);

        if (tipoLadrillo !== "comunes" &&
        tipoLadrillo !== "huecos del 8" &&
        tipoLadrillo !== "huecos del 12" &&
        tipoLadrillo !== "bloques de 13" &&
        tipoLadrillo !== "bloques de 20") {
            alert("Ingresa un tipo de ladrillos valido, recorda que tenes que escribirlo tal cual te lo damos en las siguientes opciones: " + stringDeLadrillos)
        } else {
            calcularCantidadLadrillos(tipoLadrillo, cantidadM2);
        break;
        }

        
    }

    alert(nombre + " muchas gracias por haber usado nuestro calculador de ladrillos, vamos a seguir trabajando para que esta aplicación crezca y así te pueda calcular más materiales que necesitas para tu obra. ¡Que tengas un buen día!")
} else {
    alert("Te pido disculpas, " + nombre + ", para ingresar a Java-Ladrillos tenés que ser mayor de edad. Que tengas un hermoso día.");
}
