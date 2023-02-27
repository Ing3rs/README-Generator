// function to generate markdown for README
function generateMarkdown(data) {

  // choose correct license badge
  let badgeURL = "";

  if (`${data.license}` === 'MIT') {

    // generate badge graphic URL
    badgeURL = "![License](https://img.shields.io/badge/License-MIT-yellow.svg)"

    // generate link to license information
    licenseURL = "https://opensource.org/licenses/MIT"

  } else if (`${data.license}` === 'Apache 2.0') {
    badgeURL = "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)"
    licenseURL = "https://opensource.org/licenses/Apache-2.0"

  } else if (`${data.license}` === 'GNU GPL v3') {
    badgeURL = "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)"
    licenseURL = "https://www.gnu.org/licenses/gpl-3.0"

  } else if (`${data.license}` === 'GNU GPL v2') {
    badgeURL = "![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)"
    licenseURL = "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html"

  } else {
    // BSD 3-Clause License
    badgeURL = "![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)"
    licenseURL = "https://opensource.org/licenses/BSD-3-Clause"
  };


  // generate README
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Testing](#testing)
  * [Feedback](#feedback)
  * [License](#license)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## Testing
  ${data.tests}

  ## Feedback
  * If you'd like to provide feedback, please drop me an email at ${data.email}
  * Feel free to also take a look through my [GitHub](https://www.github.com/${data.githubUsername}) to see what other projects I'm working on
  
  ## License
  ${badgeURL}

  Copyright (c) ${data.githubUsername}. All rights reserved.

  Licensed under the [${data.license}](${licenseURL}) license.

`;
}

module.exports = generateMarkdown;
