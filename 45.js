const fs = require('fs');
const readline = require('readline');

const consultar = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Escribe el ID del registro a consultar: ', (id) => {
    const data = fs.readFileSync('DATOS.DAT', 'utf8');
    const registros = data.split('\n');
    const registro = registros.find(reg => reg.startsWith(id + ','));

    if (registro) {
      console.log('Registro encontrado:', registro);
    } else {
      console.log('Registro no encontrado');
    }

    rl.question('Desea consultar otro registro: ', (respuesta) => {
      if (respuesta.toLowerCase() === 'si') {
        consultar();
      } else {
        rl.close();
      }
    });
  });
};
consultar();
