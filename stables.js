//name the horse in "" String
let horseName = "gossip";
console.log(horseName);

//new name
horseName = "Slush";
console.log(horseName);

//horse age, in 1234 integer
let horseAge = 8;
console.log(horseAge);

//welcome message for horse
let welcomeMessage = "Welcome to Slush's house"
console.log("the horse name is " + welcomeMessage);

//boolean, true or false
let isHorseInside = true;
console.log(isHorseInside);

//LESSON 4-CODE
console.log("\n-----Lesson 4 -----");
console.log(typeof 19); //number
console.log(typeof true); //boolean
console.log(typeof 1.6); //number
console.log(typeof isHorseInside); //boolean

const STABLE_MONTHLY_FEE = 143; // constent, fixed number
console.log("Stable monthly fee is " + STABLE_MONTHLY_FEE);

console.log("Stable monthly fee multiply by 3 is "+ STABLE_MONTHLY_FEE * 3);
console.log(30 + 4); // addition, 34
console.log(40 - 10); // subtraction, 30
console.log(40/5); // division, 8

console.log(2+" hi");//works with '+'
console.log(2 - "hi"); // no '-', result NaN
console.log(2 - "2"); //type coercion, this still works, result 0
console.log(2 + "2"); //result 22
console.log(true + 2); //true is 1, 3
console.log(false +2);//false is 0, 2

console.log(`My horse ${horseName}`);

//'''''`````````

// Lesson 4 LAB 
console.log("\n-----Lesson 4 lab-----");
let horseNickname = "Gossip";
console.log(`My horse name is ${horseName}. I call them with ${horseNickname} as a nickname.`);
console.log("$"+((STABLE_MONTHLY_FEE*3)*.1)+" will be saved(10%) for 3 month stay at my stables."); 

//Lesson 5 Lesson 
console.log("\n-----Lesson 5-----");
let goat = false;
if(!goat){ // NOT false 
    console.log(horseName); // slush
} else {
    console.log(horseNickname); // gossip
}

let grade = 4.6; // grading if statement
if (grade>4.5 || grade<0.5){ // less or equal to 1.5
    console.log("re-enter the grade");
} else if (grade <= 2.5){ 
    console.log("below average");
} else if (grade <= 3.5) { 
    console.log("average");
} else if (grade <= 1.5) { // greater than 4.5 OR less than 0.5
    console.log("fail");
} else{
    console.log("above average"); // greater than 
}

let num = 1;
if (num === 1){
    console.log("hello2");
}
if (num !== 2){
    console.log("bye");
}

//Lesson 5 LAB

console.log("\n-----Lesson 5 lab-----");

//generate integer number 0 or 1 
let randomNum = Math.floor(Math.random()*(2-0)+0); 
// for integer random number: Math.floor(Math.random()*(max-min)+min)

let myHorseLocate = randomNum; //0 is false, 1 is true
//console.log(randomNum);

if (myHorseLocate <= 0){//print if my horse is inside or outside
    console.log(horseName+" is outside");
} else { //if its 1
    console.log(horseName + " is inside");
}

//Lesson 6 Indexes and Arrays
console.log("-----Lesson 6-----")
let word = "Carrot" 
console.log(word.charAt(0)); //character at 0 

//let methods = ["method1", "method2", "method3"];
//console.log(methods.charAt(2)); // method3

let listOfHorses = [horseName, "Boba", "Latte", "Earl Gray"];
console.log(listOfHorses[2]);
let horseAges = [horseAge, 2, 10, 12];

console.log(listOfHorses.length); 

console.log(`Hello, welcome, we have ${listOfHorses.length} horses`);


//Lesson 6 LAB
console.log("------Lesson 6 LAB------")

let horseLocateArray = [" inside", " outside", " running outside", " chilling inside", ".. sorry I don't know what they are doing"]

console.log(`Hello! I have ${listOfHorses.length} horses! Let me introduce my horses names! ${listOfHorses}`);
listOfHorses.push("Milk Foam");
console.log(`Oh! no wait I also have ${listOfHorses[4]}, I actually have ${listOfHorses.length} horses`);
console.log(`${listOfHorses[0]} is${horseLocateArray[0]}` );
console.log(`${listOfHorses[1]} is${horseLocateArray[1]}` );
console.log(`${listOfHorses[2]} is${horseLocateArray[2]}` );
console.log(`${listOfHorses[3]} is${horseLocateArray[3]}` );
console.log(`${listOfHorses[4]} is${horseLocateArray[4]}` );