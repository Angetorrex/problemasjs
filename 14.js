// EJERCICIO 14
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numeros = [];

function mayoromenor(numeros) {
    let mayor = numeros[0];
    let menor = numeros[0];

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > mayor) {
            mayor = numeros[i];
        }
        if (numeros[i] < menor) {
            menor = numeros[i];
        }
    }

    console.log("El numero mayor es:", mayor);
    console.log("El numero menor es:", menor);
}

function pedirN(indice) {
    rl.question(`Escribe un numero ${indice + 1}: `, (numero) => {
        numero = parseFloat(numero);
        if (!isNaN(numero)) {
            numeros.push(numero);
            if (numeros.length < 5) {
                pedirN(indice + 1);
            } else {
                 mayoromenor(numeros);
                rl.close();
            }
        } else {
            console.log("ERROR, introduce un numero valido.");
            pedirN(indice);
        }
    });
}

console.log("Introduce cinco numeros:");
pedirN(0);