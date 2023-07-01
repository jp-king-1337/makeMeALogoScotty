// Jest tests for shapes
const { Circle, Square, Triangle, EquilateralTriangle } = require("./shapes");


test('render method returns the correct SVG string for Circle shape', () => {
    const shape = new Circle();
    shape.setColor("red");
    const expectedSvgString = '<circle cx="150" cy="100" r="100" fill="red" />';
    expect(shape.render()).toEqual(expectedSvgString);
});

test('render method returns the correct SVG string for Square shape', () => {
    const shape = new Square();
    shape.setColor("green");
    const expectedSvgString = '<rect x="50" y="0" width="200" height="200" fill="green" />';
    expect(shape.render()).toEqual(expectedSvgString);
});

test('render method returns the correct SVG string for Triangle shape', () => {
    const shape = new Triangle();
    shape.setColor("blue");
    const expectedSvgString = '<polygon points="150,18 244,182 56,182" fill="blue" />';
    expect(shape.render()).toEqual(expectedSvgString);
});

test('render method returns the correct SVG string for Equilateral Triangle shape', () => {
    const shape = new EquilateralTriangle();
    shape.setColor("#301934");
    const expectedSvgString = '<polygon points="25,200 150,0 275,200" fill="#301934" />';
    expect(shape.render()).toEqual(expectedSvgString);
});