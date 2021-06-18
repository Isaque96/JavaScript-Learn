function rand([min = 0, max = 1000]) {
    // Mantive a estrutura do C# só para não perder o costume, e ficar mais estruturado
    if (min>max) { [min, max] = [max, min]; }
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

console.log(rand([50, 40]));
console.log(rand([992]));
console.log(rand([, 10]));
console.log(rand([]));
console.log(rand());