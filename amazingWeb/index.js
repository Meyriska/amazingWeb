// Здесь переменные и условные операторы чуть-чуть
/* 
let n = 100;
let online = true;
let user = prompt(`Введи что-то`);
let age = 0;
let name = ``;
let married = false;

console.log(typeof n);
console.log(`i like pizza`);
console.log(`You are online: ${online}`);
let user_data = user.split(`,`);
console.log(`Мое имя ${user_data[0]}, возраст ${user_data[1]}, зп ${user_data[2]}`)
console.log(user_data)

if (user_data[2] >= 3000 && user_data[1] >= 30 && user_data[0]==`Петя`) {
    console.log(`Поздравлякаю тебя🎉🎉🎉`);
}
else if (user_data[0]==`Петя`) {
    console.log(`Ноу,Ноу,Ноооу,Мистер Фиш`);
}
else {
    console.log(`печалька😭`);
}
 */

// алерты
/*
window.alert(`This is an alert`);
window.alert(`I like pizza!`); 
*/

// знакомство с textContent
/* 
document.getElementById("myH1").textContent = `Hello`;
document.getElementById("p1").textContent = Math.sqrt(36);
document.getElementById("p2").textContent = `I like pizza ${100} times`;
 */

// document.getElementById("p3").textContent = `ты ввёл или ввела ${user}`;

//  чуть-чуть арифметических операторв
/* 
let students = 30;
students = students ** 2; 
students -= 2;
students --;
students ++;
console.log(students) 
*/

// Находим выпадающий список
const themeSelect = document.getElementById('theme-select');
themeSelect.addEventListener('change', (event) => {
  const selectedTheme = event.target.value;
  document.body.setAttribute('data-theme', selectedTheme);
  localStorage.setItem('user-theme', selectedTheme);
});

const savedTheme = localStorage.getItem('user-theme');
if (savedTheme) {
  document.body.setAttribute('data-theme', savedTheme);
  themeSelect.value = savedTheme; // Меняем выбранную опцию в списке
}



// чуть-чуть работа с html и инпутом

document.getElementById("submit").onclick = function(){
    un = document.getElementById("text_input").value;
    document.getElementById("p2").textContent = `пользователь ${un}`;
    console.log(un);
    document.getElementById("H2").textContent = `Привет ${un}`
};

// type conversation (Number, String, Boolean)
/* 
let age;
age = 25;
age = Number(age);
age +=1;
console.log(age, typeof age);
 */

// const
/* 
const PI = 3.14;
let h;
h = PI
console.log(h)
 */

// project counter program

const decreaseBt = document.getElementById("decrease_bt");
const increaseBt = document.getElementById("increase_bt");
const resetBt = document.getElementById("reset_bt");
const countLabel = document.getElementById("pr1_label_1");
let count = 0;
increaseBt.onclick = function(){
    count++;
    countLabel.textContent = count;
};
decreaseBt.onclick = function(){
    count--;
    countLabel.textContent = count;
};
resetBt.onclick = function(){
    count = 0;
    countLabel.textContent = count;
};


// math
/* 
console.log(Math.PI);
console.log(Math.E);
console.log(Math.round(3.21));
console.log(Math.ceil(3.00001));
console.log(Math.floor(3.9999));
console.log(Math.trunc(3.56));
console.log(Math.pow(2, 5));
console.log(Math.sqrt(25));
console.log(Math.log(25));
console.log(Math.sin(Math.PI/2));
console.log(Math.cos(25));
console.log(Math.tan(25));
console.log(Math.abs(-25));
console.log(Math.sign(0));
console.log(Math.max(25, 45, 100));
console.log(Math.min(-25, -45, -100));
 */

// Math.random()
/* 
const min = 50;
const max = 100;
let randomNum = Math.floor(Math.random() * (max - min)) + min;
console.log(randomNum);
 */

// project random

