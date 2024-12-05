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


//------------------------- Seting up shop -------------------------//

let horses;
let messageForVisitors = console.log("Welcome to Zinna's stables.");
const LATE_PAYMENT_FEE = 100; // cost of late payment fee
let availableStalls =6;//number of available stalls
let relocation // move outside horse inside and inside horse outside

//------------------------- First day -------------------------//
function CreateHorse(name, nickname,  favTreat, rent, age, isInside,  unique1, unique2){ 
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

availableStalls = availableStalls - horses.length; 

if(availableStalls <= 2){
    console.log("We need to build more stalls");
} else{
    console.log("We have "+ availableStalls + " stalls available!");
}

function lateFee(horse){
    let totalFee = horse["rent"] + LATE_PAYMENT_FEE;

    console.log(horse["name"]+"'s rent is $"+ horse["rent"] +", late fee is $" + LATE_PAYMENT_FEE +
        " so " + horse["name"] +"'s total fee is $" + totalFee);
    
    let treat = "melon";
    for(let i = 0; i<horses.length; i++){
        if(horses[i]["favTreat"]!==treat){
            console.log(horses[i]["name"]+" does not like "+ treat);
        }
    
    }
}

function getNickname (horse){
    return horse["nickname"];
}
console.log(horses[0]["name"]+"'s nickname is "+getNickname(horses[0]));


//------------------------- Day to day operations -------------------------//

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

relocation = function(horse){ //horse is integer of horses array index number
    if(horses[horse]["isInside"]){
        horses[horse]["isInside"] = false; 
    }else{
        horses[horse]["isInside"] = true; 
    }
}

function treats(){

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


dayToDay();