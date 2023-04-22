// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log(license);
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# 


  ## Table of Contents
  -[Description](#description)
  
  -[Installation](#installation)
  
  -[Usage](#usage)
  
  -[License](#license)
  
  -[Contributing](#contributing)
  
  -[Testing](#testing)
  
  -[Questions?](#questions)
  
  ## Description
  
  
  ## Installation 
  
  ```
  [code snippet]
  ```
  
  ## Usage
  
  
  
  ## License
  
  
  
  ## Contributing
  
  
  
  ## Testing
  
  ```
  [code snippet]
  ```
  
  ## Questions?
  
  Contact me on:
  
  GitHub - 
  
  Email - 
`;
}

module.exports = {
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection,
  generateMarkdown,
}
  
