function stringTransform(string) {
    const leng = string.length;

    // Check if string is divisible by three and five
    const divideBy3 = (leng % 3 === 0);
    const divideBy5 = (leng % 5 === 0);

    // Reverse string if divisible by 3
    let transformedString = string;
    if (divideBy3) {
        transformedString = reverseString(transformedString);
    }

    // Convert to ASCII if divisible by 5
    if (divideBy5) {
        transformedString = convertToAscii(transformedString);
    }

    // If divisible by both 3 and 5, perform both transformations
    if (divideBy3 && divideBy5) {
        transformedString = convertToAscii(reverseString(transformedString));
    }

    return transformedString;
}

// Function to reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Function to convert to ASCII codes
function convertToAscii(str) {
    return str.split('').map(char => char.charCodeAt(0)).join(' ');
}

let input = "Hello World";
const output = stringTransform(input);
console.log(output);

