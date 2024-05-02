const fs = require('fs');
const readline = require('readline');

const modificar = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Escribe el ID del registro a modificar: ', (id) => {
    const data = fs.readFileSync('DATOS.DAT', 'utf8');
    const registros = data.split('\n');
    const index = registros.findIndex(reg => reg.startsWith(id + ','));
    if (index === -1) {
      console.log('No se encontro registro');
      rl.close();
      return;
    }

    rl.question('Ingrese nuevos datos (nombre, apellidos, dirección, estado) separados por coma: ', (nuevosDatos) => {
      registros[index] = id + ',' + nuevosDatos;
      fs.writeFileSync('DATOS.DAT', registros.join('\n'));
      console.log('Registro modificado');
      rl.question('Desea modificar otro registro?: ', (respuesta) => {
        if (respuesta.toLowerCase() === 'si') {
          modificar();
        } else {
          rl.close();
        }
      });
    });
  });
};
modificar();