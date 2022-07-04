const licenseBadgeLinks = require("./licenseBadges");

// TODO: Create a function that returns a license badge based on which license is passed in

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const emptyString = ("")
  return {
    emptyString
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const emptyString = ("")
  return {
    emptyString
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const emptyString = ("")
  return {
    emptyString
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  data.licenseBadge = licenseBadgeLinks[data.license];

  return `# ${data.title}

${data.licenseBadge}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## License

This repository is using the ${data.license} license.

## Contributing

${data.contribute}

## Tests

In order to run tests, please run the following:

\` ${data.tests} \`

## Questions

Questions about this repository should be directed to [${data.email}](mailto:${data.email}). View more of my work at [${data.user}](https://github.com/${data.user})

`;
}

module.exports = generateMarkdown;
