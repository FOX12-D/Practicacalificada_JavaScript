/*
Escribe un programa que pregunte al usuario el total de su compra y si tiene un código de descuento. 
Si el código es "DESCUENTO10", se aplicará un 10% de descuento. Si el código es "DESCUENTO20", se aplicará un 20% de descuento. Muestra el total después de aplicar el descuento, 
si corresponde, y un mensaje si el código no es válido. (10p)
*/
let totalCompra = prompt("Ingrese el total de su compra:");
totalCompra = parseFloat(totalCompra);

let codigoDescuento = prompt("Ingrese su código de descuento (o deje en blanco si no tiene):");

let totalFinal = totalCompra;
let mensaje = "";

if (codigoDescuento === "DESCUENTO10") {
    totalFinal = totalCompra * 0.9;
    mensaje = `Se aplicó un 10% de descuento. Total: $${totalFinal.toFixed(2)}`;
} else if (codigoDescuento === "DESCUENTO20") {
    totalFinal = totalCompra * 0.8;
    mensaje = `Se aplicó un 20% de descuento. Total: $${totalFinal.toFixed(2)}`;
} else if (codigoDescuento === "") {
    mensaje = `No se aplicó ningún descuento. Total: $${totalFinal.toFixed(2)}`;
} else {
    mensaje = `Código de descuento no válido. Total: $${totalFinal.toFixed(2)}`;
}

alert(mensaje);