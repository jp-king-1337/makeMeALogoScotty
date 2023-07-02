# makeMeALogoScotty


## Description

This project will generate a simple logo, in the shape of circle, square, or triangle, with up to three characters inside. User can choose their characters, colors, and shape, and receive a generated SVG file of their logo.


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)


## Installation

You can clone this github repo with the command line:
git clone git@github.com:jp-king-1337/makeMeALogoScotty.git


## Usage

This project is to be graded as part of my participation in the Rutgers Coding Bootcamp.

[Walkthrough Video](https://drive.google.com/file/d/1sTPJDtipi4FTUOT6zJrtiIhHablz4lnz/view?usp=sharing)


## Credits

I used the documentation available at the [svg.js website](https://svgjs.dev/docs/3.0/) originally, which included some copy/pasting of code while trying to figure out how to make my shapes. That code is still in early branches, but is not present in the final product because I ran into so many problems with svg.js that it was easier for me to just learn how to construct SVG shapes.

I consulted ChatGPT for assistance debugging, particularly while trying to work with svg.js. After an hour trying to figure out what the errors meant, I did paste some of ChatGPT's solutions to check if they would fix the problems, but that code was abandoned later once I decided to just build the shapes in template literals.
The one copied thing that remains from that is line 76 of shapes.js, the Promise. One of the errors was something about writeFile being asynchronous, and ChatGPT suggested that the Promise object could help with that. I saw no need to remove it later.


## License

This application is covered under the "MIT" license.


## Badges

N/A


## Features

N/A


## How to Contribute

N/A


## Tests

N/A