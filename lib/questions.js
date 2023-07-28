const questions = [
  {
  type: 'checkbox',
  message: 'What shape would you like the Logo to be?',
  name: 'Shape',
  choices: ['Triangle','square','circle']
  },
  { 
  type: 'checkbox',
  message: 'What color would you like the Logo to be?',
  name: 'color',
  choices: ['red','blue','green'] 
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
  choices: ['red','blue','green',]
  },
];

module.exports = questions 