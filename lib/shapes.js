// Exports `Triangle`, `Circle`, and `Square` classes
function generateLogo(answers) {
    const { logoText, textColor, logoShape, shapeColor } = answers;

    const svg = SVG().size(300, 200);

    let shape;
    switch (logoShape) {
        // Links below are for messing with each shape.
        case "circle":
            // https://jsfiddle.net/y9gtm6es/15/
            shape = svg.circle(100).move(150, 100).fill(shapeColor);
            break;
        case "triangle":
            // https://jsfiddle.net/qz6rhubv/
            shape = svg.polygon([150, 50, 100, 150, 200, 150]).fill(shapeColor);
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

function saveLogoFile(filename, logo) {
    fs.writeFile(filename, logo, (err) => {
        if (err) throw err;
        console.log(`Logo saved as ${filename}.`)
    });
}