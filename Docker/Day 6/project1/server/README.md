# Backend Project with Docker Compose

This project demonstrates how to set up and run a backend application using Docker Compose. The goal is to provide hands-on experience with containerization, multi-container applications, and Docker Compose for orchestration.

## Table of Contents

- [About](#about)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Docker Compose Commands](#docker-compose-commands)
- [Contributing](#contributing)
- [License](#license)

## About

This is a simple backend project designed to practice Docker Compose. It consists of multiple services, including:

- A **Node.js** backend server
- A **MongoDB** database

These services are defined in `docker-compose.yml`, making it easy to spin up the entire development environment with just one command.

## Technologies Used

- **Node.js** (Backend)
- **Express** (Web framework for Node.js)
- **MongoDB** (Database)
- **Docker** (Containerization)
- **Docker Compose** (Orchestration)

## Prerequisites

Before you begin, ensure you have the following installed:

- **Docker**: [Install Docker](https://docs.docker.com/get-docker/)
- **Docker Compose**: [Install Docker Compose](https://docs.docker.com/compose/install/)
- **Git**: [Install Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

## Setup and Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/your-backend-project.git
    cd your-backend-project
    ```

2. Create an `.env` file to store environment variables (for example, MongoDB connection URL, port, etc.):
    ```bash
    cp .env.example .env
    ```

3. Build and start the containers using Docker Compose:
    ```bash
    docker-compose up --build
    ```

4. This will start the following services:
    - **Node.js app** on port `3000`
    - **MongoDB** on the default port `27017`

## Usage

- To interact with the API, you can access it at `http://localhost:3000`.
- MongoDB will be running on its default port `27017`, and your app will connect to it using the credentials set in the `.env` file.

### Available Endpoints

- `GET /api/items` - Retrieve all items from the database.
- `POST /api/items` - Create a new item in the database.

For more detailed API documentation, check the API section of this README.

## Docker Compose Commands

Here are some basic Docker Compose commands that you can use:

- **Start services**: `docker-compose up`
- **Stop services**: `docker-compose down`
- **Build images**: `docker-compose build`
- **View logs**: `docker-compose logs`
- **Run a one-time command inside a container**: 
    ```bash
    docker-compose run <service-name> <command>
    ```

## Contributing

If you would like to contribute to this project, feel free to fork the repository and submit a pull request. Make sure to follow the project's coding style and add tests for any new features or bug fixes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
