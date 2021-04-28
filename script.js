        console.log("Welcome to Dragon Ball Z Sayian Board Game")
let gameActive= false; 
let gokuMovement = 0 
let vegetaMovement = 0 
let currentPlayer= 'Goku';  
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
let gameStory= document.querySelector('.game-story')
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
    gameStatus.innerText= `Player turn: ${currentPlayer}`
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
        if (currentPlayer === 'Goku') { 
            gokuMovement += number
            if (gokuMovement > 37) {
                gokuMovement = 37 
                
            }
            let position = gameBoard[gokuMovement]
            
            assignPosition(position)
            
        } else {
            vegetaMovement += number
            if (vegetaMovement > 37) vegetaMovement = 37; 
            let position = gameBoard[vegetaMovement]
            
            assignPosition(position)
            
        }
        
        console.log(currentPlayer)
        
    }
    const checkSpecialCondition= (position) => {
        let timeWarp = false
        if (position == 'one') {
            if (currentPlayer == 'Goku') {
                position ='ten' 
                gameStory.innerText= `kaio-ken x10! ${currentPlayer} moves to square ten`
                let currentSquare = document.querySelector(`#${position}`)
                currentSquare.appendChild(gamePieceOne)
                gokuMovement += 9  
            }else{
                position ='ten' 
                gameStory.innerText= `kaio-ken x10! ${currentPlayer} moves to square ten`
                let currentSquare = document.querySelector(`#${position}`)
                currentSquare.appendChild(gamePieceTwo)
                vegetaMovement += 9 
            }
        }else if(position == 'five'){
            if (currentPlayer == 'Goku') {
                position ='fourteen' 
                gameStory.innerText= `Super Saiyan 3! ${currentPlayer} moves to sqaure fourteen`
                let currentSquare = document.querySelector(`#${position}`)
                currentSquare.appendChild(gamePieceOne)
                gokuMovement += 9  
            }else{
                position ='fourteen' 
                gameStory.innerText= `Super Saiyan 3! ${currentPlayer} moves to sqaure fourteen`
                let currentSquare = document.querySelector(`#${position}`)
                currentSquare.appendChild(gamePieceTwo)
                vegetaMovement += 9 
            }
        }else if(position == 'twelve'){
            if (currentPlayer == 'Goku') {
                position ='twenty-four' 
                gameStory.innerText= `Fusion Gogeta! ${currentPlayer} moves to square twenty-four`
                let currentSquare = document.querySelector(`#${position}`)
                currentSquare.appendChild(gamePieceOne)
                gokuMovement += 12 
            }else{
                position ='twenty-four' 
                gameStory.innerText= `Fusion Gogeta! ${currentPlayer} moves to square twenty-four`
                let currentSquare = document.querySelector(`#${position}`)
                currentSquare.appendChild(gamePieceTwo)
                vegetaMovement += 12
            }
        }else if(position == 'seven' || position == 'eigthteen' || position == 'twenty-six' || position == "thirty" || position == "thirty-three"){
                timeWarp = true
                console.log('timeWarp')
                if (currentPlayer == 'Goku') {
                    position ='three' 
                    gameStory.innerText= `Time Warp! ${currentPlayer} is sent back to square three`
                    let currentSquare = document.querySelector(`#${position}`)
                    currentSquare.appendChild(gamePieceOne)
                    gokuMovement = 3
                }else{
                    position ='three' 
                    gameStory.innerText= `Time Warp! ${currentPlayer} is sent back to square three`
                    let currentSquare = document.querySelector(`#${position}`)
                    currentSquare.appendChild(gamePieceTwo)
                    vegetaMovement = 3
                }
            }
        else if(position == 'thirty-six'){
                console.log('cell')
                if (currentPlayer == 'Goku') {
                    position ='twenty-five' 
                    gameStory.innerText= `Defeated by Cell! ${currentPlayer} is sent back to square twenty-five`
                    let currentSquare = document.querySelector(`#${position}`)
                    currentSquare.appendChild(gamePieceOne)
                    gokuMovement = 25
                }else{
                    position ='twenty-five' 
                    gameStory.innerText= `Defeated by Cell! ${currentPlayer} is sent back to square twenty-five`
                    let currentSquare = document.querySelector(`#${position}`)
                    currentSquare.appendChild(gamePieceTwo)
                    vegetaMovement = 25
                }
            }
        if (vegetaMovement === gokuMovement) {
            if(currentPlayer === 'Goku'){
                if(timeWarp){
                    setTimeout(() => {
                        gameStory.innerText= `"I am the prince of all Saiyans once again!
                        Bow before your prince, Kakarot!" Goku moves back to start `
                        gokuMovement = 0 
                        let currentSquare = document.querySelector(`#start`)
                        currentSquare.appendChild(gamePieceOne)
                    },1000)
                }
                else{
                    gameStory.innerText= `"I am the prince of all Saiyans once again!
                    Bow before your prince, Kakarot!" Goku moves back to start `
                    gokuMovement = 0 
                    let currentSquare = document.querySelector(`#start`)
                    currentSquare.appendChild(gamePieceOne)
                }
            }
            else{
                if (timeWarp) {
                    setTimeout(() => {
                        gameStory.innerText= `"Welcome back Vegeta. I guess it's a good thing I didn't bury you that deep after all." Vegeta moves back to start `
                        vegetaMovement = 0 
                        let currentSquare = document.querySelector(`#start`)
                        currentSquare.appendChild(gamePieceTwo)
                    },1000)
                } else {
                    gameStory.innerText= `"Welcome back Vegeta. I guess it's a good thing I didn't bury you that deep after all." Vegeta moves back to start `
                    vegetaMovement = 0 
                    let currentSquare = document.querySelector(`#start`)
                    currentSquare.appendChild(gamePieceTwo)
                    
                }
            }
        }
        winCheck()
    }
    const assignPosition= (position) => {
        console.log('positionCheck', position)
        if (currentPlayer === 'Goku') {
            let currentSquare = document.querySelector(`#${position}`)
            currentSquare.appendChild(gamePieceOne)
            gameStory.innerText= `Goku moves to square ${position}`
            setTimeout(() => checkSpecialCondition(position),1000)
        } else {
            let currentSquare = document.querySelector(`#${position}`)
            currentSquare.appendChild(gamePieceTwo)
            gameStory.innerText= `Vegeta moves to square ${position}`
            setTimeout(() => checkSpecialCondition(position),1000)
            
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
        if (currentPlayer == 'Goku') {
            currentPlayer = 'Vegeta'
            gameStatus.innerHTML=`Player turn: ${currentPlayer}`
        } else { 
            currentPlayer = 'Goku'
            gameStatus.innerHTML=`Player turn: ${currentPlayer}`
        }
    }
    const winCheck = () =>{
        console.log(gokuMovement)
        console.log(vegetaMovement)
        if(gokuMovement >= 37){
            gameStory.innerText='Game Over!'
            gameStatus.innerText= `Goku wins`
            console.log('Goku wins')
            gameActive = false
            rollButton.style.display= 'none'
        }
        if(vegetaMovement >= 37){
            gameStory.innerText='Game Over!'
            gameStatus.innerText=`Vegeta wins`
            console.log('Vegeta wins')
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