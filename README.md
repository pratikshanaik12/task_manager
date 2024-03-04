# Task Manager Project

This Task Manager project is built using Node.js and Express framework, with MongoDB as the database, and Mongoose as the ODM (Object Data Modeling) tool. It provides RESTful API endpoints for managing tasks, including CRUD operations (Create, Read, Update, Delete).

## Setup Instructions

### Express Setup

1. Install Node.js if not already installed.
2. Initialize your Node.js project using `npm init`.
3. Install Express using `npm install express`.
4. Set up your Express application by creating the necessary folders and files.

### Routes Folder

1. Create a folder named `routes` to manage your API routes.
2. Define route handlers for different endpoints in separate files within this folder.

### Controllers Folder

1. Create a folder named `controllers` to manage the logic for your API endpoints.
2. Define controller functions to handle requests and responses.

### Postman Setup

1. Install Postman if not already installed.
2. Create a new Postman collection to organize your API requests.
3. Add requests corresponding to the endpoints defined in your routes.

### Rest API Explanation

1. The RESTful API follows the principles of REST architecture, utilizing HTTP methods such as GET, POST, PUT, DELETE for manipulating resources.
2. Each endpoint corresponds to a specific resource (e.g., tasks) and performs actions such as creating, reading, updating, or deleting the resource.

### MongoDB Setup

1. Install MongoDB if not already installed.
2. Set up a MongoDB database to store task-related data.

### Mongoose Connection

1. Install Mongoose using `npm install mongoose`.
2. Connect your Node.js application to the MongoDB database using Mongoose.

### Mongoose Schema

1. Define Mongoose schemas to structure the data stored in MongoDB collections.
2. Define schemas for tasks including fields such as title, description, status, etc.

### Mongoose CRUD Operations

1. Implement CRUD operations using Mongoose methods (`create`, `find`, `findOne`, `updateOne`, `deleteOne`) to interact with the MongoDB database.
2. Map each CRUD operation to the corresponding API endpoint in your Express routes.

### Async Wrappers for try/catch

1. Use async/await syntax to handle asynchronous operations.
2. Wrap your controller functions with try/catch blocks to handle errors gracefully.
3. Implement async wrappers for try/catch to reduce code duplication.

### Catching Errors

1. Implement error handling middleware in your Express application to catch and handle errors.
2. Return appropriate error responses with relevant HTTP status codes.

## Getting Started

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Set up MongoDB and configure the connection string in your Node.js application.
4. Start the server using `npm start`.
5. Use Postman or any REST API client to interact with the API endpoints.

