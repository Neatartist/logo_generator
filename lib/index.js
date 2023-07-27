const inquirer = require('inquirer')
const fs = require('fs')
const questions = require('./questions ')
const Logo = require('/Assets/circle.svg')
const difShapes = require('./difShapes')

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