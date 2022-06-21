const lista = [{
        nome: 'sabão em pó',
        preco: 30,
    },
    {
        nome: 'cereal',
        preco: 12,
    },
    {

        nome: 'toalha',
        preco: 30,
    },
];
const saldoDisponivel = 100;

function calculoSaldo(saldoDisponivel, lista) {
    return lista.reduce(function(prev, current) {
        return prev - current.preco;
    }, saldoDisponivel);
};
console.log(calculoSaldo(saldoDisponivel, lista));