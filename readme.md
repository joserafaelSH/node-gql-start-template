# Node GraphQL Starter Template

A modern, TypeScript-based starter template for building GraphQL APIs using Koa.js, GraphQL Yoga, and Winston. This template provides a clean and scalable foundation for developing robust GraphQL services.

## 🚀 Features

- **Koa.js**: Lightweight and expressive middleware framework for Node.js.

- **GraphQL Yoga**: Fully-featured GraphQL server with seamless Koa integration .

- **TypeScript**: Strongly typed language for improved developer experience.

- **Winston**: Versatile logging library supporting multiple transports and log levels .

- **ESLint & Prettier**: Configured for consistent code quality and formatting.

- **Environment Configuration**: Supports environment variables via .env files.

- **Vitest**: for testing

## 🛠️ Prerequisites

- **Node.js**: Version 14.x or higher

- **npm**: Version 6.x or higher

## ⚙️ Getting Started

1. Clone the repository:

```bash
git clone https://github.com/joserafaelSH/node-gql-start-template.git
cd node-gql-start-template
sudo rm -rm .git
```

2. Install dependencies:

```bash
npm install
```

3. Configure environment variables:

- Copy the example environment file:

```bash
cp .env.example .env
```

- Update the .env file with your configuration.

4. Start the development server:

```bash
npm run dev
```

The server will start on the port specified in your .env file (default is 4000).

## 🧪 Available Scripts

- **npm run dev**: Starts the development server with hot reloading.

- **npm run build**: Compiles the TypeScript code into JavaScript.

- **npm start**: Runs the compiled JavaScript code.

- **npm run test**: Runs the test files.

- **npm run prettier**: Formats the codebase using Prettier.

## 📄 Environment Variables

The application uses environment variables for configuration. Below are the variables defined in the .env.example file:

- **PORT**: The port number on which the server will run (default: 4000).

Ensure to create a .env file in the root directory and define these variables as needed.
