const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Encuentre el estado a buscar: ', (estadoBuscado) => {
  const data = fs.readFileSync('DATOS.DAT', 'utf8');
  const registros = data.split('\n');
  const filtrados = registros.filter(reg => reg.endsWith(estadoBuscado));

  console.log('Registros encontrados:');
  filtrados.forEach(registro => {
    console.log(registro);
  });
  rl.close();
});