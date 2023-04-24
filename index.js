const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');

const questions = [
    {
        type: 'input',
        name: 'letters',
        message: "Please enter up to three characters for your logo.",
    },

    {
        type: 'input',
        name: 'letterColor',
        message: "Please enter a color for your characters on the logo.",
    },

    {
        type: 'list',
        name: 'shape',
        message: "Please choose a shape for your logo.",
        choices: ['Circle', 'Triangle', 'Square'],
    },

    {
        type: 'list',
        name: 'shapeColor',
        message: "Please enter a color for your shape on the logo.",
    },
];


function init() {
    inquirer
    .prompt(questions)
    .then((data) => {
        const fileName = 'Logo.svg';
        writeToFile(fileName, data);
    });
};

init();