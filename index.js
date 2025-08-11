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

// const number = prompt('Enter your number');// 10 -30
// if (Number(number) >= 10 && Number(number) <=30) {
//     alert('Okay,thank you')
// } else {
//     alert('No,please enter another number')
// }
// if (Number(number)<10 || Number(number)>30) {
//     alert('No,please enter another number')
// } else {
//     alert('Okay,thank you')
// }
// const result = (Number(number)<10 || Number(number)>30) ?  'No': 'Yes'
// alert(result)

// const speedCar = prompt('Please enter the speed')
// console.log('більше 120 = штраф . від 60 до 120 = нормально . меньше 60 = можно швидше');

// if (speedCar > 120) {
//     alert('penalty')
// } else if(Number(speedCar) >= 60 ) {
//     alert('normal')
// } else {
// alert('Can go faster')
// }

// const result = prompt('Please enter something') ? 'Thank you' : 'Very sad'
// alert(result)

// const number = prompt('Please enter number')
// if (Number(number) % 2 === 0)  {
//     alert('Even')
// } else {
//     alert('Odd')
// }
// const result = (Number(number) % 2 === 0) ? 'Even' : 'Odd'
// alert(result)

// const userInput1 = prompt('Please enter something')
// const userInput2 = prompt('Please enter something')
// const result = (userInput1 === userInput2) ?'The same' : 'Not the same'
// alert(result)

// const number = prompt('Please enter number')
// const result = (number % 3 === 0 && number % 7 === 0) ? 'Win' : 'Lose'
// alert(result)

// const subjest1 = 12
// const subjest2 = 10
// const subjest3 = 8
// const avarage = ((subjest1 + subjest2 + subjest3) / 3)
// if (avarage >= 10) {
//     alert("Amazing")
// } else if(avarage >= 5 ) {
//     alert('Good')
// }else {
//  alert('Bad')
// }

//  const message = 'Enter message in your language '

// const lang = prompt(message);

// switch (lang) {
//     case 'ua':
//     case '1':
//     case 'українська' :       
//         alert('привіт');
//         break;
//     case 'en':
//     case '2':
//     case 'англійска' :     
//         alert('hi');
//         break;
//     case 'pl' :
//     case '3' :
//     case 'польска' :      
//         alert('czesc');
//         break;
//     case  'es' :
//     case '4' :
//     case 'іспаньска' :     
//         alert('hola'); 
//         break;
//     case 'fr'  : 
//     case '5' :
//     case 'французька' :  
//         alert('bonjour');    
//         break;
//     default:
//          alert('language unavailable');
//          break;
// }
        


// if (lang === 'ua' || lang === '1' || lanf === 'українська') {
//     alert('привіт');
// } else if (lang === 'en' || lang === '2' || lanf === 'англійска') {
//     alert('hi');    
// } else if (lang === 'pl' || lang === '3' || lanf === 'польска') {
//     alert('czesc');
// } else if (lang === 'es' || lang === '4' || lanf === 'іспаньска') {
//     alert('hola');
// }  else if (lang === 'fr' || lang === '5' || lanf === 'французька') {
//     alert('bonjour');
// }   else  {
//     alert('language unavailable');
// }
    

// const dayOfWeek = prompt('Enter a number from 1 to 7');
// const message = dayOfWeek + 'it is' ;
// switch (dayOfWeek) {
//     case '1':
//         alert(message + ' Monday')
//         break;
//      case '2':
//         alert(message + ' Tuesday')
//         break;
//     case '3':
//         alert(message + ' Wednesday');
//         break;
//     case '4' :
//         alert(message + ' Thursday');
//         break;
//     case  '5' :
//         alert(message + ' Friday'); 
//         break;
//     case '6'  : 
//         alert(message + ' Saturday');    
//         break;
//     case '7'  :
//         alert(message + ' Sunday') ; 
//     default:
//         alert('This day of the week is not real')
//         break;
// }

// const userInput1 = prompt('Enter first number');
// const userInput2  = prompt('Enter second number');

// const number1 = Number(userInput1);
// const number2 = Number(userInput2);

// const operator = prompt('Enter operator :  +, -, * , / , % ');

// switch (operator) {
//     case '+':{
//          const result = number1 + number2;
//         alert( number1 + '+' + number2 + '=' + result);
//         break;
//     }
//     case '-':{
//          const result = number1 - number2;
//         alert( number1 + '-' + number2 + '=' + result);
//         break;
//     }   
//     case '*':{
//          const result = number1 * number2;
//         alert( number1 + '*' + number2 + '=' + result);
//         break;
//     }
//     case '/':{
//          const result = number1 / number2;
//         alert( number1 + '/' + number2 + '=' + result);
//         break;
//     }
//     case '%':{
//          const result = number1 % number2;
//         alert( number1 + '%' + number2 + '=' + result);
//         break;
//     }
//     default:
//         alert('operator doesnt exists');
//         break;
// }

// console.group('1 task');
// const age = prompt('Please enter age')
// const userAge = Number(age)
// const message = userAge >= 18 ? 'You are adult' : 'You are child'
// alert(message)
// console.groupEnd();

// console.group('2 task')

// const userAgeInput = prompt('Enter your age');
// const userAge = Number(userAgeInput);
// if (userAge < 0){
//     alert('this age dont exist');
// } else if (userAge < 12) {
//     alert('child');
// } else if(userAge < 18 ) {
//     alert('teen');
// } else if (userAge < 65 ){
//     alert('adult');
// } else {
//     alert('old');
// }

// console.groupEnd();

// console.group('3 task')

