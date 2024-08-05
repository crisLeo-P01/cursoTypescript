"use strict";
(() => {
    let precioProducto = 130;
    precioProducto = 254;
    console.log('precioProducto', precioProducto);
    let customAge = 38;
    // customAge = customAge + '1'; // Error: no se le puede sumar un string a una variable de tipo número
    customAge = customAge + 1;
    console.log('customAge', customAge);
    let productosStock;
    // console.log('productosStock', productosStock); // Error: no se le asigna un valor
    // if (productosStock > 40) { // Error
    //   console.log('Es mayor');
    // }
    productosStock = 50;
    console.log('productosStock', productosStock);
    let descuento = parseInt('421');
    console.log('descuento', descuento);
    console.log('Es de tipo ->', typeof (descuento));
    descuento = parseInt('teclado');
    if (descuento <= 150) {
        console.log('aplicar');
        console.log('Es de tipo ->', typeof (descuento));
    }
    else {
        console.log('no aplicar');
        console.log('Es de tipo ->', typeof (descuento));
    }
    let hex = 0xfff;
    console.log('hex', hex);
    let bin = 0b10110;
    console.log('bin', bin);
})();
