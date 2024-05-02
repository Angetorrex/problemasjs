// EJERCICIO 34
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let calificaciones = [80, 55, 90, 95, 80, 75, 75, 84, 92, 88];

rl.question('Escribe la calificacion a buscar: ', (nota) => {
    nota = parseInt(nota);
    if (calificaciones.includes(nota)) {
        console.log("La nota " + nota + " esta en la lista");
    } else {
        console.log("La nota " + nota + " no esta en la lista");
    }
    rl.close();
});
