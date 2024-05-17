// Se creo una funcion para cuil y con la cual se puede utilizar caracteres.

export default function esUnCUIT(campo) {
    /* Reemplazamos la expresion regular por un espacio vacio */
    const cuit = campo.value.replace(/\-/g, "");
    console.log(cuit);

    if (tieneNumerosRepetidos(cuit)) {
        console.log("Valores repetidos");
        campo.setCustomValidity("Valores repetidos")
    } else {
        if (validarPrimerosDigitos(cuit) && validarDigitoVerificador(cuit)) {
            console.log("Cuit valido");
        } else {
            console.log("Cuit no existe");
            campo.setCustomValidity("Cuit no existe")
        }
    }

}
// Se crea una funcion para los numeros repetidos dentro del campo cuil

function tieneNumerosRepetidos(cuit) {
    const numerosRepetidos = [
        "00000000000",
        "11111111111",
        "22222222222",
        "33333333333",
        "44444444444",
        "55555555555",
        "66666666666",
        "77777777777",
        "88888888888",
        "99999999999",
    ];
    return numerosRepetidos.includes(cuit);
}

// Funcion para validar los primeros didgitos

function validarPrimerosDigitos(cuit) {
    let primerosDigitos = cuit.substr(0, 2);
    let digitosValidos = ['20', '23', '24', '27', '30', '33', '34'];

    return digitosValidos.includes(primerosDigitos);
}

function validarDigitoVerificador(cuit) {
    let acumulado = 0;
    const factores = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];

    for (let i = 0; i < 10; i++) {
        acumulado += parseInt(cuit[i], 10) * factores[i];
    }
    let validadorTeorico = 11 - (acumulado % 11);
    if (validadorTeorico === 11) {
        validadorTeorico = 0;
    } else if (validadorTeorico === 10) {
        validadorTeorico = 9;
    }

    const digitoVerificador = parseInt(cuit[10], 10);

    return validadorTeorico === digitoVerificador;
}