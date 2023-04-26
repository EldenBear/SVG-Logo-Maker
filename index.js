// Imports used for logo
const inquirer = require("inquirer");
const fs = require("fs");
const { Circle } = require("./lib/shapes");
const { Triangle } = require("./lib/shapes");
const { Square } = require("./lib/shapes");
// Prompts given to user
const questions = [
  {
    type: "input",
    name: "letters",
    message: "Please enter up to three characters for your logo.",
  },

  {
    type: "input",
    name: "letterColor",
    message: "Please enter a color for your characters on the logo.",
  },

  {
    type: "list",
    name: "shape",
    message: "Please choose a shape for your logo.",
    choices: ["Circle", "Triangle", "Square"],
  },

  {
    type: "input",
    name: "shapeColor",
    message: "Please enter a color for your shape on the logo.",
  },
];

// Function that takes in user input and creates a svg file
function init() {
  inquirer.prompt(questions).then((data) => {
    let svgString = "";
    if (data.shape === "Circle") {
      const circleClass = new Circle(
        data.letters,
        data.letterColor,
        data.shapeColor
      );
      svgString = circleClass.render();
    } else if (data.shape === "Triangle") {
      const triangleClass = new Triangle(
        data.letters,
        data.letterColor,
        data.shapeColor
      );
      svgString = triangleClass.render();
    } else {
      data.shape === "Square";
      const squareClass = new Square(
        data.letters,
        data.letterColor,
        data.shapeColor
      );
      svgString = squareClass.render();
    }
    const fileName = "Logo.svg";
    fs.writeFileSync(fileName, svgString, () => {});
  });
}
// Calls init function
init();
