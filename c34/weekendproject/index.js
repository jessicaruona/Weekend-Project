let  readlineSync  =  require('readline-sync')
console.log( "Welcome to Batman: Arkham Asylum!" );
console.log( "What do you want to do?" );
let option = readlineSync.question( "Options: look around, smack a prisoner, run away \n" );

const playAgain = () => {
    let playAgain = readlineSync.question('Do you want to play again? y|| n \n')
   
    if(playAgain.toLowerCase() === 'y' ){
        console.log( "Welcome to Batman: Arkham Asylum!" );
        console.log( "What do you want to do?" );
        let playAgainOption = readlineSync.question("Options: look around, smack a prisoner, run away \n");
        switch(playAgainOption) {
            case "look around":
              console.log( "You see a bunch of angry prisoners and the Joker!" );
              option2()
              break;
            case "smack a prisoner":
              console.log( "Ouch! What did I ever do to you, man?" );
              console.log(`Uh-oh.. you just made him mad.. time to fight?`);
              option2()
              break;
            case "run away":
              console.log( "Batman: \"Bats can't run.\"" );
              console.log("Joker: \"looks like you are mine now.\"");
              console.log("You have no choice left but to fight")
              battle()
              break;
            default: 
              console.log( "A prisoner punches you in the face." );
              console.log( "Prisoner: \"Quit messin' around.\"" );
          }
    } else {
        console.log (`Thank for playing, goodbye.`)
    }
}
const finalStep = () => {
    let finalStep = readlineSync.question('Options: A) Leave, B) Stay and look for treasured goods C) Call robin him and tell him everything you just did\n')
    finalStep.toLowerCase();
    if(finalStep === 'a'){
        console.log("Congrats! You made it out alive... time to return to Gothem")
        playAgain()
    } else {
        console.log("Uh oh- turns out the Joker was still alive and now he's got you... better luck next time!")
        playAgain()
    }  
}

const noWeapon = () => {
    let noWeapon = readlineSync.question('Options: A)  Fight with with bare hands B) Surrender C) Play dead  \n ')
 if (noWeapon.toLowerCase() === 'a'){
     console.log("Good job. Your strength and force conquered the Joker and his team");
     finalStep()
} else if (noWeapon.toLowerCase()=== 'b'){
    console.log("...Really? Better luck next time.")
    playAgain()
} else if (noWeapon.toLowerCase()=== 'c'){
    console.log("Smart choice! The joker and his gang leave you alone. You win for now!")
    playAgain()
}
}


const battle = () => {
    let battle = readlineSync.question('Pick your weapon: sword or club?\n')
    battle.toLowerCase();
    if (battle === 'sword'){
        console.log("Nice choice!")
        console.log("You have successfully warded off the prisoners and joker... congrats! Now what? \n ")
        finalStep()
    } else if (battle === 'club') {
        console.log("Bold choice. After you strike the first prisioner the club brakes.. now what?")
        console.log("You must act fast.. ")
        noWeapon()
        
    } else {
        console.log("Wrong choice...Try again");
        playAgain()
    }
}

const option2 = () => {
    let option2 = readlineSync.question('They apporach you to battle, do you?  y|| n \n')
    if( option2.toLowerCase() === 'y'){
        console.log("First you have to pick your weapon");
        battle()
    } else{
        console.log('Boo you die');
        playAgain()
    }
}

switch(option) {
  case "look around":
    console.log( "You see a bunch of angry prisoners and the Joker!" );
    option2()
    break;
  case "smack a prisoner":
    console.log( "Ouch! What did I ever do to you, man?" );
    console.log(`Uh-oh.. you just made him mad.. time to fight?`);
    option2()
    break;
  case "run away":
    console.log( "Batman: \"Bats can't run.\"" );
    console.log("Joker: \"looks like you are mine now.\"");
    console.log("You have no choice left but to fight")
    battle()
    break;
  default: 
    console.log( "A prisoner punches you in the face." );
    console.log( "Prisoner: \"Quit messin' around.\"" );
}






