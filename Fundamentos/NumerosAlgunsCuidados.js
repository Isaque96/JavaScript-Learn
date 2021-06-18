console.log(7 / 0); // Ele reconhece um pouco de limite
console.log("10" / 2); // Ele converte o valor da string automaticamente
console.log('3' + 2); // Ele da preferência para string
console.log('3' - 2); // Como outros sinais não fazem muita sentido pra string, ele usa números
console.log("Show" * 2); // Não funciona
console.log(0.1 + 0.7); // Imprecisão devido a especificação IEEE
/*console.log(10.toString()) * não funciona pois não é uma variável */
console.log((10.435).toFixed(2)); // Assim a gente consegue chamar a função