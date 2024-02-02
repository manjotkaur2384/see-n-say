// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables */
var synth = window.speechSynthesis;
var textToSpeak = '';
var speakButton = document.getElementById('speakButton');
var surpriseMeButton = document.getElementById('surpriseMeButton');
var playbackButton = document.getElementById('playbackButton');
var clearButton = document.getElementById('clearButton');
var outputDiv = document.getElementById('output');

/* Arrays */
var nounArray = ['Cat', 'Dog', 'Tree', 'Car', 'Book', 'House', 'Sun'];
var verbArray = ['Run', 'Jump', 'Read', 'Sing', 'Sleep', 'Eat', 'Write'];
var soundArray = ['Meow', 'Bark', 'Chirp', 'Roar', 'Hiss', 'Buzz', 'Howl'];
var animalArray = ['Elephant', 'Lion', 'Monkey', 'Giraffe', 'Penguin', 'Kangaroo', 'Zebra'];
var adjectiveArray = ['Happy', 'Sad', 'Funny', 'Brave', 'Lazy', 'Clever', 'Silly'];

/* Image Arrays */

/* Functions */
function speakNow(string) {
    var utterThis = new SpeechSynthesisUtterance(string);
    synth.speak(utterThis);
}

function generateRandom(category) {
    var categoryArray = [];

    switch (category) {
        case 'noun':
            categoryArray = nounArray;
            break;
        case 'verb':
            categoryArray = verbArray;
            break;
        case 'sound':
            categoryArray = soundArray;
            break;
        case 'animal':
            categoryArray = animalArray;
            break;
        case 'adjective':
            categoryArray = adjectiveArray;
            break;
        default:
            break;
    }

    var randomIndex = Math.floor(Math.random() * categoryArray.length);
    var randomWord = categoryArray[randomIndex];

    textToSpeak += randomWord + ' ';
    outputDiv.textContent = textToSpeak;
}

function clearText() {
    textToSpeak = '';
    outputDiv.textContent = '';
}

function surpriseMe() {
    clearText();
    generateRandom('noun');
    generateRandom('verb');
    generateRandom('sound');
    generateRandom('animal');
    generateRandom('adjective');
}

function playback() {
    speakNow(textToSpeak);
}

/* Event Listeners */
speakButton.addEventListener('click', function () {
    speakNow(textToSpeak);
});

surpriseMeButton.addEventListener('click', function () {
    surpriseMe();
});

playbackButton.addEventListener('click', function () {
    playback();
});

clearButton.addEventListener('click', function () {
    clearText();
});
