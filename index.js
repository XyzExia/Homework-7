const { info } = require('console');
const fs = require('fs');
const inquirer = require('inquirer');
const content = ({name,}) => 
`<div>

<h1>Hi! My name is ${name}</h1>
</div>
`;

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
          },

    ])
    .then((info) => {
        const contenthtml = content(info);
        fs.writeFile('README.me', contenthtml, (err) =>
        err ? console.log(err) : console.log('goodstuff')
        );
    });

