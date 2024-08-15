const correctAnswer = "1920";
function focusNextInput(currentId, nextId) {
    if (document.getElementById(currentId).value.length === 1) {
        document.getElementById(nextId).focus();
    }
}
function checkGuess() {
    const char1 = document.getElementById('char1').value;
    const char2 = document.getElementById('char2').value;
    const char3 = document.getElementById('char3').value;
    const char4 = document.getElementById('char4').value;
    const userGuess = char1 + char2 + char3 + char4;

    const result = document.getElementById('result');

    if (userGuess.length === 4) {
        if (userGuess === correctAnswer) {
            result.textContent = "Correct! The movie is 1920";
        } else {
            result.textContent = "Wrong! Try again.";
            changeBombImages();
        }
    }
}

function changeBombImages() {
    document.getElementById('bomb1').src = "bomb2.png";
    document.getElementById('bomb2').src = "bomb2.png";
    document.getElementById('bomb3').src = "bomb2.png";
    document.getElementById('bomb4').src = "bomb2.png";
}