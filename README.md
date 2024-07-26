# Battleship Game

## Overview

This project implements a classic Battleship game using JavaScript. The game includes several core components:
- **Ship**: Represents the ships in the game.
- **Gameboard**: Manages the placement of ships and tracking of attacks.
- **Player**: Represents both human and computer players.

The project is designed to test functionality through unit tests and manage game logic without relying on a graphical user interface (UI). The UI is crafted separately and interacts with the game logic via event listeners.

## Components

### Ship

The `Ship` class represents a ship with the following properties and methods:
- **Properties**:
  - `length`: The length of the ship.
  - `hits`: The number of times the ship has been hit.
  - `sunk`: Whether the ship has been sunk.
- **Methods**:
  - `hit()`: Increases the number of hits on the ship.
  - `isSunk()`: Returns whether the ship is sunk based on the number of hits and its length.

### Gameboard

The `Gameboard` class handles ship placement and attack management:
- **Methods**:
  - `placeShip(coordinate, ship)`: Places a ship on the gameboard at specified coordinates.
  - `receiveAttack(coordinate)`: Processes an attack at specified coordinates, updates the ship's hit status, and records missed attacks.
  - `allShipsSunk()`: Checks if all ships on the gameboard have been sunk.

### Player

The `Player` class manages individual players:
- **Types**:
  - **Human Player**: Represents a real player.
  - **Computer Player**: Represents a computer-controlled player.
- **Properties**:
  - `gameboard`: The player's gameboard instance.

### Game Flow

1. **Setup**:
   - Create instances of `Player` for each player (human and computer).
   - Populate each player’s `Gameboard` with predetermined coordinates for ships.

2. **Gameplay**:
   - Players take turns attacking the opponent’s `Gameboard`.
   - The game continues until all ships of one player have been sunk.

3. **Computer Player**:
   - The computer makes random moves, ensuring no repeated coordinates.

4. **User Interface**:
   - The UI is crafted to display gameboards and handle player interactions.
   - Event listeners manage the game turn by turn and render updates.

## Testing

- Unit tests are written to verify the public interface of each class:
  - Test ship creation, hits, and sinking.
  - Test gameboard ship placement, attack handling, and sunk status.
  - Test player interaction with the gameboard.

## Setup

1. **Clone the Repository**:

   `git clone git@github.com:1Amal/javaScriptTDD-BattleshipGame.git`

## Initial Setup

Install all dependencies at once:
`npm install css-loader eslint webpack html-webpack-plugin prettier eslint-config-prettier --save-dev`

Install dependencies individually
`npm install css-loader --save-dev`
`npm install html-webpack-plugin --save-dev`
`npm install html-webpack-plugin --save-dev`
`npm install prettier --save-dev`
`npm install eslint-config-prettier --save-dev`
`npm install eslint --save-dev`

## Webpack
This will install the file loader to correctly load images
`npm install file-loader --save-dev`

## Manual build

`npm run build`

## Automatic build

`npx webpack --watch`

## Automatically deploy to Github Pages

Step 1
Remove the 'dist' directory from the project’s .gitignore file.

Step 2
Make sure git knows about your subtree (the subfolder with your site).

`git add dist && git commit -m "Initial dist subtree commit"`

Step 3
Use subtree push to send it to the gh-pages branch on GitHub.

`git subtree push --prefix dist origin gh-pages`
Boom. If your folder isn’t called dist, then you’ll need to change that in each of the commands above.

By adding this to the packages.json (Already configured for this repo)
You can simply push the commit to both the main branch and the gh-pages branch (Git Hub pages will be served from gh-pages branch)
`"scripts": {"gh-pages": "git subtree push --prefix dist origin gh-pages && git push"}`

`npm run gh-pages`

## Project Structure

This template includes the following folders and files:

src: Contains the source code for your web application.
components: Reusable UI components.
mainStyleSheet.css: Stylesheet for the application, it is served from the mainJavaScript.js.
assets: Static assets like images, fonts, etc.
mainJavaScript.js: The main entry point for your JavaScript application.
index.html: The main HTML template for your application.
Additional folders can be added based on your project needs (e.g., utils, api).
package.json: Manages project dependencies and scripts.
webpack.config.js: Webpack configuration file for bundling JavaScript modules.
.eslintrc.js: ESLint configuration file for linting rules.
.prettierrc.js: Prettier configuration file for formatting rules.
Note: The public folder is not strictly required but can be helpful during development with a development server.

ESLint: During development, consider running ESLint automatically on file changes to catch errors and style inconsistencies early on. You can integrate it with your development server or use a linting tool like ESLint CLI.
Prettier: Prettier can be configured to format your code automatically on save or using a script. This ensures consistent code style throughout your project.
Building for Production
The specific steps for building a production-ready version of your application may vary depending on your chosen tools and hosting platform. Generally, you'll want to:

Run a build script (often defined in package.json) to:
Bundle JavaScript modules using Webpack.
Minify the code (optional) for smaller file sizes.
Optimize assets (optional) for faster loading.
Follow the deployment instructions for your chosen hosting platform.
Remember: This is a comprehensive template. Feel free to customize it further based on your specific needs! Consider adding additional linters or formatters depending on your preferences.
