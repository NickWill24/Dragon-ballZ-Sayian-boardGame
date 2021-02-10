console.log("Welcome to Dragon Ball Z Sayian Board Game")
let gokuMovement = 0 
let counter = 0 
let gameActive= true; 
let dice = document.querySelector(".dice") 
let gokuPicture = "images/Goku.png"
let vegetaPicture = "images/"
const startSquare = document.querySelector("#start")
let gamePieceOne = document.createElement("img") 
gamePieceOne.src = gokuPicture
gamePieceOne.className = "gamePiece"
gameBoard = ['start', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twleve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eigthteen', 'nineteen', 'twenty', 'twenty-one','twenty-two', 'twenty-three', 'twenty-four', 'twenty-five', 'twenty-six', 'twenty-seven', 'twenty-eight', 'twenty-nine', 'thirty', 'thirty-one', 'thirty-two', 'thirty-three', 'thirty-four', 'thirty-five', 'thirty-six', 'thirty-seven']

const playGame = () => {
startSquare.appendChild(gamePieceOne)
}


    const rollTheDice = () => { 
        setTimeout(function () { 
        let diceValue = Math.floor(Math.random() * 6) + 1; 
        console.log(diceValue)
        dice.src = `./images/dice${diceValue}.png`      
        addMovement(diceValue)
        }, 500) 
    }
    const addMovement = (diceValue) => {
        gokuMovement += diceValue
        console.log(gokuMovement)
        movePlayer(gokuMovement)
    }

    const movePlayer = (gokuMovement) => {
        movement = gokuMovement
        let position = gameBoard[movement]
        let currentSquare = document.querySelector(`#${position}`)
        currentSquare.appendChild(gamePieceOne)
    }



//document.querySelector('.reset').addEventListener('click', reset)

dice.addEventListener('click',rollTheDice)
document.querySelector('.play').addEventListener('click', playGame)