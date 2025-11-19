var nombre = "Juan";
let edad = 30;
const ESTADO = "vivo";
//Alcance Global Inicio//
//======================================//

if (edad >= 18) {
  //Alcance Bloque - Inicia//
  const VALOR_HORA = 20000;
  let cantidadhoras = prompt("Ingrese cantidad de horas: ");
  if (isNaN(cantidadhoras)) {
    console.log("Debe ingresar un valor numerico");
  } else {
    var salario = VALOR_HORA * cantidadhoras;
    console.log("El empleado " + nombre + " tiene un salario de: " + salario);
  }
  var salario = VALOR_HORA * cantidadhoras;
  console.log("El empleado " + nombre + " tiene un salario de: " + salario);
  //Alcance Bloque - Fin//
}
console.log("===Colilla de pago===");
console.log("Nombre: " + nombre);
console.log("Edad: " + edad);
console.log("Estado: " + ESTADO);
console.log("Salario: " + salario);
console.log("Cantidad horas: " + cantidadhoras);
//Alcance Global - Fin//
