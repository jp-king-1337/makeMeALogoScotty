const fs = require("fs");


class Shape {
    constructor() {
        this.color = "";
    }

    setColor(color) {
        this.color = color;
    }

    render() {
        return "";
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="150,18 244,182 56,182" fill="${this.color}" />`;
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="100" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    render() {
        return `<rect x="50" y="0" width="200" height="200" fill="${this.color}" />`;
    }
}

class EquilateralTriangle extends Shape {
    render() {
        return `<polygon points="25,200 150,0 275,200" fill="${this.color}" />`;
    }
}


function generateLogo(answers) {
    const { logoText, textColor, logoShape, shapeColor } = answers;

    let svgString = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">`;

    const shape = createShape(logoShape);
    shape.setColor(shapeColor);
    svgString += shape.render();

    svgString += `
      <text x="150" y="150" font-size="50" fill="${textColor}" text-anchor="middle" dominant-baseline="middle">
        ${logoText}
      </text>`;

    svgString += `</svg>`;

    return svgString;
}

function createShape(shapeType) {
    switch (shapeType) {
        case "circle":
            return new Circle();
        case "square":
            return new Square();
        case "triangle":
            return new Triangle();
        case "equilateral triangle":
            return new EquilateralTriangle();
    }
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
    Circle,
    Square,
    Triangle,
    EquilateralTriangle,
};