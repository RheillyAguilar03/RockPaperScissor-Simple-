

let myChoice;
let myScore = 0
let opponentChoice;
let opponentScore = 0
let choices = ["scissor", "paper", "rock"]

window.onload = function () {

    for (i = 0; i < 3; i++) {

        let choice = document.createElement("img")
        choice.id = choices[i]
        choice.src = choices[i] + ".png"
        choice.addEventListener("click", gameFunction)
        document.getElementById("the-choices").append(choice)
        choices.disabled = true
    }

}


function gameFunction() {

    myChoice = this.id
    document.getElementById("image-myChoice").src = myChoice + ".png"


    opponentChoice = choices[Math.floor(Math.random() * 3)]
    document.getElementById("image-opponentChoice").src = opponentChoice + ".png"

    if (myChoice === opponentChoice) {
        myScore += 0
        opponentScore += 0
    } else {
        if (myChoice === "rock") {
            if (opponentChoice === "scissor") {
                myScore += 1
            } else if (opponentChoice === "paper") {
                opponentScore  += 1
            }
        } else if (myChoice === "scissor") {
            if (opponentChoice === "paper") {
                myScore += 1
            } else if (opponentChoice == "rock")
                opponentScore += 1
        } else if (myChoice === "paper") {
            if (opponentChoice === "rock") {
                myScore += 1
            } else if (opponentChoice === "scissor") {
                opponentScore += 1
            }
        }
    }

    if(myScore === 10) {
        document.getElementById("status").innerText = "You are Victory"
    
    } else if (opponentScore === 10) {
        document.getElementById("status").innerText = "Opponent Victory"
    }


    document.getElementById("my-score").innerText = "Your Score: " + myScore
    document.getElementById("oppenent-score").innerText = "Opponent Score: " + opponentScore 


}
