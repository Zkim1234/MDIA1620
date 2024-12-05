//             .------.____
//          .-'       \ ___)
//       .-'         \\\
//    .-'        ___  \\)
// .-'          /  (\  |)
//          __  \  ( | |
//         /  \  \__'| |
//        /    \____).-'
//      .'       /   |
//     /     .  /    |
//   .'     / \/     |
//  /      /   \     |
//        /    /    _|_
//        \   /    /\ /\
//         \ /    /__v__\
//          '    |       |
//               |     .#|
//               |#.  .##|
//               |#######|
//               |#######|


// This is a template for the final project. You'll be setting up a stable and making
// sure it runs smoothly.
//
// You can copy and paste this into your stables.js file, and then use it to guide you.
// Please do not create a new file!
// Feel free to keep the headings (e.g.: "Variables"), but please delete any boilerplate
// comments. (Your own comments, where necessary, are acceptable.)
//
// NOTE: UNLESS SPECIFIED, VARIABLE NAMING IS UP TO YOU. THERE SHOULD BE NO HARD-CODED
// NUMBERS OR STRINGS WHERE VARIBALES WOULD BE PREFERRED.

//------------------------- Seting up shop -------------------------//

// Initialize a variable called "horses" that will store the horses in your stable.
// Create a variable and use it to store a message visitors to the stable.
// Create a variable and use it to store the cost of a late payment fee.
// Create a variable and use it to store the number of available stalls in the stable.

//Variables
let horses;
let messageForVisitors = console.log("Welcome to Zinna's stables.");
const LATE_PAYMENT_FEE = 100; // cost of late payment fee
let availableStalls =6;//number of available stalls
let relocation // move outside horse inside and inside horse outside

//------------------------- First day -------------------------//

// Using a constructor, add at least 3 horses to your stables.
//
// The horse should have the following properties:
// - name, nickname, favorite treat (string)
// - age, monthly rent (number)
// - location (boolean inside/outside)
// - two unique properties of your choice (use any primitive)
// - a method that introduces your horse and references at least 3 object properties.
// - a second, unique method of your choice

// Store the horses you've just created in your "horses" variable.

// Fancy! Another horse wants to be stabled! Create a variable that stores an object
// literal of your new horse, and add it to your "horses" variable.

// Initialize new property to your horses: a boolean that allows you to check if your horse
// is hungry or not. Use dot notation.
function CreateHorse(name, nickname,  favTreat, rent, age, isInside,  unique1, unique2){ //with constructors
    this.name = name; 
    this.nickname = nickname;
    this.favTreat = favTreat;
    this.age = age; 
    this.rent = rent; 
    this.isInside = isInside; 
    this.personality = unique1;
    this.colour = unique2;
    this.intro = function intro(){
        console.log(
            `My horse is called ${name} and they are ${age} years old! And her favourite treat is ${favTreat}.`
        );
    };
}

const gossip = new CreateHorse("Gossip", "Goose", "celeries", 120, 4, false, "lovely", "pink")
const boba = new CreateHorse("Boba", "Tapioca", "carrots", 300, 6, false, "shy", "red");
const latte = new CreateHorse("Latte", "Milk", "strawberries", 160, 2, false, "energetic", "blue");

horses = [gossip, boba, latte];
    

 const smoothie = {
    name:"Smoothie",
    nickname: "Slush",
    favTreat: "melon",
    hunger: true,
    rent: 180, //monthly
    age: 9,
    isInside: false, 
    personality: "selfish",
    colour: "green",
    intro: function(){
        console.log(
            `My horse's name is ${this.name}, I also call her ${this.nickname}. 
            And her favourite treat is ${this.favTreat}. `)}
 };

horses.push(smoothie);

for(let i = 0; i<horses.length; i++){
    horses[i].isHungry=true; //all horses are starving
}

//------------------------- Stable roster -------------------------//

// We want to keep track of our horses and how they are doing. Paste the data structure
// of our horse variable below so we can reference it. It is okay to comment it out.

console.log(horses);
// [
//     CreateHorse {
//       name: 'Gossip',
//       nickname: 'Goose',
//       favTreat: 'celeries',
//       age: 4,
//       rent: 120,
//       isInside: false,
//       personality: 'lovely',
//       colour: 'pink',
//       intro: [Function: intro]
//     },
//     CreateHorse {
//       name: 'Boba',
//       nickname: 'Tapioca',
//       favTreat: 'carrots',
//       age: 6,
//       rent: 300,
//       isInside: false,
//       personality: 'shy',
//       colour: 'red',
//       intro: [Function: intro]
//     },
//     CreateHorse {
//       name: 'Latte',
//       nickname: 'Milk',
//       favTreat: 'strawberries',
//       age: 2,
//       rent: 160,
//       isInside: false,
//       personality: 'energetic',
//       colour: 'blue',
//       intro: [Function: intro]
//     },
//     {
//       name: 'Smoothie',
//       nickname: 'Slush',
//       favTreat: 'melon',
//       hunger: true,
//       rent: 180,
//       age: 9,
//       isInside: false,
//       personality: 'selfish',
//       colour: 'green',
//       intro: [Function: intro]
//     },
//     isHungry: false
//   ]

