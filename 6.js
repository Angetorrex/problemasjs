// EJERCICIO 6
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Introduce un numero: ', (numero) => {
    let limite = parseInt(numero);

    if (!isNaN(limite)) {
        console.log("Los numeros naturales hasta el ", limite, " son:");
        for (let i = 1; i <= limite; i++) {
            console.log(i);
        }
    } else {
        console.log("ERROR");
    }
    rl.close();
});
