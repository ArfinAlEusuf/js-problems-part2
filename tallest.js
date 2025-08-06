const heights = [65, 66, 68, 72, 78, 60, 65, 66];

function getMax(numbers) {
    let max = heights[0];
    for (const num of numbers) {
        if (num > max) {
            max = num;
        }
    }
    return max;
}

const max = getMax(heights);
console.log('max value is ', max);

// min (home work)

function getMin(num){
    let numbers = heights[0];
    for(const minimum of num){
        minimum < numbers
    }
    return numbers;
}

const minimum = getMin(heights);
console.log(minimum)