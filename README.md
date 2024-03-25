# ChatLoom - Real-Time Chat Application

ChatLoom is a real-time chat application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It provides users with a seamless and intuitive platform for instant messaging, featuring functionalities such as authentication, real-time messaging, and user-friendly design.

## Features

### Authentication
- User authentication using JWT (JSON Web Tokens) and Cookies for secure login and registration.
- Integration with React Auth Context for managing user authentication state.
- Bcrypt used for hashing passwords, ensuring secure storage and authentication.

### Real-Time Messaging
- Real-time messaging functionality allowing users to exchange messages instantly.
- Implementation of WebSockets for real-time communication between clients and server.

### Responsive Design
- Utilization of Daisy UI for modern and responsive page design, ensuring optimal user experience across devices.

### CORS and Express Routing
- Implementation of CORS (Cross-Origin Resource Sharing) for handling cross-origin HTTP requests securely.
- Express.js routing for defining API routes and handling various client requests.

### Frontend and Backend Connection
- Frontend and backend connection established using the Fetch API for making HTTP requests.
- Seamless integration of React Router for client-side routing, enabling smooth navigation between pages.

## Screenshots

![Screenshot 1](/path/to/screenshot1.png)
![Screenshot 2](/path/to/screenshot2.png)

## Getting Started

To run ChatLoom locally, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd chatloom`
3. Install dependencies for both frontend and backend:
   - Frontend: `cd client && npm install`
   - Backend: `cd server && npm install`
4. Set up environment variables:
   - Create a `.env` file in the server directory and add necessary environment variables.
5. Start the development servers:
   - Frontend: `cd client && npm start`
   - Backend: `cd server && npm start`
6. Access the application in your web browser at `http://localhost:3000`.

## Contributing

Contributions are welcome! If you'd like to contribute to ChatLoom, please follow these steps:

1. Fork the repository
2. Create a new branch: `git checkout -b feature-name`
3. Make your changes and commit them: `git commit -m 'Add feature-name'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Daisy UI: [Link to Daisy UI](https://daisyui.com/)
- React Router: [Link to React Router](https://reactrouter.com/)
- Bcrypt: [Link to Bcrypt](https://www.npmjs.com/package/bcrypt)
- JSON Web Tokens: [Link to JWT](https://jwt.io/)