// const userHourInput = prompt('what is the time?')
// const userHour = Number(userHourInput)
// if ((userHour>=0 && userHour < 5) || (userHour >= 22 && userHour < 24)) {
//     alert('Good night');
// } else if(userHour>=5 && userHour<11) {
//     alert('good morning');
// } else if(userHour >= 11 && userHour < 18) {
//     alert('good day');
// } else if(userHour >= 18 && userHour < 22) {
//     alert('good evening');    
// } else {
//     alert('This hour doesnt exist');
// }

// console.groupEnd();

// console.group('4 task')
// const enterTime1 = prompt('Enter an hour');
// const userHour = Number(userHourInput);

// const allTime  = userHour >= 9 && userHour <= 17 ? 'works ' : 'doesnt work';
// alert('Bank' +  allTime );

// console.groupEnd();

// console.group('5 task')

// const userInput = prompt('Enter the number of the month')
// switch (userInput) {
//     case '1':
//         alert('January');
//         break;
//     case '2':
//         alert('February');
//         break;
//     case '3':
//         alert('March');
//         break;  
//     case '4':
//         alert('April');
//         break;
//     case '5':
//         alert('May');
//         break; 
//     case '6':
//         alert('June');
//         break;
//     case '7':
//         alert('July');
//         break;
//     case '8':
//         alert('August');
//         break;
//     case '9':
//         alert('September');
//         break;
//     case '10':
//         alert('October');
//         break;
//     case '11':
//         alert('November');
//         break;
//     case '12':
//         alert('December');
//         break;                                     
//     default:
//         alert('error')
//         break;
// }

// console.groupEnd();

// console.group('6 task')


// const userInput = prompt('Enter the number of the month')
// switch (userInput) {
//     case '1':
//     case '2':
//     case '12':        
//         alert('Winter');
//         break;
//     case '3':
//     case '4':
//     case '5':        
//         alert('Sprint');
//         break;
//     case '6':
//     case '7':
//     case '8':        
//         alert('Summer');
//         break;  
//     case '9':
//     case '10':
//     case '11':        
//         alert('Autumn');
//         break;
//     default:
//         alert('error')
//         break;
// }
// console.groupEnd();

// let amountPlate = 3;

// while (amountPlate>0) {
//   console.log('washing plate' , amountPlate) ;
//   amountPlate--;
// }

// let amountPlate = 0;
// const totalAmountPlate =5;
// while (amountPlate < totalAmountPlate) {
//     amountPlate++;
//     console.log('washing plate' , amountPlate);
// }

// while (true) {
//    const userInput = prompt('enter number 77') ;
//    if (userInput === '77') {
//     alert('thanks');
//     break;
//    }
// }

// while (true) {
//     const userInput = prompt('enter number multiply 7');
//     const userNumber = Number(userInput)
//     if (userNumber %7 ===0 && userInput!=='' && userInput!==null) {
//         alert('thanks')
//         break;
//     }
// }
// while (true) {
//     const userInput = prompt('Enter number 0');
//     if (userInput=='0') {
//         alert('thanks');
//         break;
//     }
// }

// while (true) {
//     const userInput = prompt('enter something');
//     if (userInput) {
//         alert('thanks' + userInput);
//         break;
//     }
// }

// const secretNumber = 4
// while (true) {
//     const userInput = prompt('enter number');
//     const userNumber = Number(userInput);
//     if (userInput==='' || userInput===null || Number.isNaN(userNumber)) {
//         alert('error , enter a number');
//     } else if(userNumber > secretNumber) {
//         alert('secret number is less');
//     } else {
//         alert('secret number is bigger');
//     }
// }

// користувач вводить початкове значеня - число
// потім він вводить знаки або + або -
// ми залежно від цих знаків робимо інкремент або дікремент
// це все продовжуються до того доки користувач не натисне відміну

// const numberUser = prompt('Please enter number')
// let number = Number(numberUser)
// while (true) {
//     const operator = prompt('Enter + or -')
//     if (operator === null) {
//         break;
//     } else if(operator === '+') {
//         number++
//         console.log(number)
//     } else if(operator === '-') {
//         number--
//         console.log(number);
        
//     }
// }

// console.log('просимо користувача ввести три числа кратних 7якщо вводять числа не кратні сіми, то ми їх не рахуємо');
//     let score = 0
// while (true) {
//     const numberUser = prompt('Please enter multiple of 7')
//     const number = Number(numberUser)
//     if ( number % 7 === 0) {
//         score++ 
//         console.log(score);
           
//     }
//     if (score === 3) {
//         break;
//     }
// }

// console.log('Попроси користувача вводити "так" або "ні", поки не введе "стоп". Порахуйте, скільки було "так" і скільки "ні".');
// let scoreYes = 0
// let scoreNo = 0
// while (true) {
//     const userInput = prompt('Please enter yes or no')
//     if (userInput === 'stop') {
//        break;  
//     }
//     if (userInput === 'yes') {
//         scoreYes++
//     }
//     if (userInput === 'no') {
//         scoreNo++
//     }

// }
// console.log('Yes = ' , scoreYes , 'No = ' , scoreNo );

// let score = 0
// while (true) {
//     score++
//     console.log(score);
//     if (score >= 5) {
//        break; 
//     }
    

// }
// console.log('3 -> 9
// 4 -> 16
// 5 -> 25
// 6 -> 36
// 7 -> 49
// 8 -> 64
// 9 -> 81');

// let score = 2
// while (true) {
//     score++
//     console.log(score , '->' ,score  * score);
//     if (score >=9) {
//        break;
// } 
//     }
    

// let score = 2
// while (score < 9) {
//     score++
//     console.log(score , '->' ,score  * score);
   
//     }
    
let score = 0
while (score < 5) {
    score++
    console.log(score);
}
