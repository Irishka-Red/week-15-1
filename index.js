//Задание 1
// Выведите числа от 1 до 10 в консоль
let number = 1;
while (number<=10){
    console.log(number);
    number+=1;
}

//Задание 2
// Выведите чётные числа от 1 до 20 в консоль
for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
      console.log( i );
    }
  }
  
//Задание 3
// Выведите числа от 10 до 1 в консоль в обратном порядке
let num = 10;
while (num>=1){
    console.log(num);
    num-=1;
}

//Задание 4
// Выведите таблицу умножения на 5 от 1 до 10
let element = 1;
while (element<=10){
    console.log(element*5);
    element+=1;
}

//Задание 5
// Вычислить сумму чисел от 1 до 100 и вывести значение в консоль
let res = 0;
for (let i = 1; i <= 100; i++) {
	res = res + i;
}
console.log(res);

//Задание 6
// Выведите все элементы массива в консоль используя цикл for
const array = [1, 2, 3, 4, 5];
for (let i=0; i<array.length; i+=1){
    console.log(array[i]);
}

//Задание 7
// Выведите сумму всех элементов массива используя цикл for
const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i<numbers.length; i++){
    sum+=numbers[i];
}
console.log(sum);

//Задание 8
// Напишите цикл for, который изменяет массив животных, делая их прекрасными! Например, если есть следующий массив: let animals = ["Кот", "Рыба", "Лемур"]; цикл должен сделать его таким: ["Кот - прекрасное животное", "Рыба - прекрасное животное", "Лемур - прекрасное животное"]
// Подсказка: вам понадобится переприсвоить значения для каждого индекса, то есть присвоить новые значения уже суще- ствующим элементам: animals[0] = animals[0] + " - прекрасное животное";
let animals = ["Кот", "Рыба", "Лемур"];
for (let i = 0; i< animals.length; i++){
animals[i] = animals[i] + " - прекрасное животное";  
}
console.log(animals);

//Задание 9
// Выведите символы в строке в консоль
const str = 'Hello';
for (let symbol of str){
    console.log(symbol);
}

//Задание 10
// Выведите все элементы массива в консоль используя цикл for...of. Массив array объявлен в Задании 6
for (let arr of array){
    console.log(arr);
}

//Задание 11
// Выведите каждое слово из массива строк в консоль
// Подсказка: вам понадобится метод массивов split
const sentences = ['Hello, world!', 'How are you?'];
for (i=0; i<sentences.length; i++){
    const arr = sentences[i].split(' ');
    for (j=0; j<arr.length; j++){
    console.log(arr[j]);
}
}

//Задание 12
// Выведите сумму всех элементов массива используя цикл for..of. Массив numbers объявлен в Задании 7
let sum1 = 0;
for (let number of numbers){
    sum1+=number; 
}
console.log(sum1); 

//Задание 13
// Выведите длину каждого слова из массива строк в консоль
const list = ['apple', 'banana', 'cherry'];
for (let element of list){
    console.log(element.length);
}

//Задание 14
// Преобразуйте массив каждый элемент массива words в верхний регистр
const words = ['Hello', 'world', '!'];
for (let i=0; i<words.length; i++){
    const word = words[i];
    const normalizedWord = word.toUpperCase();
    words[i]=normalizedWord;
}
console.log(words);

//Задание 15
// Подсчитайте количество гласных букв в строке
// Подсказка: вам понадобится метод includes
const greeting = 'Hello, world!';
let vowelCount = 0;
const vowels = ['a', 'e', 'i', 'o', 'u'];
for (i=0; i<greeting.length; i++){
    if (greeting[i]==='a'||greeting[i]==='e'||greeting[i]==='i'||greeting[i]==='o'||greeting[i]==='u'){
        vowelCount++;  
    }
}
console.log(vowelCount);

//Задание 16
// Объедините все строки массива в одну строку с пробелами между ними
//const words = ['Hello', 'world', '!'];
const normalizedWords = words.join(' ');
console.log(normalizedWords);

//Задание 17
// Выведите числа от 1 до 10 в консоль используя цикл while
let numb = 1;
while (numb<=10){
    console.log(numb);
    numb++
}

//Задание 18
// Выведите числа от 1 до 10 в консоль в обратном порядке используя цикл while
let numbr = 10;
while (numbr>=1){
    console.log(numbr);
    numbr-=1;
}

//Задание 19
// Проверьте, все ли элементы массива являются положительными числами используя цикл while
// Подсказка: используйте директиву break
const allNumbers = [1, 2, 3, -4, 5];
let allPositive = true;
function checkPositiveNumbers(allNumbers){
    let i = 0;
    while (i<allNumbers.length){
        if (allNumbers[i]<=0){
            return false
        }
        i++
    }
    return true
}
console.log(checkPositiveNumbers(allNumbers));

//Задание 20
// Выведите значения элементов массива до первого отрицательного числа используя цикл do...while
const random = [2, 4, 6, -3, 8, 10];
function printArrayUntilNegative(random){
    let i = 0;
    do {
        console.log(random[i]);
        i++;
    } while (i<random.length&&random[i]>0);
}
printArrayUntilNegative(random);

//Задание 21
// Выведите числа от 1 до 100, пропуская числа, которые делятся на 3 используя цикл do...while
    let k = 1;
    do {
        if (k%3!==0){
            console.log(k);  
        }
        k++;
    } while (k<=100);

//Задание 22
// Запросить у пользователя числа, пока сумма введенных чисел не станет больше 100
let sum2 = 0;
while (sum2<=100){
    let number = parseInt(prompt("Введите число:"));
    sum2+=number;
}
console.log("Сумма введенных чисел больше 100.");

//Задание 23
// Напишите функцию, которая изменит фоновый цвет всех элементов <h4> на странице на синий цвет
function changeTheBackgroundColor (){
    let element = document.getElementsByTagName("h4");
    for (let i=0; i<element.length; i++){
        element[i].style.backgroundColor = "blue";
    }
}
changeTheBackgroundColor ()

//Задание 24
// Напишите генератор случайных строк до 6 символов
// Подсказка: используйте методы объекта Math и длину массива alphabet

function generateRandomString(){
    let alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя'; 
    let randomString = '';
    for (let i=0;i<6; i++){
        let randomIndex = Math.floor(Math.random()*alphabet.length);
        randomString+=alphabet.charAt(randomIndex);
    }
    return randomString;
}
let randomString = generateRandomString();
console.log(randomString);