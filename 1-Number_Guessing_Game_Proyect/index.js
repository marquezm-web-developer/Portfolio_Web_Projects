(function(){
    "use strict"

    //Declaration of global constants that refer to html elements
    const guesses = document.querySelector('.guesses'); //Refers to the p element that returns the previous results
    const lastResult = document.querySelector('.lastResult'); //Refers to the p element that returns the value of current result (correct or incorrect)
    const lowOrHi = document.querySelector('.lowOrHi'); //Refers to the p element that returns the clue about the true value (Low or high)
    const guessSubmit = document.querySelector('.guessSubmit'); //Refers to the submit button that process the current value input
    const guessField = document.querySelector('.guessField'); //Refers to the text input element where the users input their answer


    // Declaration of global let variables
    let randomNumber = Math.floor(Math.random() * 100) + 1; //It calculate a random integer number
    let guessCount = 1; //It works how a counter that start in 1
    let resetButton; // This variable refers to reset button to reset initial conditions of the game. This element don't exist at the start the game, so this is created after with javascript
        
    guessField.focus(); //Focus to the text input element 

    guessSubmit.addEventListener('click', checkGuess); //When the user click submit guess button, invoke checkGuess function


    //function checkGuess: This is the main function of the code. This Evaluate the user answer with the different possibilities to win or lost.
    function checkGuess() {
        let userGuess = Number(guessField.value); //Assigns the userGuess variable the input 
        
        if (guessField.value == "" || isNaN(userGuess) ){//This condition evaluate if the input text is empty or the value is not a number. If is true then stop the function
            alert( "you must to write a number");
            guessField.value = "";
            guessField.focus();
            return;
        };
        
        //This conditional evaluate if the guessCount value is equal to 1 and edit the text content of p element (guesses constant)
        if (guessCount === 1) {
            guesses.textContent = 'Previous values: ';
        }
        
        guesses.textContent += userGuess + ' '; //If guessCount is different to 1, join userGuess value to previous guesses text content
        
        if (userGuess === randomNumber) {//If userGuess is extact the same that ramdomNumber, return text content of congratulations
            lastResult.textContent = 'Congratulations! You won!';
            lastResult.style.backgroundColor = 'green';
            lowOrHi.textContent = '';
            setGameOver(); //Disabled the input text and submit button and created reset button.

        }  else if (guessCount === 10) {//If guessCount is extact the same that 10, return text content of game over
            lastResult.textContent = 'You lost...game over!!!';
            setGameOver();//Disabled the input text and submit button and created reset button.

        }   else {
            lastResult.textContent = 'You wrong!';
            lastResult.style.backgroundColor = 'red';

                if (userGuess < randomNumber) {
                    lowOrHi.textContent = 'Your answer was very low!';
                } else if (userGuess > randomNumber) {
                    lowOrHi.textContent = 'Your answer was very high!';
                };
        };

        guessCount++; //After to evaluate the answer sum 1 to the guessCount
        guessField.value = '';//This empty the text input for the user
        guessField.focus();//This focus the text input for the user again
    };

    //function setGameOver: This is invoke whe the player win or lose the game and to create the reset button to reset the game to initial conditions
    function setGameOver() {
        guessField.disabled = true;
        guessSubmit.disabled = true;
        resetButton = document.createElement('button');
        resetButton.textContent = 'Start game again';
        resetButton.setAttribute("class","guessReset");
        document.body.append(resetButton);
        resetButton.addEventListener('click', resetGame);//This trigger the reset function to reset to initial conditions
    };

    //function resetGame: This reset to initial conditions the game
    function resetGame() {
        guessCount = 1;
        const resetParas = document.querySelectorAll('.resultParas p');//Refers to Div element that contain p element with text content

        for (let i = 0; i < resetParas.length; i++) {//This empty all the text content of p elements
            resetParas[i].textContent = '';
        };
    
        resetButton.parentNode.removeChild(resetButton);//delete reset button of the html file
        guessField.disabled = false;
        guessSubmit.disabled = false;
        guessField.value = '';
        guessField.focus();
        lastResult.style.backgroundColor = 'white';
        randomNumber = Math.floor(Math.random() * 100) + 1;
    };
})();











