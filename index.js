// let userName = prompt("Введшть ваше ім'я");

// console.log(userName);

// alert('Привіт, '+ userName)

// const currentYear = new Date().getFullYear();
// console.log(currentYear);

// const userYearBD = prompt('Введіть ваш рік нвродження:')

// const userAge = currentYear - userYearBD;

// alert(userName +',' + 'Вам' + userAge + '!')

// let tenYears = userAge + 10;
// alert(userName + ',' + 'Через 10 років вам буде' + tenYears + '!' )

// const num1 = prompt('Enter first numver')
// const num2 = prompt('Enter second number')
// if (num1 > num2) {
//     alert(num2 + ' - bigest');
// }else if (num2 > num1) {
//     alert(num2 + ' - bigest')
    
// } else {
//     alert('Equal');
// }

// const number7 = 654;
// const remainder7 = number7 % 7;
// if (remainder7===0) {
//     console.log('multiply 7');
    
// } else {
//     console.log('not multiply');
    
// }

// const userAgeInput = prompt('Enter your age');
// const startSchoolAge = 6;
// const endSchoolAge = 17;

// const userAge = Number(userAgeInput);
// if (userAge>=startSchoolAge <=endSchoolAge) {
//     alert('school')
// } else {
//     alert('not school')
// }

// const count = promt('Введіть число');
// const remainder1 = count%7 ;
// const remainder2 = count%3 ;
// if (remainder1 === 0 && remainder2 ===0) {
//     alert('win')
// } else {
//     alert('loss')
// }

// const userInput = prompt('Enter number');
// console.log(userInput);
// const userNumber = Number(userInput);
// console.log(userNumber);

// const error1 = userInput === null;
// const error2 = userInput === '';
// const error3 = Number.isNaN(userNumber);

// if (error1 || error2 || error3) {
//     alert('Error.\n' + userInput +' - not a number!!!')
// } else {
//    alert('thanks');
// }

// const userInput1 = prompt('Enter number 1');
// const userInput2 = prompt('Enter number2');
// const number1 = Number(userInput1)
// const number2 = Number(userInput2)
// if (number1 > 0 && number > 0) {
//     alert('позитовні');
// } else if(number1 < 0 && number2 < 0) {
//     alert('негативні');
// }
//  else {
//     alert('різні зі знаком');
// }

// const summa = prompt('Enter summa')
// const minSumma = 1000;
// const delivery = (Number(summa) > minSumma) ? 0 : 50;
// // if (Number(summa)> minSumma) {
// //     delivery = 0;
// // } else {
// //    delivery = 50; 
// // }
// alert('до сплати = '+ (Number(summa) + delivery))

// const nummber = promt('Enter number');
// let wordEvenOdd =(Number(numver)%2===0) ?'even' : 'odd';
// alert(number + ' ' + wordEvenOdd)

// const priceTicket = 100;
// const userAgeInput = prompt('Enter your age');
// const userAge = Number(userAgeInput);
// const sale =Number(userAge<18 || userAge>65 ) ? 10 :0;
// const summaCheck = priceTicket - (priceTicket*sale/100);
// alert(summaCheck)