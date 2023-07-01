const fs = require("fs");


function generateLogo(answers) {
    const { logoText, textColor, logoShape, shapeColor } = answers;

    let svgString = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">`;

    switch (logoShape) {
        case "circle":
            svgString += `<circle cx="150" cy="100" r="100" fill="${shapeColor}" />`;
            break;
        case "triangle":
            svgString += `<polygon points="25,200 150,0 275,200" fill="${shapeColor}" />`;
            break;
        case "square":
            svgString += `<rect x="50" y="0" width="200" height="200" fill="${shapeColor}" />
            `;
            break;
    }

    const textElement = `<text x="150" y="125" font-size="60" fill="${textColor}" text-anchor="middle" dominant-baseline="central">${logoText}</text>`;
    svgString += textElement;

    svgString += `</svg>`;

    return svgString;
}

function saveLogoFile(filename, logo) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filename, logo, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
}

module.exports = {
    generateLogo,
    saveLogoFile,
};