//---------------------- Growing business ----------------------//

// We've added some horses! Re-assign the variable that contains the number of available stalls.
// Use the math operator to determine how many stables you should have left, given the number of
// horses you've added.
availableStalls = availableStalls - horses.length; 

// Express the following in code: If the variable that contains your remaining stalls
// is less than 2, log out "We need to build more stalls", otherwise log out "We have
// [number of stalls] available!"
if(availableStalls <= 2){
    console.log("We need to build more stalls");
} else{
    console.log("We have "+ availableStalls + " stalls available!");
}

// Create a function that logs out how much will an individual horse will owe if rent is
// paid late. Invoke the function.
function lateFee(horse){
    let totalFee = horse["rent"] + LATE_PAYMENT_FEE;

    console.log(horse["name"]+"'s rent is $"+ horse["rent"] +", late fee is $" + LATE_PAYMENT_FEE +
        " so " + horse["name"] +"'s total fee is $" + totalFee);
    
// Add loop that checks to find out if a certain horse likes a treat. If the horse does not like
// the treat, log out their disatisfaction and check the next horse. Exit the loop when you find
// the horse that likes the treat.
    let treat = "melon";
    for(let i = 0; i<horses.length; i++){
        if(horses[i]["favTreat"]!==treat){
            console.log(horses[i]["name"]+" does not like "+ treat);
        }
    
    }
}

// Create and invoke a function that returns (not logs) the nickname of a chosen horse. Log out
// the return value outside of the function.
function getNickname (horse){
    return horse["nickname"];
}
console.log(horses[0]["name"]+"'s nickname is "+getNickname(horses[0]));


//------------------------- Day to day operations -------------------------//

// Create and invoke a function references one of your unique horse properties. It should
// contain a conditional or a loop.
function uniques(){
    for(let i=0; i < horses.length; i++){
        if(i%2 === 1){ //odd index number horses will log out their colour unique
            console.log(horses[i]["name"]+ " is "+ horses[i]["colour"]);
        }
        else{ //even index number horses will log out their personality unique
            console.log(horses[i]["name"]+ " is "+ horses[i]["personality"]);
        }
    }
}
 uniques();


// Morning! Create and invoke a function that moves all your horses outside. It should
// log out statement indicating the horses have been moved to spend time in the sun.

function dayToDay(){
    //move them outside
    for(let i=0; i < horses.length; i++){
        if(horses[i]["isInside"]){
            horses[i]["isinside"] = false;
        }
        console.log(horses[i]["name"]+" is moved to spend time in the sun");
    }

    //move them inside
    for(let i=0; i < horses.length; i++){
        if(!horses[i]["isInside"]){
            horses[i]["isinside"] = true;
        }
        console.log("Bedtime!, " + horses[i]["name"]+" is moved inside");
    
    }
}

dayToDay();

// Initialize a method on your horses that moves them inside if they are outside, and
    // vice versa. 

relocation = function(horse){ //horse is integer of horses array index number
    if(horses[horse]["isInside"]){
        horses[horse]["isInside"] = false; 
    }else{
        horses[horse]["isInside"] = true; 
    }
}

function treats(){
    // Food! Create and invoke a function that feeds your horses. If the horse is outside, it
    // should call them in, and then all horses should be fed a treat. Log the activity of
    // the horses.

    for(let i=0; i < horses.length; i++){
        if(horses[i]["isHungry"]){
            horses[i]["isHungry"] = false;
            console.log(horses[i]["name"]+" is fed");
        }else{
            console.log(horses[i]["name"]+" is fed");
        }

        if(!horses[i]["isInside"]){
            horses[i]["isinside"] = true;
        }
        console.log(horses[i]["name"]+"'s fav treat is " + horses[i]["favTreat"]);
    }
    
}
treats();
// Bedtime! Update the function that lets your horses outside so that it also calls them
// in if it is getting dark. Only the horses that moved should log out a message. Invoke the function.
dayToDay();

//------------------------- Bonus -------------------------//

// Replace the ascii art at the top of the file with art representing your stable. 