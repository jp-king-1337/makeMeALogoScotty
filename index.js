const inquirer = require("inquirer");


// Time for prompts
inquirer
    .prompt([
        // Text up to 3 characters
        {
            name: "logoText",
            message: "Enter up to three characters:",
            // This should check if the input is less than or equal to 3 characters
            validate: (input) => {
                return input.length <= 3;
            },
        },

        // text color by keyword or hex number
        {
            name: "textColor",
            message: "Enter your text color (keyword or hexadecimal):",
        },

        // shape with list: circle, triangle, square
        {
            name: "logoShape",
            type: "list",
            message: "Choose a shape:",
            choices: ["circle", "triangle", "square"],
        },

        // shape color by keyword or hex number
        {
            name: "shapeColor",
            message: "Enter your shape color (keyword or hexadecimal):",
        },
    ])
    .then((answers) => [
        // Generate the logo based on user input, something like:
        // const logo = generateLogo(answers);
    ]);


function generateLogo(answers) {
    const { logoText, textColor, logoShape, shapeColor } = answers;

    // Okay so I kinda get how svg shapes work.
    // circle has attributes cx, cy, r, fill
        // cx is x-coordinate of circle center
        // cy is y-coordinate of circle center
     // r is radius
        // fill is fill color
    // polygon has attributes of points, fill
        // takes a list of x,y coordinate pairs separated by spaces
        // ew, weird to work with
    // rectangle has attributes x, y, width, height, fill
        // x is x-coordinate of top-left corner
        // y is y of top-left
        // width and height are semantic, like fill
    // All the same, I had ChatGPT design the shapes to ensure they fit within the required 300x200px image. I understand the circle and square well enough to try it myself, but the triangle is witchcraft as far as I can tell. ¯\_(ツ)_/¯

    switch (logoShape) {
        case "cirlce":
            svgTemplate = `<circle cx="150" cy="100" r="50" fill="${shapeColor}" />`;
            break;
        case "triangle":
            svgTemplate = `<polygon points="150,25 75,175 225,175" fill="${shapeColor}" />`;
            break;
        case "square":
            svgTemplate = `<rect x="100" y="50" width="100" height="100" fill="${shapeColor}" />`;
            break;
        default:
            break;
    }

    
}