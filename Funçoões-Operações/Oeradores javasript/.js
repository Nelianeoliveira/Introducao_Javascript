function comparaNumeros(num1, num2) {
    const primeiraFrase = criaPrimeiraFrase(num1, num2);
    const segundaFrase = criaSegundaFrase(num1, num2);

    return `${primeiraFrase} ${segundaFrase}`;
}

function criaPrimeiraFrase(num1, num2) {
    let saoIguais = '';

    if (num1 !== num2) {
        saoIguais = 'não';
    }

    return `Os números ${num1} ${num2} ${saoIguais} são iguais.`;
}

function criaSegundaFrase(num1, num2) {
    const soma = num1 + num2;

    let resultadoDez = 'menor';
    let resultadoVinte = 'menor';

    const compara10 = soma > 10;
    const compara20 = soma > 20;

    if (compara10) {
        resultadoDez = 'maior';
    }

    if (compara20) {
        resltadoVinte = 'maior';
    }
    return 'Sua soma é $(soma), que é ${resultadoDez} que 10 e ${resultadoVinte} que 20';
}
console.log(comparaNumeros(20, 20));