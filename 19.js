// EJERCICIO 19
function relojDigital(hora, minutos, segundos) {
    setInterval(() => {
        segundos++;
        if (segundos === 60) {
            segundos = 0;
            minutos++;
            if (minutos === 60) {
                minutos = 0;
                hora++;
                if (hora === 24) {
                    hora = 0;
                }
            }
        }
        console.log(`${hora < 10 ? '0' : ''}${hora} : ${minutos < 10 ? '0' : ''}${minutos} : ${segundos < 10 ? '0' : ''}${segundos}`);
    }, 1000);
}

let hora = 0;
let minutos = 0;
let segundos = 0;

// Para poner en hora el reloj, cambiar los valores de hora, minutos y segundos según sea necesario.
relojDigital(hora, minutos, segundos);

