const inquirer = require('inquirer');
const fs = require('fs');
const Logo = require('/Assets/circle.svg');
const questions = require('./questions')
const difShapes = require('./difShapes');


// initializes the prompt to ask questions
function init (){
  inquirer
  .prompt(questions)
  .then((response) =>{
    createLogo(response);
  })
  .catch(err => {
    console.log(err)
  });
}

// creates a new svg Logo

function createLogo(response) {
  const svg = difShapes(response)
  fs.writeFile(Logo, svg, () => console.log('create new Logo.svg'));
}

init();

