// EJERCICIO 12
let pares = 0;
let impares = 0;

for (let i = 1; i <= 100; i++) {
    console.log(i);
    if (i % 2 === 0) {
        pares += i;
    } else {
        impares += i;
    }
}

console.log("La suma de los numeros pares es de:", pares);
console.log("La suma de los numeros impares es de:", impares);

