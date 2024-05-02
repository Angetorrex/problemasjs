// EJERCICIO 33
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let calificaciones = [];

rl.question('Escribe las calificaciones (por espacios): ', (input) => {
  calificaciones = input.split(' ').map(Number);
  if (calificaciones.length !== 10 || calificaciones.some(isNaN)) {
    console.log('Escribe 10 calificaciones validas separadas por espacios.');
    rl.close();
    return;
  }

  const media = calificaciones.reduce((total, calificacion) => total + calificacion, 0) / calificaciones.length;

  console.log('Las calificaciones ingresadas son:', calificaciones);
  console.log('La media de las calificaciones es:', media.toFixed(2));

  rl.close();
});