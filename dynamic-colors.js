// Use closures to create 3 buttons
// Create a function changeColor that accepts a color value
// Buttons change color on click
// Use closures
// When button is clicked, closure is invoked and color updated
function changeColor(color) {
    return function() {
        return color;
    }
}