/*
 * Hello. 2 points.
 */

function hello() {

var div = document.getElementById("output1");
div.innerHTML="Hello, AP Computer Science Principles!";

  ////////////////// DO NOT MODIFY
  check("hello"); // DO NOT MODIFY
  ////////////////// DO NOT MODIFY
}

/*
 * Hello, Again. 3 points.
 */

function helloAgain() {

  //////////// DO NOT MODIFY
  let name; // DO NOT MODIFY
  //////////// DO NOT MODIFY

  // Use the name variable declared above to store the user's response. You
  // do not need to re-declare it, only assign it a value.
name = prompt("Enter Your Name:");
var div = document.getElementById("output2");
div.innerHTML="Hello, " + name + "!"

  ///////////////////////////// DO NOT MODIFY
  check("helloAgain", name); // DO NOT MODIFY
  ///////////////////////////// DO NOT MODIFY
}

/*
 * Celsius. 5 points.
 */

function celsius() {

  //////////////////////////////////////////////////////// DO NOT MODIFY
  let cels = ((Math.random() * 1001) - 100).toFixed(2); // DO NOT MODIFY
  //////////////////////////////////////////////////////// DO NOT MODIFY

  // The above code generates a random number between -100 and 1000
  // (inclusive), and rounds this value to 2 decimal places.
let fahren = ((cels * 1.8) + 32).toFixed(2);
let div = document.getElementById("output3");
div.innerHTML= cels + " degrees Celsius equals " + fahren + " degrees Fahrenheit."

  ////////////////////////// DO NOT MODIFY
  check("celsius", cels); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Fahrenheit. 5 points.
 */

function fahrenheit() {

  //////////////////////////////////////////////////////// DO NOT MODIFY
  let fahr = ((Math.random() * 1001) - 100).toFixed(2); // DO NOT MODIFY
  //////////////////////////////////////////////////////// DO NOT MODIFY

  // The above code generates a random number between -100 and 1000
  // (inclusive), and rounds this value to 2 decimal places.

let celsi = ((fahr - 32) * (5/9)).toFixed(2);
var div = document.getElementById("output4");
div.innerHTML= fahr +" degrees Fahrenheit equals " + celsi + " degrees Celsius."

  ///////////////////////////// DO NOT MODIFY
  check("fahrenheit", fahr); // DO NOT MODIFY
  ///////////////////////////// DO NOT MODIFY
}

/*
 * Inches. 5 points.
 */

function inches() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of inches, which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  let inches = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY
inches = Math.floor((input%63360)%12);
let feet = Math.floor(((input%63360)%36)/12);
let yards = Math.floor((input%63360)/36);
let miles = Math.floor(input/63360);
var div = document.getElementById("output5");
div.innerHTML = `Miles: ${miles}<br>Yards: ${yards}<br>Feet: ${feet}<br>Inches: ${inches}`
  ////////////////////////// DO NOT MODIFY
  check("inches", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Centimeters. 5 points.
 */

function centimeters() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of centimeters, which you'll
  // likely need to do. Please do not modify the value of input.

  /////////////////////////// DO NOT MODIFY
  let centimeters = input; // DO NOT MODIFY
  /////////////////////////// DO NOT MODIFY

  centimeters = Math.floor((input%100000)%100);
  let meters = Math.floor((input%100000)/100);
  let kilometers = Math.floor(input/100000);
  var div = document.getElementById("output6");
  div.innerHTML = `Kilometers: ${kilometers}<br>Meters: ${meters}<br>Centimeters: ${centimeters}`

  /////////////////////////////// DO NOT MODIFY
  check("centimeters", input); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Fluid Ounces. 5 points.
 */

function fluidOunces() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of fluidOunces, which you'll
  // likely need to do. Please do not modify the value of input.

  /////////////////////////// DO NOT MODIFY
  let fluidOunces = input; // DO NOT MODIFY
  /////////////////////////// DO NOT MODIFY

fluidOunces = Math.floor((((input%128)%32)%16)%8);
let gallons = Math.floor(input/128);
let quarts = Math.floor((input%128)/32);
let pints = Math.floor(((input%128)%32)/16);
let cups = Math.floor((((input%128)%32)%16)/8);
let div = document.getElementById("output7");
div.innerHTML = `Gallons: ${gallons}<br>Quarts: ${quarts}<br>Pints: ${pints}<br>Cups: ${cups}<br>Fluid Ounces: ${fluidOunces}`

  /////////////////////////////// DO NOT MODIFY
  check("fluidOunces", input); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Ounces. 5 points.
 */

function ounces() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of ounces, which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  let ounces = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY

let tons = Math.floor(input/32000);
let pounds = Math.floor((input%32000)/16);
ounces = Math.floor((input%32000)%16);
var div = document.getElementById("output8");
div.innerHTML = `Tons: ${tons}<br>Pounds: ${pounds}<br>Ounces: ${ounces}`

  ////////////////////////// DO NOT MODIFY
  check("ounces", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Money. 7 points.
 */

function money() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of pennies, which you'll likely
  // need to do. Please do not modify the value of input.

  /////////////////////// DO NOT MODIFY
  let pennies = input; // DO NOT MODIFY
  /////////////////////// DO NOT MODIFY

  let dollars = Math.floor(input/100);
  let quarters = Math.floor((input%100)/25);
  let dimes = Math.floor(((input%100)%25)/10);
  let nickels = Math.floor((((input%100)%25)%10)/5);
  pennies = Math.floor((((input%100)%25)%10)%5);
  var div = document.getElementById("output9");
  div.innerHTML = `Dollars: ${dollars}<br>Quarters: ${quarters}<br>Dimes: ${dimes}<br>Nickels: ${nickels}<br>Pennies: ${pennies}`

  ///////////////////////// DO NOT MODIFY
  check("money", input); // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY
}

/*
 * Change. 8 points.
 */

function change() {

  ///////////////////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative number less than 1.00."); // DO NOT MODIFY
  ///////////////////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of amount, which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  let amount = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY

let quarter = Math.floor(amount/0.25);
let dime = Math.floor((amount%0.25)/0.10);
let nickel = Math.floor(((amount%0.25)%0.10)/0.05);
let penny = Math.round((((amount%0.25)%0.10)%0.05)/0.01);
var div = document.getElementById("output10");
let coins = quarter + dime + nickel + penny;
if (coins == 1) {
  div.innerHTML = `${coins} coin.`
} else {
  div.innerHTML = `${coins} coins.`
}
  
  ////////////////////////// DO NOT MODIFY
  check("change", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}
