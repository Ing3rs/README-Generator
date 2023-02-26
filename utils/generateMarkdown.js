// function to generate markdown for README
function generateMarkdown(data) {
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
  Copyright (c) ${data.githubUsername}. All rights reserved.
  Licensed under the ${data.license} license.
  Add license badge?

`;
}

module.exports = generateMarkdown;
