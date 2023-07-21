// Ejercicio 2: Cálculo de precios con impuestos
// Supongamos que tienes un arreglo de precios de productos y deseas calcular el precio final después de aplicar un descuento del 10%. 

// Porcentaje = (precio * 10) / 100;

const carrito = [
	{
		producto: 'Tshirt Vans',
		price: 750,
	},
	{
		producto: 'Libro Clean Code',
		price: 300,
	},
	{
		producto: 'TV Samsung 50 Pulgadas',
		price: 9000,
	},
];

// [
// 	{
// 		producto: 'Tshirt Vans',
// 		price: 750 - 10%,
// 	},
// 	{
// 		producto: 'Libro Clean Code',
// 		price: 300 -10%,
// 	},
// 	{
// 		producto: 'TV Samsung 50 Pulgadas',
// 		price: 9000 -10%,
// 	},
// ];


const ivaCalc = (products) => {
    products.map(element => {
        const iva = (element.price * 10)/100
        const result = (element.price - iva)
        console.log(result);
        return result
    });
}

ivaCalc(carrito)