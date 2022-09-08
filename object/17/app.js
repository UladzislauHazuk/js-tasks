// Массив объектов – воображаемая база данных (БД). На входе объект – воображаемое тело запроса от пользователя Работа по CRUD: Create, Read, Update, Delete
// Использовать методы перебора массива
// Возможно применение spread оператора

// 1. Read
// Вывести в консоль массив объектов

const arr = [{
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

console.log(arr);