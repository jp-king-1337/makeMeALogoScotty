const fs = require("fs");
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
    .then((answers) => {
        // I've noticed in class that JD seems to have his variables in alphabetical order, so I want to try to do that too. And also ask about it next class.
        const logo = generateLogo(answers);

        fs.writeFile("logo.svg", logo);
    });



function generateLogo(answers) {
    const { logoText, textColor, logoShape, shapeColor } = answers;

    const svg = createSVG().size(300, 200);

    let shape;
    switch (logoShape) {
        // Found a way to construct shapes! Made sure these all work.
        case "circle":
            // https://jsfiddle.net/y9gtm6es/15/
            shape = svg.circle(100).move(150, 100).fill(shapeColor);
            break;
        case "triangle":
            // https://jsfiddle.net/qz6rhubv/
            shape = svg.polygon([150, 50, 100, 150, 200, 150]).fill(shapeColor);
            // This is still witchcraft. I can play with the circle and the square, but I have to trust ChatGPT about the triangle because I can't wrap my head around it. Want to try some more, but that will have to wait. I want to move on for now and actually get the app working.
            break;
        case "square":
            // https://jsfiddle.net/y9gtm6es/18/
            shape = svg.rect(100, 100).move(100, 50).fill(shapeColor);
            break;
        default:
            break;
    }

    svg.text(logoText)
        .x(150)
        .y(125)
        .font({ size: 60 })
        .fill(textColor)
        .center("middle")
        .middle("middle");

    const svgString = svg.svg();

    return svgString;
}