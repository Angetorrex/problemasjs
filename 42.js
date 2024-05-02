const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Escribe el ID del registro a eliminar: ', (id) => {
  const data = fs.readFileSync('DATOS.DAT', 'utf8');
  const registros = data.split('\n');
  const nuevosRegistros = registros.filter(registro => !registro.startsWith(id + ','));
  fs.writeFileSync('DATOS.DAT', nuevosRegistros.join('\n'));
  console.log('Registro eliminado');
  rl.close();
});
