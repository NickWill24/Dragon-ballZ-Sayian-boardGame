console.log("Welcome to Dragon Ball Z Sayian Board Game")
let gameActive= false; 
let gokuMovement = 0 
let vegetaMovement = 0 
let currentPlayer= "goku";  
// global var 

const startSquare = document.querySelector("#start")
const playButton = document.querySelector('.play')
const resetButton = document.querySelector('.reset')
resetButton.style.display = 'none'
let dice = document.querySelector(".dice")
dice.style.display= 'none'
const rollButton= document.querySelector('.butn')
rollButton.style.display= 'none'
let gameStatus= document.querySelector('.gameStatus')
//Dom element 

let gamePieceOne = document.createElement("img") 
let gamePieceTwo = document.createElement("img")
let gokuPicture = "images/Goku.png"
let vegetaPicture = "images/Vegeta.png"
gamePieceTwo.src = vegetaPicture
gamePieceOne.src = gokuPicture
gamePieceOne.className = "gamePiece"
gamePieceTwo.className = "gamePiece"
//gamePieces 

gameBoard = ['start', 'one', 'two', 'three', 'four', 'five', 
'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 
'sixteen', 'seventeen', 'eigthteen', 'nineteen', 'twenty', 'twenty-one','twenty-two', 'twenty-three', 'twenty-four', 'twenty-five', 'twenty-six', 
'twenty-seven', 'twenty-eight', 'twenty-nine', 'thirty', 'thirty-one', 'thirty-two', 'thirty-three', 
'thirty-four', 'thirty-five', 'thirty-six', 'thirty-seven']





const playGame = () => {
    gameActive = true
    startSquare.appendChild(gamePieceOne)
    startSquare.appendChild(gamePieceTwo)
    gameStatus.innerText= `player turn: ${currentPlayer}`
    playButton.style.display = 'none'
    dice.style.display = 'block'
    resetButton.style.display = 'inline'
    rollButton.style.display= 'inline'
    
}


    const rollTheDice = () => { 
        setTimeout(function () { 
        let diceValue = Math.floor(Math.random() * 6) + 1; 
        console.log(diceValue)
        dice.src = `./images/dice${diceValue}.png`      
        movePlayer(diceValue)
        }, 500) 
    }
    
    const movePlayer = (number) => {
        if (currentPlayer === 'goku') { 
            gokuMovement += number
            if (gokuMovement > 37) {
                gokuMovement = 37 
                
            }
            let position = gameBoard[gokuMovement]
            checkSpecialCondition(position)
            // assignPosition(position)
            winCheck()
        } else {
            vegetaMovement += number
            if (vegetaMovement > 37) vegetaMovement = 37; 
            let position = gameBoard[vegetaMovement]
            checkSpecialCondition(position)
            // assignPosition(position)
            winCheck()
        }
        
        console.log(currentPlayer)
        
    }
    const checkSpecialCondition= (position) => {
        if (position == 'one') {
            if (currentPlayer == 'goku') {
                position ='ten' 
                gameStatus.innerHTML= `player move up ${currentPlayer}`
                assignPosition(position)
                gokuMovement += 9  
            }else{
                position ='ten' 
                gameStatus.innerHTML= `player move up ${currentPlayer}`
                assignPosition(position)
                vegetaMovement += 9 
            }
        }else if(position == 'five'){
            if (currentPlayer == 'goku') {
                position ='fourteen' 
                gameStatus.innerHTML= `player move up ${currentPlayer}`
                assignPosition(position)
                gokuMovement += 9  
            }else{
                position ='fourteen' 
                gameStatus.innerHTML= `player move up ${currentPlayer}`
                assignPosition(position)
                vegetaMovement += 9 
            }
        }else if(position == 'twelve'){
            if (currentPlayer == 'goku') {
                position ='twenty-four' 
                gameStatus.innerHTML= `player move up ${currentPlayer}`
                assignPosition(position)
                gokuMovement += 12 
            }else{
                position ='twenty-four' 
                gameStatus.innerHTML= `player move up ${currentPlayer}`
                assignPosition(position)
                vegetaMovement += 12
            }
        }else if(position == 'seven' || position == 'eigthteen' || position == 'twenty-six' || position == "thirty" || position == "thirty-three"){
                console.log('timeWrap')
                if (currentPlayer == 'goku') {
                    position ='three' 
                    gameStatus.innerHTML= `player move back ${currentPlayer}`
                    assignPosition(position)
                    gokuMovement = 3
                }else{
                    position ='three' 
                    gameStatus.innerHTML= `player move back ${currentPlayer}`
                    assignPosition(position)
                    vegetaMovement = 3
                }
            }
        else if (vegetaMovement === gokuMovement) {
            if(currentPlayer === 'goku'){
                gokuMovement = 0 
                assignPosition('start')
            }
            else{
                vegetaMovement = 0 
                assignPosition('start')
            }
        } else {
            assignPosition(position)
        }
    }
    const assignPosition= (position) => {
        console.log('positionCheck', position)
        if (currentPlayer === 'goku') {
            let currentSquare = document.querySelector(`#${position}`)
            currentSquare.appendChild(gamePieceOne)
            
        } else {
            let currentSquare = document.querySelector(`#${position}`)
            currentSquare.appendChild(gamePieceTwo)
            
        }
    }
    const reset= function (){
        gokuMovement= 0 
        vegetaMovement= 0   
        let cells = document.querySelectorAll('.cell') 
        cells.forEach(cell => {
            if (cell.hasChildNodes()){
                cell.removeChild(cell.childNodes[0])
            }
        })
        rollButton.style.display = 'inline'
        let currentSquare = document.querySelector(`#start`)
        currentSquare.appendChild(gamePieceOne)
        currentSquare.appendChild(gamePieceTwo)
    }
    
    const switchPlayer = function(){
        if (currentPlayer == "goku") {
            currentPlayer = "vegeta"
            gameStatus.innerHTML=`player turn: ${currentPlayer}`
        } else { 
            currentPlayer = "goku"
            gameStatus.innerHTML=`player turn: ${currentPlayer}`
        }
    }
    const winCheck = () =>{
        console.log(gokuMovement)
        console.log(vegetaMovement)
        if(gokuMovement >= 37){
            gameStatus.innerText= `goku wins`
            console.log('goku wins')
            gameActive = false
            rollButton.style.display= 'none'
        }
        if(vegetaMovement >= 37){
            gameStatus.innerText=`vegeta wins`
            console.log('vegeta wins')
            gameActive= false
            rollButton.style.display= 'none'
        }
        if (vegetaMovement < 37 && gokuMovement < 37) {
            switchPlayer()
            
        }
    }
    


    
    
    playButton.addEventListener('click', playGame)
    dice.addEventListener('click',rollTheDice)
    resetButton.addEventListener('click', reset)