const roll = document.getElementById("roll");
const interesting_thing = document.getElementById("pr2_label_1");
const min = 1;
const max = 6;
let randomNum;

roll.onclick = function(){
    randomNum = Math.floor(Math.random() * max) + min;
    interesting_thing.textContent = randomNum;
};

// условный оператор || - или, && - и, ! - не
/* 
let x = 0;
let y = 0;
if (x == 0 && y == 1) {
    console.log(x, y)
}
else {
    console.log(`вот такая фигня, собачка`)
};
 */

// циклы на паре
/* 
console.log(`циклыыы`)
for (let i = 0; i < 5; i++) {
    console.log(i);
};
console.log(`Конец цикла`);

let lunch = [100, 120, 350, 200]

let result = 0;
for (let i = 0; i < lunch.length; i++) {
    console.log(lunch[i]);
    result += lunch[i]
};
console.log(`Конец цикла, итого: ${result}`);

for (let item of lunch) {
    console.log(item);
};


let lunch_pr  = prompt(`перечисли ланч типа чикен:250,чикен:500`);
let lunch_name = [];
let lunch_price = [];
lunch_pr = lunch_pr.split(`,`);
console.log(lunch_pr);
for (let [index, item] of lunch_pr.entries()){
    let lunch_pr_1 = item.split(`:`);
    console.log(lunch_pr_1);
    lunch_name.push(lunch_pr_1[0]);         
    lunch_price.push(Number(lunch_pr_1[1]));

};
console.log("Имена:", lunch_name);
console.log("Цены:", lunch_price);

 */



// checked property

const CheckBox = document.getElementById("checkBox");
const stitchBtn = document.getElementById("stitchBtn");
const toothlessBtn = document.getElementById("toothlessBtn");
const minionBtn = document.getElementById("minionBtn");
const SbmBtn = document.getElementById("SbmBtn");
const subResult = document.getElementById("subResult");
const Result = document.getElementById("Result");
 
SbmBtn.onclick = function(){
    if(CheckBox.checked){
        subResult.textContent = `Куда тыкаешь?`
        if(stitchBtn.checked){
            Result.textContent = `Алоха! Эксперимент 626 активен! Создатель одобряет! И Охана - значит семья, где никого не бросают и не забывают. Ты моя Охана!`;
        }
        else if(toothlessBtn.checked){
            Result.textContent = `Ты теперь Ночная Фурия. Твоя главная задача - выглядеть как грозный альфа-самец и кушать много вкусняшек!`;
        }
        else if(minionBtn.checked){
            Result.textContent = `Bello! Кинг Боб банана пука-ка! Тю ли ля ла бэ-э-э-на-на! Короче, твой план захвата мира идеален, даже если ты кушаешь сейчас чипсики на диване.`;
        }
        else{
            Result.textContent = `Тыкни что-то`;
        }
    }
    else{
        subResult.textContent = `Ты не тыкнул... ( -_- )( -_- )( -_- )`;
    };

}; 


// functions

let a = 10;
let b = 4;
function whatever(a, b){
    console.log(`hello ${a*b}`);
};

whatever();
whatever(a, b);

let textBtn = document.querySelector("#txt_btn");
let textInput = document.querySelector("#txt1");
// let textInput_el = document.getElementById("txt1");
let txt_label = document.querySelector("#txt_label");

textBtn.onclick = onBtnClick;
let counter = 0;

