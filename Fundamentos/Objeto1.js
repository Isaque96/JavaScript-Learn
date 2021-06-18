console.log(typeof Object);
console.log(typeof new Object); // É como se estivesse chamando construtor, sem necessidade de colocar os parentêses

const Cliente = function() {};
console.log(typeof Cliente);
console.log(typeof new Cliente);

class Product {}
console.log(typeof Product);
console.log(typeof new Product());