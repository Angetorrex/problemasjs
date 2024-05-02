// EJERCICIO 37
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function notas(numcursos, alumnos, callback) {
    let escuela = [];
    let cursoActual = 0;
    let alumnoActual = 0;

    const pedirnota = () => {
        if (cursoActual < numcursos) {
            if (!escuela[cursoActual]) {
                escuela[cursoActual] = [];
                alumnoActual = 0;
            }

            if (alumnoActual < alumnos) {
                rl.question(`Escribe la nota del alumno ${alumnoActual + 1} del curso ${cursoActual + 1}: `, (nota) => {
                    escuela[cursoActual].push(parseFloat(nota));
                    alumnoActual++;
                    pedirnota();
                });
            } else {
                cursoActual++;
                pedirnota();
            }
        } else {
            rl.close();
            callback(escuela);
        }
    };
    pedirnota();
}

function mostrar(escuela) {
    console.log("Notas de todos los cursos:");
    escuela.forEach((curso, indexCurso) => {
        console.log(`Notas del curso ${indexCurso + 1}: ${curso.join(", ")}`);
    });
}

rl.question("Escribe el numero de cursos: ", (numcursos) => {
    rl.question("Escribe el numero de alumnos por curso: ", (alumnos) => {
        notas(parseInt(numcursos), parseInt(alumnos), (notas) => {
            mostrar(notas);
        });
    });
});