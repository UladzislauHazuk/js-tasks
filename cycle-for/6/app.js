// На вход подается строка в виде электронной почты. Если строка содержит “@” и оканчивается на .com, .ru, то вывести true, иначе false

const a = prompt('Введите адрес электронной почты').trim();

if (a.includes('@') && (a.endsWith('.com') || a.endsWith('.ru'))) {
    console.log(true);
} else {
    console.log(false);
}