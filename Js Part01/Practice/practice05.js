// switch case
let prompt = require("prompt-sync")();
let areaOfShape = prompt("Enter shape (circle/rectangle/square): ").toLowerCase(); // circle, rectangle, square

switch (areaOfShape) {

    case "circle":
        let radius = Number(prompt("Enter radius of circle: "));
        console.log(`area of circle is ${Math.PI * (Math.pow(radius, 2))}`);
        break;

    case "rectangle":
        let length = Number(prompt("Enter length of rectangle: "));
        let width = Number(prompt("Enter width of rectangle: "));
        console.log(`area of rectangle is ${length * width}`);
        break;

    case "square":
        let side = Number(prompt("Enter side of square: "));
        console.log(`area of square is ${Math.pow(side, 2)}`);
        break;

    default:
        console.log("Invalid option.");
}