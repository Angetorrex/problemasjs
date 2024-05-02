// EJERCICIO 11
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Escribe un numero: ', (numero) => {
    const limite = parseInt(numero);

    let contadorMultiplos = 0;

    console.log("Los mltiplos de 3 desde 1 hasta", limite, "es:");
    for (let i = 1; i <= limite; i++) {
        if (i % 3 === 0) {
            console.log(i);
            contadorMultiplos++;
        }
    }
    console.log("El total de mltiplos de 3 es:", contadorMultiplos);

    rl.close();
});

