// Find the area of a trianlge where theree side are 5, 6 and 7

// let a = 5;
// let b = 6;
// let c = 7;

// let s = (a + b + c) / 2;
// console.log(s);

// var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
// console.log(area);

// Write a JavaScript program to rotate the string 'w3resource'
// in the right direction. This is done by periodically removing one
// letter from the string end and attaching it to the front

// function rotateStringRight(string) {
//   let rotation = 0;
//   let totalRotation = string.length;

//   let intervalId = setInterval(() => {
//     string = string[string.length - 1] + string.slice(0, -1);
//     console.log(string);
//     rotation++;
//     if (rotation == totalRotation) {
//       clearInterval(intervalId);
//       return;
//     }
//   }, 1000);
// }

// // Example usage
// rotateStringRight("w3resource");

// function checkLeapYear(year) {
//   return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
// }
// console.log(checkLeapYear(2000));
// console.log(checkLeapYear(1904));

// function checkLeapYear(year) {
//   if (year % 4 == 0) {
//     if (year % 100 == 0 && year % 400 == 0) {
//       return true;
//     } else {
//       return false;
//     }
//   } else {
//     return false;
//   }
// }
// console.log(checkLeapYear(2000));
// console.log(checkLeapYear(1900));

// function fetchDate() {
//   var today = new Date();
//   var daysOfWeek = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//   ];
//   var weekDay = daysOfWeek[today.getDay()];
//   console.log("Today is :", weekDay);

//   var hours = today.getHours();
//   var minutes = today.getMinutes();
//   var seconds = today.getSeconds();
//   let ampm = hours >= 12 ? "PM" : "AM";

//   let hour = hours > 12 ? hours - 12 : hours;
//   if (hour === 0 && ampm == " PM ") {
//     if (minutes == 0 && seconds == 0) {
//       hour = 12;
//       ampm = "NOOn";
//     }
//   }

//   if (hour === 0 && ampm == " AM ") {
//     if (minutes == 0 && seconds == 0) {
//       hour = 12;
//       ampm = "Midnight";
//     }
//   }

//   console.log(hour + " " + ampm);
// }

// fetchDate();

// check that sunday falls on 1 january between year of 2014 to 2050
// for (year = 2014; year <= 2050; year++) {
//   var date = new Date(year, 0, 1);
//   if (date.getDay() == 0) {
//     console.log(year);
//   }
// }

// let randomNumber = Math.floor(Math.random() * 10);
// console.log(randomNumber);
// let x = prompt("Enter a number");
// if (x == randomNumber) {
//   console.log("Good Work");
// } else {
//   console.log("Bad work");
// }

// write a javacript program to calculate the days left before the christmas
// var today = new Date();

// let christmas = new Date(today.getFullYear(), 11, 25);
// console.log(christmas);
// if (today.getMonth() === 11 && today.getDate() > 25) {
//   christmas.setFullYear(christmas.getFullYear() + 1);
// }
// let oneDay = 60 * 60 * 24 * 1000;
// let result = Math.floor((christmas.getTime() - today.getTime()) / oneDay);
// console.log(result);

// let x = prompt("Enter temperature in farenheit");

// let temp = (x * 9) / 5 + 32;

// console.log(temp);
