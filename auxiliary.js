const chars = document.querySelector('#chars');
const solution = document.querySelector('#solution');
const nums = document.querySelector('#nums');

function solutionById(sol, headers, add1, add2, sum, index) {
   const arr = sol.split(',');
   const head = headers.split(',');
   chars.innerHTML = '';
   solution.innerHTML = '';
   nums.innerHTML = '';
   nums.innerHTML = `SOLUCIÓN ${index}`;
   chars.innerHTML += `<ul>`;
   head.forEach((element, index) => {
      chars.innerHTML += `<li><strong>${element} = </strong>${arr[index]}</li>`
   });
   chars.innerHTML += `</ul>`;
   solution.innerHTML += `<div class="text-center text-success h5"><strong>${add1} + ${add2} = ${sum}</strong></div>`;
   solution.innerHTML += `<div class="text-center text-warning h5 mt-4">
   <strong>${getNumberByAdding(add1, arr, head)} + ${getNumberByAdding(add2, arr, head)} = ${getNumberByAdding(sum, arr, head)}</strong></div>`;
}

function getNumberByAdding(stringText, numbersArray, characters) {
   let number = '';
   for (let i = 0; i < stringText.length; i++) {
      const element = stringText.charAt(i);
      const pos = characters.indexOf(element);
      number = number + numbersArray[pos];
   }
   return (number);
}