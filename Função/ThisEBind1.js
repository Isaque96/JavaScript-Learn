const pessoa = {
    saudacao = "Bom dia!",
    falar() {
        console.log(this.saudacao);
    }
}

pessoa.falar();
const falar = pessoa.falar;
falar(); // Conflito entre paradigmas: Funcional e OO

const falarDePessoas = pessoa.falar.bind(pessoa);
falarDePessoas();