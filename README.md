# Eco Guardian (Version 1.0.0)

backend server - [https://eco-guardian-backend-seven.vercel.app/](https://eco-guardian-backend-seven.vercel.app/)

**Eco Guardian** is a project aimed at building a solution for cleaning and maintaining the environment. This repository contains the source code for the Eco Guardian application.

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Introduction

Eco Guardian is a web application built using Node.js and TypeScript. It provides various features and tools for environmental maintenance and sustainability. The project includes components for handling user authentication, data management, and more.

## Getting Started

To get started with the Eco Guardian project, follow the instructions below.

### Prerequisites

Before you begin, ensure you have the following prerequisites installed:

- Node.js
- Yarn (or npm)
- TypeScript
- MongoDB (or your preferred database)

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/EcoGuardian.git
   cd EcoGuardian
   ```

2. Install project dependencies:

   ```bash
   yarn install
   ```

3. Create a `.env` file in the root directory and set the necessary environment variables, such as database connection details and secret keys.

4. Build the project:

   ```bash
   yarn build
   ```

### Usage

To start the Eco Guardian application, use the following command:

```bash
yarn start
```

By default, the application will run on `http://localhost:5000`.

## Scripts

This project includes several useful scripts:

- `start`: Starts the application using `ts-node-dev` for development.
- `build`: Compiles the TypeScript code to JavaScript.
- `lint:check`: Checks for linting errors using ESLint.
- `lint:fix`: Attempts to automatically fix linting errors using ESLint.
- `prettier:check`: Checks code formatting using Prettier.
- `prettier:fix`: Fixes code formatting using Prettier.
- `lint-prettier`: Combines linting and formatting checks.
- `test`: Placeholder script for running tests.

## Contributing

Contributions to Eco Guardian are welcome! Please follow the project's guidelines and best practices when submitting issues or pull requests.

## License

This project is licensed under the ISC License. For more details, see the [LICENSE](LICENSE) file.

## Acknowledgments

Thank you to all the contributors who have helped make Eco Guardian possible.
