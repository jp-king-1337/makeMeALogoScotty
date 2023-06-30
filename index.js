const inquirer = require("inquirer");
const { createSVG } = require("svg.js");


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

    const svg = createSVG().size(300, 200);

    let shape;
    switch (logoShape) {
        case "circle":
        shape = svg.circle(100)
        break;
    }
}