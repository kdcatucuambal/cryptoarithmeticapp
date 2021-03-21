'use strict'
var solution = null;

export function getCryptoaritmoSolutions(adding1, adding2, summation) {
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let allCharacters = getAllCharacters(adding1, adding2, summation);
    if (allCharacters.length > 10) {
        throw "Hay un error en las entradas";
    }
    let allElementsVariation = getAllElementsVariation(numbers, allCharacters.length);
    solution = getSolutionsFromCase(allElementsVariation, adding1, adding2, summation, allCharacters); //NUmeros
    return { solution, allCharacters };
}

function getAllCharacters(adding1, adding2, summation) {
    let characters = [];
    let characerTotal = adding1.concat(adding2).concat(summation); //text string
    let charArray = characerTotal.split('');
    for (let i = 0; i < charArray.length; i++) {
        const char = charArray[i];
        if (!characters.includes(char.toString())) {
            characters.push(char);
        }
    }
    return characters;
}

function getAllElementsVariation(cadena, group) {
    var arrayCombinaciones = [];
    comb(cadena, group, arrayCombinaciones);
    return arrayCombinaciones;
}

function comb(alfabeto, n, resultados, resultado) {
    if (!resultado) {
        resultado = [];
    }
    for (var i = 0; i < alfabeto.length; ++i) {
        var newResultado = resultado.slice();
        var newAlfabeto = alfabeto.slice();
        newResultado.push(alfabeto[i]);
        newAlfabeto.splice(i, 1);
        if (n > 1) {
            comb(newAlfabeto, n - 1, resultados, newResultado);
        } else {
            resultados.push(newResultado);
        }
    }
}

function getSolutionsFromCase(elements, adding1, adding2, summation, characters) {
    const solutions = [];
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        const number1 = getNumberByAdding(adding1, element, characters);
        const number2 = getNumberByAdding(adding2, element, characters);
        const addResult = getNumberByAdding(summation, element, characters);
        const finallyResult = number1 + number2;
        if (finallyResult === addResult) {
            solutions.push(element);
        }
    }
    return solutions;
}

function getNumberByAdding(stringText, numbersArray, characters) {
    let number = '';
    for (let i = 0; i < stringText.length; i++) {
        const element = stringText.charAt(i);
        const pos = characters.indexOf(element);
        number = number + numbersArray[pos];
    }
    return Number(number);
}