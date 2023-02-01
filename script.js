// 1

let i = 0;

while (i <= 1) {
    console.log("Привет");
    i++;
}

// 2

for (let a = 1; a < 6; a++) {
    console.log(a);
}

// 3
let number = 7;

do { console.log(number);
    number++;
} while (number<=22);

// 4

let obj = {
    'Коля': '200',
    'Вася': '300', 
    'Петя': '400'
}

for (let key in obj) {
        console.log(key + " — зарплата " + obj[key] + " долларов.")
    }


// 5

let c = 1;
let n = 1000;
let result = 1000;

while (result >=50) {
    result = n / c;
    c++;
}

console.log (`Получится число. меньше 50, это число ${result} количество итераций ${(c-1)}`)

// 6

let fridayDate = 6;
while (fridayDate <= 31) {
    console.log(`Сегодня пятница, ${fridayDate}-е число. Необходимо подготовить отчет.`);
    fridayDate = fridayDate + 6;
}
