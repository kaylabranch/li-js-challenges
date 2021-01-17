// Build a string validator using regex to test if a password is strong enough
// If strong enough, return message saying it's valid. Else, it's invalid
// Use a ternary operator to return a boolean
// 1+ lowercase
// 1+ uppercase
// 1 digit
// 1 special char
// 8+ chars long

function isPasswordStrongEnough(str) {
    const lowercaseCheck = str.match(/[a-z]/g)?.length > 1;
    const uppercaseCheck = str.match(/[A-Z]/g)?.length > 1;
    const digitCheck = str.match(/\d/g)?.length === 1;
    const specialCharCheck = str.match(/[^a-zA-Z0-9\s\-]/g)?.length === 1;
    const lengthCheck = str.length >= 8;

    return lowercaseCheck && uppercaseCheck && digitCheck && specialCharCheck && lengthCheck ?
        'Password is valid' : 'Password is invalid';
}