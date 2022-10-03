// Дана таблица c 1 колонкой. Под таблицей сделайте форму (инпут и кнопка), с помощью которой можно будет добавить нового значение в таблицу.

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    const inp = document.querySelector('.inp');
    const table = document.querySelector('.table');

    let newRow = table.insertRow(-1);
    let newCell = newRow.insertCell(-1);
    
    newCell.append(inp.value);
});