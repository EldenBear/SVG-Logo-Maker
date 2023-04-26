const { Circle } = require("./shapes");
const { Triangle } = require("./shapes");
const { Square } = require("./shapes");

const correctCircleTestResult = `
    <svg width="500" height="500" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <circle cx="250" cy="250" r="150" fill="black"/>
        <text x="250" y="300" text-anchor="middle" fill="red" font-size="140px" font-family="math">DT</text>
    </svg>`;

const correctTriangleTestResult = `
    <svg width="500" height="500" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <polygon points="250,20 50,450 450,450" fill="orange"/>
        <text x="250" y="300" text-anchor="middle" fill="yellow" font-size="140px" font-family="math">CAT</text>
    </svg>`;

const correctSquareTestResult = `
    <svg width="500" height="500" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <rect x="100" y="100" width="300" height="300" fill="red"/>
        <text x="250" y="300" text-anchor="middle" fill="brown" font-size="140px" font-family="math">BLT</text>
    </svg>`;

describe('Test Circle', () => {
    it('should generate an SVG with a black circle with red text "DT", if the user wants a black circle with red text "DT"', () => {
        const circle = new Circle("DT", "red", "black");
        const circleSvg = circle.render();
        expect(circleSvg).toEqual(correctCircleTestResult); 
    });
});

describe('Test Square', () => {
    it('should generate an SVG with a red square with brown text "BLT", if the user wants a red square with brown text "BLT"', () => {
        const square = new Square("BLT", "brown", "red");
        const squareSvg = square.render();
        expect(squareSvg).toEqual(correctSquareTestResult); 
    });
});

describe('Test Triangle', () => {
    it('should generate an SVG with a orange triangle with yellow text "CAT", if the user wants a orange triangle with yellow text "CAT"', () => {
        const triangle = new Triangle("CAT", "yellow", "orange");
        const triangleSvg = triangle.render();
        expect(triangleSvg).toEqual(correctTriangleTestResult); 
    });
});