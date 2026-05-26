# Express PostgreSQL API

A RESTful API built with Express.js, Node.js, and PostgreSQL, containerized with Docker.

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [File Structure](#file-structure)
- [Setup Instructions](#setup-instructions)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running the Application](#running-the-application)
  - [Running with Docker](#running-with-docker)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Project Overview
This project is a REST API designed to demonstrate the integration of Express.js with a PostgreSQL database.
It includes basic CRUD operations, validation, and error handling.

## Features
- Express.js server
- PostgreSQL database connection
- Docker support for easy containerization
- Environment configuration with dotenv
- RESTful API design
- Input validation with Joi
- Modular structure (controllers, models, routes, middleware)

## File Structure
```
express-postgrsql-api/
├── src/
│   ├── index.js          # Entry point of the application
│   ├── config/           # Configuration files (database, etc.)
│   ├── controllers/      # Request handlers
│   ├── data/             # Database utilities or seeds
│   ├── middlewares/      # Custom middleware functions
│   ├── models/           # Database models
│   └── routes/           # API route definitions
├── .env                  # Environment variables (not in version control)
├── .gitignore            # Git ignore file
├── package.json          # NPM dependencies and scripts
├── package-lock.json     # NPM lock file
└── compose-dev.yaml      # Docker Compose file for development
```

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- PostgreSQL (v12 or higher)
- Docker and Docker Compose (for containerized setup)

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd express-postgrsql-api
   ```

2. Install NPM dependencies:
   ```bash
   npm install
   ```

### Environment Variables
Create a `.env` file in the root directory (based on the example below) and adjust the values as needed:
```
NODE_ENV=development
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_NAME=your_database
DB_USER=your_username
DB_PASSWORD=your_password
```

### Running the Application
1. Ensure PostgreSQL is running and the database specified in `.env` exists.
2. Start the server in development mode:
   ```bash
   npm run dev
   ```
3. The API will be accessible at `http://localhost:3000`.

### Running with Docker
1. Build and start the containers using Docker Compose:
   ```bash
   docker-compose -f compose-dev.yaml up --build
   ```
2. The API will be accessible at `http://localhost:3000` (or the port specified in the compose file).

## API Endpoints
(To be implemented: list the available endpoints, methods, and descriptions)

## Contributing
1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make your changes and commit them with descriptive messages.
4. Push to the branch and open a pull request.

## License
This project is licensed under the ISC License.