const licenseBadgeLink = {
  "MIT License": {
    badge: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    link: "https://opensource.org/licenses/MIT"
  },

  "Apache License 2.0": {
    badge: "[![License: Apache License 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)",
    link: "https://www.apache.org/licenses/LICENSE-2.0"
  },

  "GNU Generl Public License v3.0": {
    badge: "[![License: GNU GPL v3.0](https://img.shields.io/badge/License-GNU%20GPL%20v3.0-blue.svg)](https://www.gnu.org/licenses/gpl-3.0.html)",
    link: "https://www.gnu.org/licenses/gpl-3.0.html"
  },

  "Mozilla Public Licens 2.0": {
    badge: "[![License: Mozilla Public License 2.0](https://img.shields.io/badge/License-MPL%202.0-blue.svg)](https://www.mozilla.org/en-US/MPL/2.0/)",
    link: "https://www.mozilla.org/en-US/MPL/2.0/"
  },
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return licenseBadgeLink[license]?.badge || "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return licenseBadgeLink[license]?.link || "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(!license) {
    return "";
  }
  return `
  This project is licensed under ${license}.

  ${renderLicenseBadge(license)}
  ${renderLicenseLink(license)}
  `

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Tests](#tests)
  - [Contact Information](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Credits
  ${data.credits}

  ## License
  ${renderLicenseSection(data.license)}

  ## Tests
  ${data.tests}

  ## Questions
  If you had any questions, please feel free to contact me at ${data.email}.
  Here is my GitHub profile link ${data.github}

  `;
}

module.exports = generateMarkdown;
