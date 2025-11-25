function convertirDiaMes(idContenedor) {
    const input = document.querySelector("input[type='number']");
    const numero = parseInt(input.value, 10);

    if (isNaN(numero) || numero < 1 || numero > 365) {
        mostrarResultado("danger", idContenedor, "Ingrese un número válido entre 1 y 365.");
        return;
    }

    const diasMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const nombresMes = [
        "enero", "febrero", "marzo", "abril", "mayo", "junio",
        "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
    ];

    let mes = 0;
    let dia = numero;

    while (dia > diasMes[mes]) {
        dia -= diasMes[mes];
        mes++;
    }

    mostrarResultado(
        "success",
        idContenedor,
        `El día ${numero} corresponde al ${dia} de ${nombresMes[mes]}.`
    );
}

function mostrarResultado(tipo, idContenedor, texto) {
    let mensaje = document.getElementById(idContenedor);

    if (!mensaje) {
        mensaje = document.createElement("div");
        mensaje.id = idContenedor;
        mensaje.className = "mt-3";
        document.querySelector(".container").appendChild(mensaje);
    }

    mensaje.className = `alert alert-${tipo} mt-3`;
    mensaje.textContent = texto;
}

document.querySelector("button").addEventListener("click", function (e) {
    e.preventDefault();
    convertirDiaMes("resultadoProblema2");
});
