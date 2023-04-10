// 1. Реализуйте Singer – производный класс, базовый – Worker.
// Класс Worker состоит из: свойств name, surname в конструкторе; метода getInfo(), с помощью которого можно вывести одновременно имя и фамилию;
// Класс Singer наследует name, surname в конструкторе при помощи метода super и дополнительно принимает и дополняет конструктор свойствами: years, birth, style; 
// класс включает метод getInfo(), который переопределяет метод базового класса и расширяет его, отображая в консоль информацию о певце: years, birth, style. 
// Необходимо вызвать метод getInfo из 2 экземпляров worker, singer

// interface iWorker {
//     name: string;
//     surname: string;
//     getInfo(): void;
// }

// interface iSinger {
//     name: string;
//     surname: string;
//     getInfo(): void;
//     years: number;
//     birth: number;
//     style: string;
// }

// class Worker_ implements iWorker {
//     name: string;
//     surname: string;
//     constructor(name: string, surname: string) {
//         this.name = name;
//         this.surname = surname;
//     }

//     getInfo(): void {
//         console.log(this.name, this.surname);
//     }
// }

// class Singer extends Worker_ implements iSinger {
//     name: string;
//     surname: string;
//     years: number;
//     birth: number;
//     style: string;
//     constructor (name: string, surname: string, years: number, birth: number, style: string) {
//         super(name,surname);
//         this.years = years;
//         this.birth = birth;
//         this.style = style;
//     }

//     getInfo(): void {
//         super.getInfo()
//         console.log(this.years, this.birth, this.style);
//     }
// }

// const worker_ = new Worker_('Vlad', 'Gazuk');
// worker_.getInfo();

// const singer = new Singer('Vlad', 'Gazuk', 26, 1997, 'style')
// singer.getInfo()



// 2. Реализуйте класс NumberArray. NumberArray хранит функцию showArr, которая заполняет и возвращает массив из 5 рандомных элементов. 
// Класс ConsoleArray является производным по отношению к базовому, родительскому NumberArray и содержит функцию showArr. 
// Необходимо переопределить showArr из базового класса и записать в переменную используя метод super. Далее дополняем переопределенный метод отображением результата в console.

// interface iNumberArray {
//     showArr: Array<number | string> | void
// }

// interface iConsoleArray {
//     showArr: Array<number | string> | void
// }

// class NumberArray implements iNumberArray {
//     showArr(): Array<number | string> {
//         const arr: Array<number | string> = [];
//         let i: number = 0;
//         while (i < 5) {
//             arr.push(Math.floor(Math.random() * 10))
//             i++
//         }
//         return arr;
//     }
// }

// class ConsoleArray extends NumberArray implements iConsoleArray {
//     showArr(): void {
//         let result: Array<number | string> = super.showArr()
//         console.log(result);
//     }
// }

// const numberArray = new NumberArray()
// const consoleArray = new ConsoleArray()

// console.log(consoleArray.showArr());



// 3. Реализуйте класс NumberArray. NumberArray хранит функцию sumArr, которая заполняет и возвращает массив из 5 рандомных элементов. 
// Класс ConsoleArray является производным по отношению к базовому, родительскому NumberArray и содержит функцию sumArr. 
// Необходимо переопределить sumArr из базового класса записав в переменную используя метод super. 
// Далее посчитать сумму всех элементов массива

// interface iNumberArray {
//     sumArr() : Array<number | string> | number;
// }

// interface iConsoleArray {
//     sumArr() : Array<number | string> | number;
// }

// class NumberArray implements iNumberArray {
//     sumArr(): Array<number | string> | number {
//         let arr: Array<number | string>  = [];
//         for (let i = 0; i < 5; i++) {
//             arr.push(Math.floor(Math.random() * 10))
//         }
//         return arr;
//     }
// }

// class ConsoleArray extends NumberArray implements iConsoleArray {
//     sumArr(): Array<number | string> | number {
//         const result: Array<number | string> | number = super.sumArr()
//         const sum: number = result.reduce((sum, el) => sum + +el, 0);
//         return sum;
//     }
// }

// const consoleArray = new ConsoleArray();
// console.log(consoleArray.sumArr());