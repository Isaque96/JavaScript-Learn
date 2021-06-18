const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
];
const obj = json => JSON.parse(json)
const preco = e => e.preco;

const resultado = carrinho.map(obj).map(preco);
console.log(resultado);