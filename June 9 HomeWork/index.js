// #1 Write a function that, when passed a certain number of inches, will print in the console the equivalent number of centimeters. An inch is 2.54 centimeters.

function convertToCentimeters(inches) {
  let centimeters = inches * 2.54;
  console.log(centimeters);
}
convertToCentimeters(3);
convertToCentimeters(10);

// #2 Write a function that determines if a passed in number is positive or negative and even or odd.
// I DON'T KNOW HOW TO DO THIS. I NEED MORE TIME TO THINK.

// #3 Write a function that calculates the ticket price for a passed in age with the following conditions: age below 12 pay a ticket price of 5, age below 18 pay a ticket price of 10, age below 60 pay a ticket price of 20, age over 60 pay a ticket price of 15.

function ticketPrice(age) {
  if (age < 12) {
    console.log("The ticket price is 5");
  } else if (age < 18) {
    console.log("The ticket price is 10");
  } else if (age < 60) {
    console.log("The ticket price is 20");
  } else if (age > 60) {
    console.log("The ticket price is 15");
  }
}
ticketPrice(78);
ticketPrice(17);
ticketPrice(55);
ticketPrice(6);

// #4 Write a function that determines and categorizes the body mass index (BMI) of an adult using pounds and inches. The formula for BMI using these is weight/height * height * 703. The categories are: BMI below 18.5 is Underweight; BMI between 18.5 and 24.9 is Healthy Weight. BMI between 25.0 and 29.9 is Overweight. BMI of 30.0 and above is Obese.
// The code is not working properly. I don't know where the mistake is.

function bodyMassIndex(weight, height) {
  let bmi = (weight / height) * height * 703;

  if (bmi < 18.5) {
    console.log("You are underweight");
  } else if (bmi > 18.5 && bmi < 24.9) {
    console.log("You are healthy weight");
  } else if (bmi > 25.0 && bmi < 29.9) {
    console.log("You are overweight");
  } else if (bmi > 30.0) {
    console.log("You are obese");
  }
}
bodyMassIndex(120, 6);
bodyMassIndex(230, 5.7);
bodyMassIndex(300, 5.4);

// #5 Write a function to sort 3 numbers from highest to lowest and print the sorted numbers to the console.

function biggestNum(a, b, c) {
  if (a > b && a > c) {
    console.log(" A is the biggest number");
  } else if (b > a && b > c) {
    console.log("B is the biggest number");
  } else if (c > a && c > b) {
    console.log("C is the biggest number");
  }
}
biggestNum(9, 3, 8);
biggestNum(2, 10, 14);

// # 6. Write a function that console.logs the sum of two arrays (the sum of all their elements). The arrays will only include integer numbers.
//I don't know about this one!

// let arr1 = [10, 12, 8];
// let arr2 = [5, 6, 9];
// function twoArraysSum(arr1, arr2) {
//   let sum = arr1 + arr2;
//   console.log(sum);
// }

// #7 7. Write a function to check if a string passed into the function contains the letter ‘s’. Print yes to the console if it does and no if it does not.
// I don't know how to code this one.
// function letterCheck(word) {
//   if (word.contains("s")) {
//     console.log("yes");
//   } else {
//     console.log("no");
//   }
// }
// letterCheck("stable");

// #8 Write a function that finds the summation of every number from 1 to a number passed into the function. The number passed in will always be a positive number greater than 0.
// I am not sure....

function sumOfNum(numb1) {
  let sum = 0;
  for (let i = 1; i <= numb1; i++) {
    sum += i;
  }
  console.log(sum);
}

sumOfNum(7);
sumOfNum(10);
