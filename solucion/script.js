/*
    Nuestra  calculadora de IMC utiliza los siguientes rangos
    y categorías para interpretar los valores de IMC:
        -Bajo peso: IMC < 18.5
        -Peso normal: 18.5 <= IMC < 24.9</li>
        -Sobrepeso: 24.9 <= IMC < 29.9</li>
        -Obeso: IMC >= 29.9</li>

    Estos rangos y categorías son comunes en la interpretación del Índice de Masa Corporal. 
    Tened  en cuenta que el IMC es una medida simple basada en el peso y la altura,
    y no tiene en cuenta otros factores como la composición corporal, la masa muscular, 
    la distribución de grasa, etc.
    Por lo tanto, es importante utilizarlo con precaución y en conjunto con otras evaluaciones de salud.
  
*/ 
    // Creamos dos variables de manejo de acceso al dom una para el botón y otra para mostrar los resultados
    const calculateButton = document.getElementById("calculate");
    const resultDiv = document.getElementById("result");
    

function calcularImc() {
        // Obtener los valores de peso y altura deñ formulario
        // La función parseFloat() analiza un argumento (si es necesario, lo convierte en una cadena) y devuelve un número de coma flotante.
        const weight = parseFloat(document.getElementById("weight").value);
        const height = parseFloat(document.getElementById("height").value) / 100; // Convertir altura a metros
        
        // Esto es opcional pero mejor siempre es validar los campos de entrada
        // Verificar si los valores son válidos, en este caso números 
        if (isNaN(weight) || isNaN(height)) {
            resultDiv.innerHTML = "Por favor, ingresa valores válidos.";
            return;
        }
        
        // Calcular el IMC
        // el calculo del IMC
        const imc = weight / (height * height);
        let categoria = "";
        
        // Determinar la categoría según el IMC
        if (imc < 18.5) {
            categoria = "Bajo peso";
        } else if (imc < 24.9) {
            categoria = "Peso normal";
        } else if (imc < 29.9) {
            categoria = "Sobrepeso";
        } else {
            categoria = "Obeso";
        }
        
        // Mostrar el resultado en la página
        resultDiv.innerHTML = `Tu IMC es ${imc.toFixed(2)} (${categoria}).`;
        
}// fin del cálculo que realiza la función calcularImc
        
// Agregar un evento de clic al botón "Calcular"  del HTML para disparar  todo el código
        calculateButton.addEventListener("click", function() {
        calcularImc();
    });

