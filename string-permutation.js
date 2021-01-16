// Create a recursion function that takes a string of letters and calculates the number of possible combinations

function letterCombinations(str) {
    if (str.length === 1) {
        return 1;
    }
    else {
        return str.length * letterCombinations(str.substring(1));
    }
}