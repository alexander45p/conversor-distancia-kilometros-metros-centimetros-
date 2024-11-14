var valor = document.getElementById("valor");
// Detecto el evento cuando se escribe el número
valor.addEventListener('keyup', convertir);
var txtResultado = document.getElementById("resultado");

var unidad1 = document.getElementById("unidad1");
var unidad2 = document.getElementById("unidad2");

// Detecto el evento cuando se selecciona una unidad
unidad1.addEventListener('change', convertir);
unidad2.addEventListener('change', convertir);

// Función que realiza el cálculo
function convertir() {
    if (valor.value === '') {
        txtResultado.innerHTML = '';
        return;
    }

    // Convierto el valor del input a número
    var numero = parseFloat(valor.value);
    var resultado;

    // Obtengo las unidades seleccionadas
    var fromUnit = unidad1.value;
    var toUnit = unidad2.value;

    // Conversiones entre unidades
    if (fromUnit === "kilometro") {
        if (toUnit === "kilometro") {
            resultado = numero;
        } else if (toUnit === "metro") {
            resultado = numero * 1000;
        } else if (toUnit === "centimetro") {
            resultado = numero * 100000;
        }
    } else if (fromUnit === "metro") {
        if (toUnit === "kilometro") {
            resultado = numero / 1000;
        } else if (toUnit === "metro") {
            resultado = numero;
        } else if (toUnit === "centimetro") {
            resultado = numero * 100;
        }
    } else if (fromUnit === "centimetro") {
        if (toUnit === "kilometro") {
            resultado = numero / 100000;
        } else if (toUnit === "metro") {
            resultado = numero / 100;
        } else if (toUnit === "centimetro") {
            resultado = numero;
        }
    }

    // Muestro el resultado en el elemento de resultado
    txtResultado.innerHTML = `${numero} ${fromUnit}/s equivalen a ${resultado} ${toUnit}/s`;
}
