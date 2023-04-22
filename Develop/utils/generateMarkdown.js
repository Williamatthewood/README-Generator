// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge;

  switch (license) {
    case "Apache 2.0 License":
      licenseBadge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "GNU GPLv3":
      licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case "MIT":
      licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case "ISC License":
      licenseBadge = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
      break;
    default:
      licenseBadge = "";
      break;
  }

  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink;

  switch (license) {
    case "Apache 2.0 License":
      licenseLink = "[Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0)";
      break;
    case "GNU GPLv3":
      licenseLink = "[GNU GPLv3](https://www.gnu.org/licenses/gpl-3.0.en.html)";
      break;
    case "MIT":
      licenseLink = "[MIT](https://opensource.org/license/mit/)";
      break;
    case "ISC License":
      licenseLink = "[ISC License](https://opensource.org/license/isc-license-txt/)";
      break;
    default:
      licenseLink = "";
      break;
  }

  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection;

  switch (license) {
    case "Apache 2.0 License":
      licenseSection = "";
      break;
    case "GNU GPLv3":
      licenseLink = "[GNU GPLv3](https://www.gnu.org/licenses/gpl-3.0.en.html)";
      break;
    case "MIT":
      licenseLink = "[MIT](https://opensource.org/license/mit/)";
      break;
    case "ISC License":
      licenseLink = "[ISC License](https://opensource.org/license/isc-license-txt/)";
      break;
    default:
      licenseLink = "";
      break;
  }

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
//   return `# 


//   ## Table of Contents
//   -[Description](#description)
  
//   -[Installation](#installation)
  
//   -[Usage](#usage)
  
//   -[License](#license)
  
//   -[Contributing](#contributing)
  
//   -[Testing](#testing)
  
//   -[Questions?](#questions)
  
//   ## Description
  
  
//   ## Installation 
  
//   ```
//   [code snippet]
//   ```
  
//   ## Usage
  
  
  
//   ## License
  
  
  
//   ## Contributing
  
  
  
//   ## Testing
  
//   ```
//   [code snippet]
//   ```
  
//   ## Questions?
  
//   Contact me on:
  
//   GitHub - 
  
//   Email - 
// `;
}

module.exports = {
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection,
  generateMarkdown,
}
  
