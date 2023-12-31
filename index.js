const inquirer = require("inquirer");
const { generateLogo, saveLogoFile } = require("./lib/shapes");


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
            choices: ["circle", "square", "triangle", "equilateral triangle"],
        },
        {
            name: "shapeColor",
            message: "Enter your shape color (keyword or hexadecimal):",
        },
    ])
    .then((answers) => {
        const logo = generateLogo(answers);

        saveLogoFile("examples/logo.svg", logo)
            .then(() => {
                console.log("Generated logo.svg.");
            })
            .catch((err) => {
                console.error("An error occurred while saving the logo:", err);
            });
    });
