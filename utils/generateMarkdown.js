// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'gpl-license') {
    return `![badge](https://img.shields.io/badge/license-gpl-license-blue.svg)`
  }
  if (license === 'Apache-2.0'){
    return `![badge](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
  }
  if (license === 'MIT'){
    return `![badge](https://img.shields.io/badge/License-MIT-yellow.svg)`
  }
  if (license === 'None'){
    return ` `
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `[license](#license) [${license}](https://opensource.org/licenses/${license})`;
    } else return ' ';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
  return `
    
  # License

  The application is covered under the following license:
  ${renderLicenseLink(license)}, 
  ${renderLicenseBadge(license)}
  `
    } else {
      return '';
    }
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  
  ${renderLicenseBadge(data.license)}
  
  ## Table-of-Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  # Installation
  🗳 
  ${data.installation}
  # Usage
  💻 
  ${data.usage}
  # Contribution
  👩🏻‍💻 
  ${data.contribution}
  # Test
  🧩
  ${data.test}
  </br>


  ${renderLicenseSection(data.license)}

  <br />

  # Questions❓

  My GitHub link: [${data.username}](https://github.com/${data.username})<br />

  <br />
   📩 If you have any question, email me here: [${data.email}]<br /><br />
 📠 My repo link: ${data.repo}</li>
`;
}

module.exports = generateMarkdown;
