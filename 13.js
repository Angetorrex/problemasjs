// EJERCICIO 13
let contador = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0 || i % 3 === 0) {
        console.log(i);
        contador++;
    }
}

console.log("El total de los numeros que son multiplos de 2 o 3 entre 1 y 100 es de:", contador);
