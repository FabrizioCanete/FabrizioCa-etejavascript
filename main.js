// Declaración de variables
let montoPrestamo;
const tasaInteresAnual = 0.08;
let plazoPrestamo;
let cuotaMensual;

// Almacenamiento de elementos mediante variables
montoPrestamo = parseFloat(prompt("Ingrese el monto del préstamo:"));
plazoPrestamo = parseInt(prompt("Ingrese el plazo del préstamo en meses:"));

// Función para calcular la cuota mensual
function calcularCuotaMensual(monto, tasa, plazo) {
    const tasaMensual = tasa / 12;
    const cuota = (monto * tasaMensual) / (1 - Math.pow(1 + tasaMensual, -plazo));
    return cuota;
}

// Condicionales
if (isNaN(montoPrestamo) || isNaN(plazoPrestamo) || montoPrestamo <= 0 || plazoPrestamo <= 0) {
    alert("Por favor, ingrese valores válidos para el monto y el plazo del préstamo.");
} else {
    // Llamada a la función para calcular la cuota mensual
    cuotaMensual = calcularCuotaMensual(montoPrestamo, tasaInteresAnual, plazoPrestamo);

    // Mostrar resultado
    alert(`Para un préstamo de $${montoPrestamo} a una tasa de interés anual del ${tasaInteresAnual * 100}% durante ${plazoPrestamo} meses,\nla cuota mensual será de $${cuotaMensual.toFixed(2)}.`);
}

// Ciclo simple para simular pagos mensuales
for (let i = 1; i <= plazoPrestamo; i++) {
    console.log(`Mes ${i}: Pago de cuota mensual de $${cuotaMensual.toFixed(2)}.`);
}