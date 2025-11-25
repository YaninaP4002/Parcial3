
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const input = form.querySelector("input[type='number']");
        let numero = Number(input.value);

        if (isNaN(numero)) {
            alert("Debe ingresar un número entero válido.");
            return;
        }

        const esNegativo = numero < 0;
        numero = Math.abs(numero);

        let invertido = 0;

        while (numero > 0) {
            const digito = numero % 10;          
            invertido = invertido * 10 + digito; 
            numero = Math.floor(numero / 10);    
        }

        if (esNegativo) {
            invertido = -invertido;
        }

        alert("Número invertido: " + invertido);
    });
});
