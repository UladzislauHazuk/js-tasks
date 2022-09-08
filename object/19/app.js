// Update
// На входе объект вида
// { "id": "go", "label": “Test", "category": “test", "priority": 1 },
// Необходимо найти id клиента в массиве БД.
// Если совпадение есть, произвести обновление значений для соответствующих ключей.
// Примечание: для удаления объекта в БД можно отфильтровать объект БД не включая id клиента. В результативный массив запушить клиентский, тем самым обновить объект БД
// Если совпадения по id нет – ошибка

let arr = [
    {
        "id": "javascript",
        "label": "JavaScript",
        "category": "programmingLanguages",
        "priority": 1
    },
    {
        "id": "typescript",
        "label": "TypeScript",
        "category": "programmingLanguages",
        "priority": 1
    },
    {
        "id": "sql",
        "label": "SQL",
        "category": "programmingLanguages",
        "priority": 2
    },
    {
        "id": "java",
        "label": "Java",
        "category": "programmingLanguages",
        "priority": 3
    },
    {
        "id": "go",
        "label": "GO",
        "category": "programmingLanguages",
        "priority": 3
    }
];

const obj = {
    "id": "go",
    "label": 'Test',
    "category": 'test',
    "priority": 1
};

const checkID = arr.filter(elem => {
    return elem.id !== obj.id;
});

if (arr.length !== checkID.length) {
    checkID.push(obj);
    arr = checkID;
    console.log(arr);
} else {
    console.log('Ошибка');
}