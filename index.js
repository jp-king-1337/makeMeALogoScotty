const fs = require("fs");
const inquirer = require("inquirer");
const { SVG } = require("@svgdotjs/svg.js");


inquirer
    .prompt([
        {
            name: "logoText",
            message: "Enter up to three characters:",
            validate: (input) => {
                return input.length <= 3;
            },
        },
        {
            name: "textColor",
            message: "Enter your text color (keyword or hexadecimal):",
        },
        {
            name: "logoShape",
            type: "list",
            message: "Choose a shape:",
            choices: ["circle", "triangle", "square"],
        },
        {
            name: "shapeColor",
            message: "Enter your shape color (keyword or hexadecimal):",
        },
    ])
    .then((answers) => {
        const logo = generateLogo(answers);

        saveLogoFile("logo.svg", logo);
    });
