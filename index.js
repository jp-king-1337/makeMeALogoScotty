const fs = require("fs");
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
            choices: ["circle", "triangle", "square"],
        },
        {
            name: "shapeColor",
            message: "Enter your shape color (keyword or hexadecimal):",
        },
    ])
    .then((answers) => {
        const logo = generateLogo(answers);

        saveLogoFile("logo.svg", logo)
        .then(() => {
            console.log("Logo saved as logo.svg.");

            // Inject the generated SVG code into the div element
            const svgContent = fs.readFileSync("logo.svg", "utf8");
            const logoDiv = document.querySelector(".logo");
            logoDiv.innerHTML = svgContent;
        })
            .catch((err) => {
                console.error("An error occurred while saving the logo:", err);
            });
    });
