'use strict'

//How many can be guessed in 60 seconds?
//Rounds
//2 hints pr round
//Flash red on correct - green on incorrect

//https://dictionaryapi.dev/
// Words https://github.com/meetDeveloper/freeDictionaryAPI/blob/master/meta/wordList/english.txt
const fetchDefinition = () => {
    fetch('https://api.dictionaryapi.dev/api/v2/entries/en/hi')
        .then(response => response.json())
        .then(data => console.log(data["0"]["meanings"]["0"]["definitions"]["0"]["definition"]));
}


fetchDefinition();