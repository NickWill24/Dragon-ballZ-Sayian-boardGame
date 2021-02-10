console.log("Welcome to Dragon Ball Z Sayian Board Game")

let counter = 0 
let gameActive= true; 
let PlayerOne = "goku";
let playerTwo = "vegeta"
let dice = document.querySelector(".dice") 
//make the player character move up, down, and back 
//display the dice and how many move the player move 
// make bad spot and good spot work 


//let gameStatus= document.querySelector('.gameStatus')
//gameStatus.innerHTML=`player turn: ${currentPlayer}`

//const winningContidonal 
//const handleClick= function(event){



    const rollTheDice = () => { 
        setTimeout(function () { 
        let diceValue = Math.floor(Math.random() * 6) + 1; 
        console.log(diceValue)
        dice.src = `./images/dice${diceValue}.png`      
        }, 500) 
    }



//document.querySelector('.reset').addEventListener('click', reset)

dice.addEventListener('click',rollTheDice)