function onBtnClick(event){
    if (counter == 0){
        console.log(`Хорошо жмякнул`);
        console.log(textInput.value);
        txt_label.textContent = `Ты зачем напечатал ${textInput.value}?`;
        textBtn.innerText = `тык ещё раз`;
        counter++;
        console.log(counter);
    }
    else if(counter == 1){
        console.log(`Убрал пробелы`);
        console.log(textInput.value.replaceAll(" ", ""));
        txt_label.textContent = `Убрал пробелы`;
        // textInput.value.trim();
        textInput.value = textInput.value.replaceAll(" ", "");
        counter++;
        console.log(counter)
       
    }
    else if(counter == 2){
        console.log(`Стираю твоё жмяканье`);
        console.log(textInput.value);
        txt_label.textContent = `Я стёр твоё ${textInput.value}`;
        textBtn.innerText = `низзя теперь`;
        // textInput.value.trim();
        textInput.value = "";
        counter++;
        console.log(counter)
    }
    else if(counter == 3){
        console.log(`Низзя`);
        console.log(textInput.value);
        txt_label.textContent = `Сказала же, что низзя`;
        textBtn.innerText = `низзя теперь`;
        // textInput.value.trim();
        textInput.value = "";
        console.log(counter)
       
    };
};



// доп игрушка 2

function calc(){
    // 1. Находим текстовые поля ввода
    let textRa = document.querySelector("#dop_2_1");
    let textRb = document.querySelector("#dop_2_2");
    let textC = document.querySelector("#dop_2_3");
    // 2. Находим новые уникальные селекторы единиц измерения
    let unitRa = document.querySelector("#unit-select-ra");
    let unitRb = document.querySelector("#unit-select-rb");
    let unitC = document.querySelector("#unit-select-c");
    // Читаем числа из полей ввода
    let Ra = parseFloat(textRa.value);
    let Rb = parseFloat(textRb.value);
    let C = parseFloat(textC.value);
    // Если какое-то поле не заполнено, прекращаем расчет
    if (isNaN(Ra) || isNaN(Rb) || isNaN(C)) {
        document.querySelector("#dop_2_label").textContent = "Заполните все поля.";
        return;
    }
    // 3. Переводим резистор Ra в Омы
    if (unitRa.value === "кОм") {
        Ra = Ra * 1000;
    } else if (unitRa.value === "МОм") {
        Ra = Ra * 1000000;
    }
    // 4. Переводим резистор Rb в Омы
    if (unitRb.value === "кОм") {
        Rb = Rb * 1000;
    } else if (unitRb.value === "МОм") {
        Rb = Rb * 1000000;
    }
    // 5. Переводим емкость C в Фарады
    let multiplierC = 1;
    if (unitC.value === "нФ") {
        multiplierC = 1e-9;  
    } else if (unitC.value === "пФ") {
        multiplierC = 1e-12; 
    }
    let C_farads = C * multiplierC;
    // 6. Считаем частоту, R1, R2 по стандартной формуле NE555
    let f = 1.44 / ((Ra + 2 * Rb) * C_farads);
    let D = 0.7;
    // Форматируем вывод частоты (если герц очень много, можно перевести в кГц)
    let resultText = "";
    if (f >= 1000) {
        resultText = `${(f / 1000).toFixed(2)} кГц`;
    } else {
        resultText = `${f.toFixed(2)} Гц`;
    }
    
    
    document.querySelector("#dop_2_label").textContent = resultText;
};

