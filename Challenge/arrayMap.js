function subArray(arr, target) {
    let start = 0;
    let currentSum = 0;

    for (let end = 0; end < arr.length; end++) {
        currentSum += arr[end];

        while (currentSum > target && start <= end) {
            currentSum -= arr[start];
            start++;
        }

        // Check if the currentSum equals the target
        if (currentSum === target) {
            return true;
        }
    }

    return false;
}

const arr = [4, 2, 7, 1, 9, 5];
const target = 12;
const result = subArray(arr, target);
console.log(result); 
