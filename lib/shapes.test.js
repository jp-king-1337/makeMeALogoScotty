// Jest tests for shapes
const { Triangle } = require("./shapes");



test('render method returns the correct SVG string for Triangle shape', () => {
    const shape = new Triangle();
    shape.setColor("blue");
    const expectedSvgString = '<polygon points="150,18 244,182 56,182" fill="blue" />';
    expect(shape.render()).toEqual(expectedSvgString);
});