const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Escribe el ID: ', (id) => {
  rl.question('Escribe el nombre: ', (nombre) => {
    rl.question('Escribe los apellidos: ', (apellidos) => {
      rl.question('Escribe la dirección: ', (direccion) => {
        rl.question('Escribe e estado: ', (estado) => {
          const nuevoRegistro = `${id},${nombre},${apellidos},${direccion},${estado}\n`;
          fs.appendFileSync('DATOS.DAT', nuevoRegistro);
          console.log('Registro añadido');
          rl.close();
        });
      });
    });
  });
});
