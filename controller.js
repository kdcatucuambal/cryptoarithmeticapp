'use strict'
import { getCryptoaritmoSolutions } from "./script.js";

const txtAdding1 = document.querySelector('#txt-add1');
const txtAdding2 = document.querySelector('#txt-add2');
const txtSummation = document.querySelector('#txt-summation');
const form = document.querySelector('#form');
const tableResult = document.querySelector('#table-result');

form.addEventListener(('submit'), (event) => {
    try {
        console.time('loop');
        const solution = getCryptoaritmoSolutions(
            txtAdding1.value.toUpperCase(),
            txtAdding2.value.toUpperCase(),
            txtSummation.value.toUpperCase());
        console.timeEnd('loop');
        createTableAndFill(solution);
    } catch (error) {
        alert(error)
    }
    event.preventDefault();
});

function createTableAndFill(solution) {
    const headers = solution.allCharacters;
    const solutionsInNumbers = solution.solution;
    const table = document.createElement('table');
    //Table Headers
    const thead = document.createElement('thead');
    const tr = document.createElement('tr');
    let thHTML = '';
    thHTML = thHTML + `<th scope="row">#</th>`
    headers.forEach(element => {
        thHTML = thHTML + `<th scope="row">${element}</th>`
    });
    thHTML = thHTML + `<th scope="row"></th>`
    tr.innerHTML = thHTML;
    table.className = 'table table-striped table-sm table-hover table-bordered';
    tr.classList.add('text-center');
    thead.append(tr);
    //Table Body
    const tbody = document.createElement('tbody');
    let tdTr = '';
    solutionsInNumbers.forEach((element, index) => {
        tdTr = tdTr + '<tr class="text-center">'
        tdTr = tdTr + `<td><strong>${index + 1}</strong></td>`;

        element.forEach(element => {
            tdTr = tdTr + `<td>${element}</td>`
        });
        tdTr = tdTr + `<td><button type="button" class="btn btn-danger btn-sm" data-toggle="modal" data-target="#solutionModal" onclick="solutionById('${element}',
        '${headers}',
        '${txtAdding1.value.toUpperCase()}',
        '${txtAdding2.value.toUpperCase()}',
        '${txtSummation.value.toUpperCase()}',
        '${index + 1}')">Ver</button></td>`
        tdTr = tdTr + '</tr>';
    });
    tbody.innerHTML = tdTr;
    table.append(thead, tbody);
    tableResult.innerHTML = '';
    tableResult.append(table);
}
