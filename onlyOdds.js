
// [2, 4, 6, 8, 11, 20, 15, 22]

// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]	

// [70, 42, 55, 81, 21, 91, 34]	

// [2, 4, 6, 8, 10, 11, 12] 	

let allOdds = [];

function getOdds(input) {
    for(let i =0; i < input.length;i++) {
        if (input[i] % 2 === 1) {
            allOdds.push(input[i])


        }

    }

    return allOdds

}

console.log(getOdds([70, 42, 55, 81, 21, 91, 34]))


