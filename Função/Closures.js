// Closure é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar manipular variáveis externas à função

// Contexto léxico em ação!

const x = "Global";

function fora() {
    const x = "Local";
    function dentro() {
        return x;
    }
    return dentro();
}

const minhaFuncao = fora();
console.log(minhaFuncao); 
/* No video ele não declarou como função
Mas chamou como função, aqui não deu certo pois não foi declarado como função */