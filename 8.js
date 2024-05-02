// EJERCICIO 8
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Escribe S o N: ', (respuesta) => {
    respuesta = respuesta.trim().toUpperCase();

    if (respuesta === 'S' || respuesta === 'N' || respuesta === 'E') {
        console.log("Respuesta correcta: " + respuesta);
    } else {
        console.log("Respuesta incorrecta");
    }
    rl.close();
});