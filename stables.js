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
console.log(randomNum);
if (myHorseLocate <= 0){
    console.log(horseName+" is outside");
} else { //if its 1
    console.log(horseName + " is inside");
}