function calc2(){
    let text_2_Ra = document.querySelector("#dop_2-2-1");
    let text_2_Rb = document.querySelector("#dop_2-2-2");

    let unit_2_Ra = document.querySelector("#unit-select_2_-ra");
    let unit_2_Rb = document.querySelector("#unit-select_2_-rb");

    let Ra2 = parseFloat(text_2_Ra.value);
    let Rb2 = parseFloat(text_2_Rb.value);

    if (isNaN(Ra2) || isNaN(Rb2)) {
        document.querySelector("#dop_2_label-2").textContent = "Заполните все поля.";
        document.querySelector("#dop_2_label-2_2").textContent = "Заполните все поля.";
        return;
    }
    // Переводим резистор Ra в Омы
    if (unit_2_Ra.value === "кОм") {
        Ra2 = Ra2 * 1000;
    } else if (unit_2_Ra.value === "МОм") {
        Ra2 = Ra2 * 1000000;
    }
    // Переводим резистор Rb в Омы
    if (unit_2_Rb.value === "кОм") {
        Rb2 = Rb2 * 1000;
    } else if (unit_2_Rb.value === "МОм") {
        Rb2 = Rb2 * 1000000;
    }
    // Считаем частоту, R1, R2 по стандартной формуле NE555
    let D = 0.7;
    let R1 = (2 * D - 1) * (Ra2 + 2 * Rb2);
    let R2 = (1 - D) * (Ra2 + 2 * Rb2);
    // Форматируем вывод 
    let resultText1 = "";
    if (R1 >= 1000) {
        resultText1 = `${(R1 / 1000).toFixed(2)} кОм`;
    } else {
        resultText1 = `${R1.toFixed(2)} Ом`;
    }
    let resultText2 = "";
    if (R2 >= 1000) {
        resultText2 = `${(R2 / 1000).toFixed(2)} кОм`;
    } else {
        resultText2 = `${R2.toFixed(2)} Ом`;
    }
        
    document.querySelector("#dop_2_label-2").textContent = resultText1;
    document.querySelector("#dop_2_label-2_2").textContent = resultText2;
};

function calc3(){
    let text_2_R1 = document.querySelector("#dop_2-3-1");
    let text_2_R2 = document.querySelector("#dop_2-3-2");

    let unit_2_R1 = document.querySelector("#unit-select_2_-r1");
    let unit_2_R2 = document.querySelector("#unit-select_2_-r2");

    let R12 = parseFloat(text_2_R1.value);
    let R22 = parseFloat(text_2_R2.value);

    if (isNaN(R12) || isNaN(R22)) {
        document.querySelector("#dop_2_label-3").textContent = "Заполните все поля.";
        return;
    }
    // Переводим резистор R1 в Омы
    if (unit_2_R1.value === "кОм") {
        R12 = R12 * 1000;
    } else if (unit_2_R1.value === "МОм") {
        R12 = R12 * 1000000;
    }
    // Переводим резистор R2 в Омы
    if (unit_2_R2.value === "кОм") {
        R22 = R22 * 1000;
    } else if (unit_2_R2.value === "МОм") {
        R22 = R22 * 1000000;
    }
    // Считаем D по стандартной формуле NE555
    let D = (R12 + R22) / (R12 + 2 * R22) * 100;
    // Форматируем вывод 
    let resultText = "";
    resultText = `${D.toFixed(2)} %`;
       
    document.querySelector("#dop_2_label-3").textContent = resultText;
};


const calcSelect = document.getElementById('calc-select');
function updateCalcVisibility(selectedCalc) {
    const blockFrequency = document.getElementById('calc-block-frequency');
    const blockResistors = document.getElementById('calc-block-resistors');
    const blockDutyCycle = document.getElementById('calc-block-dutyCycle');
        
    if (blockFrequency) blockFrequency.style.display = 'none';
    if (blockResistors) blockResistors.style.display = 'none';
    if (blockDutyCycle) blockDutyCycle.style.display = 'none';

    if (selectedCalc === 'frequency' && blockFrequency) {
        blockFrequency.style.display = 'block';
    } 
    else if (selectedCalc === 'resistors' && blockResistors) {
        blockResistors.style.display = 'block';
    } 
    else if (selectedCalc === 'dutyCycle') {
        blockDutyCycle.style.display = 'block';
    }
}
calcSelect.addEventListener('change', (event) => {
  const selectedCalc = event.target.value;
  document.body.setAttribute('data-calc', selectedCalc);
  localStorage.setItem('user-calc', selectedCalc);
  updateCalcVisibility(selectedCalc);
});
const savedCalc = localStorage.getItem('user-calc');
if (savedCalc) {
  document.body.setAttribute('data-calc', savedCalc);
  calcSelect.value = savedCalc; // Меняем выбранную опцию в списке
  updateCalcVisibility(savedCalc);
}
else {
    updateCalcVisibility(calcSelect.value);
};






