//Chap 9



//Question 1
// let cityname = prompt("Enter your city name!");

// if (cityname === "karachi") {
//     document.write("WELOCME TO CITY OF LIGHTS ☀️ ");
// } else {
//     document.write("WELCOME TO " + cityname);
// }



//Question 2
// let gender = prompt("Enter your gender!");
// if (gender == "male" || "Male") {
//     document.write("Good Morning Sir ☀️")
// } else {
//     document.write("Good Morning Ma'am ☀️")
// }



//Question 3
// let signal = prompt("Enter color of traffic light.");
// if (signal === "red" || signal === "Red") {
//     document.write("Must Stop!");
// } else if (signal === "green" || signal === "Green") {
//     document.write("Move now.");
// } else if (signal === "yellow" || signal === "Yellow") {
//     document.write("Ready to move.");
// } else {
//     document.write("Invalid color.");
// }



//Question 4
// let fuel = prompt("Enter your remainig fuel in your cars.")
// if (fuel < 0.25) {
//     document.write("Refill your fuel in your car 😕")
// } else {
//     document.write("Enough fuel in your car 😄")
// }



//Question 5
//var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");
// }

// var b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
// }

// let c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
// }
// if (c === 13) {
//     alert("condition 2 is true");
// }
// if (++c < 14) {
//     alert("condition 3 is true");
// }
// if (c === 14) {
//     alert("condition 4 is true");
// }

// let materialCost = 20000;
// let laborCost = 2000;
// let totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }

// if (true) {
//     alert("True");
// }
// if (false) {
//     alert("False");
// }

// if ("car" < "cat") {
//     alert("car is smaller than cat");
// }




// //Question 6
// let sub1 = parseFloat(prompt("Enter your subject 1 marks"));
// let sub2 = parseFloat(prompt("Enter your subject 2 marks"));
// let sub3 = parseFloat(prompt("Enter your subject 3 marks"));
// let totalmarks = parseFloat(prompt("Enter your toatal marks"))

// let totalobtain = sub1 + sub2 + sub3;
// let percentage = (totalobtain / totalmarks) * 100;

// let grade = "";
// let remarks = "";

// if (percentage >= 90) {
//     grade = "A-1";
//     remarks = "Excellent";
// } else if (percentage >= 80) {
//     grade = "A";
//     remarks = "Very Good";

// } else if (percentage >= 70) {
//     grade = "B";
//     remarks = "Good";
// } else if (percentage >= 60) {
//     grade = "C";
//     remarks = "Fair";
// } else if (percentage >= 50) {
//     grade = "D";
//     remarks = "Not Good";
// } else {
//     grade = "Fail";
//     remarks = "Need Improvement";
// }
// document.write("<b>RESULT</b><br>");
// document.write("Total Marks :" + totalmarks + "<br>");
// document.write("Total Obtained :" + totalobtain + "<br>");
// document.write("Percentage :" + percentage + "%" + "<br>");
// document.write("Grade :" + grade + "<br>");
// document.write("Remarks :" + remarks + "<br>");




//Question 7
// let num = 1;
// let guess = parseInt(prompt("Guess the number between 1-10"));
// if (num === guess) {

//     document.write("BINGO!!")

// } else if (num === guess + 1 || num === guess - 1) {
//     document.write("You are close enough")
// } else {
//     document.write("Try Again!")
// }




//Question 8

// let num1 = prompt("Enter the number.")
// if (num1 % 3 === 0) {
//     document.write("The number is divisible by 3.")
// } else {
//     document.write("The number is not divisible by 3.")
// }




//Question 9

// let num = prompt("Enter the number.");
// if (num % 2 === 0) {
//     document.write("The number is even.");
// } else {
//     document.write("The number is odd.");
// }




//Questin 10
// let temperature = prompt("Enter the temperature!");
// if (temperature >= 40) {
//     document.write("It's too hot outside.");
// } else if (temperature >= 30) {
//     document.write("The Weather today is Normal.");
// } else if (temperature >= 20) {
//     document.write("Today’s Weather is cool.");
// } else if (temperature >= 10) {
//     document.write("OMG! Today’s weather is so Cool.");
// } else {
//     document.write("Invalid temperature.");
// }



//QuESTION 11
// let num1 = parseFloat(prompt("Enter the first number."));
// let num2 = parseFloat(prompt("Enter the second number."));
// let operations = prompt("Enter operator.");

// if (operations === "+") {
//     document.write(num1 + num2);
// } else if (operations === "-") {
//     document.write(num1 - num2);
// } else if (operations === "%") {
//     document.write(num1 % num2);
// } else if (operations === "*") {
//     document.write(num1 * num2);
// } else if (operations === "/") {
//     document.write(num1 / num2);
// };