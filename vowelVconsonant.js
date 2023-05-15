
let vowel = 0

let consonant = 0

function howMany (wordInput) {
    for (let i =0; i < wordInput.length; i++) {
        if (wordInput[i] === 'a' || wordInput[i] === 'e' || wordInput[i] === 'i' || wordInput[i] === 'o' || wordInput[i] === 'u'){
            vowel++

        } else {
            consonant++

        }

    }

    return (`${wordInput} has ${consonant} consonants and ${vowel} vowels`)

}

console.log(howMany("textbook"))