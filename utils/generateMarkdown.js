// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

    let lic = ""
  
    if (license == 'GNU AGPLv3'){
      lic = 'AGPL-3.0';  
    } else if (license == 'GNU GPLv3') {
      lic = 'GPL-3.0';
    } else if (license == 'GNU LGPLv3'){
      lic = 'LGPL-3.0';
    } else if (license == 'Mozilla Public License 2.0'){
      lic = 'MPL-2.0';
    } else if (license == 'Apache 2.0'){
      lic = 'Apache-2.0';   
    } else if (license == 'Boost Software License 1.0'){
      lic = 'BSL-1.0';
    } else if (license == 'MIT'){
      lic = 'MIT';
    } else if (license == 'The Unlicense'){
      lic = 'Unlicense';
    }
  
    return `![license](https://img.shields.io/badge/License-${lic}-purple)`;
  }
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
  
    let lic = ""
  
    if (license == 'GNU AGPLv3'){
      lic = 'agpl-3.0';
    } else if (license == 'GNU GPLv3') {
      lic = 'gpl-3.0';
    } else if (license == 'GNU LGPLv3'){
      lic = 'lgpl-3.0';
    } else if (license == 'Mozilla Public License 2.0'){
      lic = 'mpl-2.0';
    } else if (license == 'Apache 2.0'){
      lic = 'apache-2.0';
    } else if (license == 'Boost Software License 1.0'){
      lic = 'bsl-1.0'; 
    } else if (license == 'MIT'){
      lic = 'mit';  
    } else if (license == 'The Unlicense'){
      lic = 'unlicense';
    }
  
    let licLink = `https://choosealicense.com/licenses/${lic}`;
  
    return licLink;
  }
  
  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
  
    return `
# ${data.title}
  
${renderLicenseBadge(data.license)}
  
## Description
  
${data.desc}
  
## Table of Contents
  
- [Installation](#installation)
- [Usage](#usage)
- [Test Instructions](#tests)
- [License](#license)
- [Contact](#contact)
  
### Installation
  
${data.installation}
  
### Usage
  
${data.usage}
  
### Tests
  
${data.test}
  
### License
  
This project is using ${data.license} license. More information at [Licenses](${renderLicenseLink(data.license)}).
  
    ### Contact
  
    You can find more of my work at [Github](https://github.com/${data.github})
    Or, reach out to me through my email at ${data.email}
  
    `;
  }
  module.exports = generateMarkdown;