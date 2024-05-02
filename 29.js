// EJERCICIO 29
function tirardados() {
    const dado1 = Math.floor(Math.random() * 6) + 1;
    const dado2 = Math.floor(Math.random() * 6) + 1;
    const suma = dado1 + dado2;

    return suma;
}

let contador = 0;

for (let i = 0; i < 100; i++) {
    const resultado = tirardados();
    if (resultado === 10) {
        contador++;
    }
}

console.log(`Se tiraron los dos dados, la suma fue igual a 10 es de ${contador} veces.`);

