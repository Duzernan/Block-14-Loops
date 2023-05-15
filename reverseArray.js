
// [1, 2, 3]	

// [1, 3, 5, 7, 9, 11]	

// [20, 50, 30, 60, 200]	

// [1, -1, 2, -3, 5, -8, 13]	


let arrayReversed = [];

function reverseIt (arrayInput) {
    for (let i = 0; i < arrayInput.length; i++) {
        arrayReversed.unshift(arrayInput[i])

    }

    return arrayReversed

}


console.log(reverseIt([1, 3, 5, 7, 9, 11]))
