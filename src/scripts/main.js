'use strict';

// write code here
const table = document.querySelector('tbody');
const headers = document.querySelectorAll('th');
const rows = document.querySelectorAll('tbody tr');
const head = document.querySelector('thead');

head.addEventListener('click', (e) => {
  sortColumn(e.target.textContent);
});

function sortColumn(column) {
  let sortedRows;
  const index = [...headers].findIndex(item => item.textContent === column);

  switch (column) {
    case 'Name':
    case 'Position':
    case 'Age':
      sortedRows = [...rows]
        .sort((rowA, rowB) =>
          rowA.cells[index].innerHTML > rowB.cells[index].innerHTML ? 1 : -1);

      table.append(...sortedRows);
      break;

    case 'Salary':
      sortedRows = [...rows]
        .sort((rowA, rowB) =>
          +rowA.cells[index].textContent.replace(/\D/gi, '')
          - +rowB.cells[index].textContent.replace(/\D/gi, ''));

      table.append(...sortedRows);
      break;
  }
}
