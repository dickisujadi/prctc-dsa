// Given an unsorted integer array, find a pair with the given sum in it.

// example:
// Input:
 
// nums = [8, 7, 2, 5, 3, 1]
// target = 10
 
// Output:
 
// Pair found (8, 2)
// or
// Pair found (7, 3)
 
 
// Input:
 
// nums = [5, 2, 6, 8, 1, 9]
// target = 12
 
// Output: Pair not found

function pairCheck(arrayInput, target) {
    for (let i = 0; i < arrayInput.length; i++) {
        for (let j = i+1; j < arrayInput.length; j++) {
            var sum = arrayInput[i] + arrayInput[j];
            if(sum == target) {
                console.log(`Pair found: ${arrayInput[i]} + ${arrayInput[j]}`);
                return
            }
        }
    }

    console.log('Pair Not Found');
}

pairCheck([8, 7, 2, 5, 3, 1], 10);
pairCheck([5, 2, 6, 8, 1, 9], 12);