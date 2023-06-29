# MERN-Stack Template with Vite

This is a template for building a web application using the MERN stack (MongoDB, Express.js, React, Node.js) with Vite as the build tool. It provides a basic project structure and configuration to get you started quickly.

## Prerequisites

To use this template, you should have the following software installed on your system:

- Node.js (v14 or higher)
- MongoDB

## Getting Started

1. Clone the repository:
```
git clone https://github.com/your-username/mern-vite-template.git
```

2. Navigate to the project directory:
```
cd react-project
```

3. Install dependencies for both the frontend and backend:
```
cd frontend
npm install
```
```
cd ../backend
npm install
```


4. Configure the backend:
- Create a `.env` file in the `backend` directory.
- Set the following environment variables in the `.env` file:
  ```
  MONGODB_URI=your-mongodb-connection-string
  PORT=5000
  ```

5. Start the development server:
- navigate back to project directory:
```
cd ..
```  
- In one terminal, start the backend server:
  ```
  npm run backend
  ```
- In another terminal, start the frontend development server:
  ```
  npm run frontend
  ```

6. Open your browser and visit `http://localhost:3000` to see the application.

## Project Structure

The project structure is organized as follows:

- `frontend`: Contains the frontend code built with React and Vite.
- `backend`: Contains the backend code built with Node.js, Express.js, and MongoDB.

Feel free to modify the structure and add additional files or directories as needed for your application.

## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request.
