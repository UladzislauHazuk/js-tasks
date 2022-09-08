// Навходестатичныйобъект.Необходимовывестивсечетныезначенияобъекта.

const obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
};

for (const key in obj) {
    if (obj[key] % 2 === 0) {
        console.log(obj[key]);
    }
}