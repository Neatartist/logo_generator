const inquirer = require('inquirer');
const fs = require('fs');
const Logo = require('/Assets/circle.svg');
const difShapes = require('./difShapes');
const { type } = require('os');
const { default: Choices } = require('inquirer/lib/objects/choices');


const questions = [
  {
  type: 'checkbox',
  message: 'What shape would you like the Logo to be?',
  name: 'Shape',
  choices: [
    'Triangle',
    'square',
    'circle'
    ]
  },
  { 
  type: 'checkbox',
  message: 'What color would you like the Logo to be?',
  name: 'color',
  choices: [
    'red',
    'blue',
    'green'
    ]
  },
  {
  type: 'Input',
  message: 'Please type a maximum of three characters for your Logo',
  name: 'Logo',
  },
  {
  type: 'checkbox',
  message: 'What color would you like the Logo to be?',
  name: 'color',
  choices: [
    'red',
    'blue',
    'green'
    ]
  },
];
// initializes the prompt to ask questions


// creates a new svg Logo

