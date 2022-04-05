'use strict'
import {schoolDictionaryKey} from './config.js'

//How many can be guessed in 60 seconds?
//Rounds
//2 hints pr round
//Flash red on correct - green on incorrect


//https://dictionaryapi.dev/
// Words https://github.com/meetDeveloper/freeDictionaryAPI/blob/master/meta/wordList/english.txt
const fetchSingleDefinition = (word) => {
    const apiPre = "https://dictionaryapi.com/api/v3/references/sd4/json/";
    const apiPost = "?key=";

    fetch(apiPre + word + apiPost + schoolDictionaryKey)
        .then(response => response.json())
        .then(data => data);
}

fetchSingleDefinition('hello');