document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita que la página se recargue
        
        const inputs = form.querySelectorAll("input[type='number']");

        const p1 = Number(inputs[0].value); // Parcial 1
        const p2 = Number(inputs[1].value); // Parcial 2
        const p3 = Number(inputs[2].value); // Parcial 3

        // Validación básica
        if (
            isNaN(p1) || isNaN(p2) || isNaN(p3) ||
            p1 < 0 || p1 > 100 ||
            p2 < 0 || p2 > 100 ||
            p3 < 0 || p3 > 100
        ) {
            alert("Las notas de los 3 parciales deben estar entre 0 y 100.");
            return;
        }

        // Promedio de parciales (60% de la nota final)
        const promedioParciales = (p1 + p2 + p3) / 3;
        const aporteParciales = promedioParciales * 0.60; // 60%

        // Notas mínimas para cada letra
        const requisitos = {
            "A": 90,
            "B": 80,
            "C": 70,
            "D": 60,
            "F": 0
        };

        let mensaje = "Promedio de parciales: " + promedioParciales.toFixed(2) +
                      "\nAporte de parciales (60%): " + aporteParciales.toFixed(2) +
                      "\n\nNota mínima en el EXAMEN FINAL:\n\n";

        for (let letra in requisitos) {
            const notaObjetivo = requisitos[letra];
            // notaFinal = aporteParciales + examen * 0.40
            // examen = (notaObjetivo - aporteParciales) / 0.40
            const notaNecesaria = (notaObjetivo - aporteParciales) / 0.40;

            if (notaNecesaria > 100) {
                mensaje += `${letra}: Necesita ${notaNecesaria.toFixed(2)} → IMPOSIBLE (más de 100)\n`;
            } else if (notaNecesaria <= 0) {
                mensaje += `${letra}: Ya tiene asegurada al menos una ${letra} sin examen.\n`;
            } else {
                mensaje += `${letra}: Necesita mínimo ${notaNecesaria.toFixed(2)} en el examen.\n`;
            }
        }

        alert(mensaje);
    });
});
