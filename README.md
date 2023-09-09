# Social Mountain

Social Mountain is a web application that allows users to connect with others by sharing their thoughts and experiences through posts. This project is built using React, Node.js, Express, and PostgreSQL. It provides essential features for creating, reading, and managing posts.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

## Features

- User registration and authentication
- Create, edit, and delete posts
- Toggle post privacy between public and private
- View all public posts
- View user-specific posts on their profile

## Getting Started

To get started with Social Mountain, follow these steps:

1. Clone this repository:

   ```shell
   git clone https://github.com/your-username/social-mountain.git
   ```

2. Change to the project directory:

   ```shell
   cd social-mountain
   ```

3. Install the required dependencies for both the client and server:

   ```shell
   # Install server dependencies
   cd server
   npm install

   # Install client dependencies
   cd ../client
   npm install
   ```

4. Set up your PostgreSQL database and configure the connection string in the server's `.env` file.

5. Start the server:

   ```shell
   cd server
   npm start
   ```

6. Start the client:

   ```shell
   cd client
   npm start
   ```

Now you should be able to access the application in your web browser at `http://localhost:3000`.

## Usage

- Register for an account or log in if you already have one.
- Create new posts to share with others.
- View public posts from other users on the home page.
- Visit your profile page to see your posts and manage their privacy settings.
- Edit or delete your own posts.

## API Documentation

The server-side API documentation can be found in the [API Documentation](API_DOCUMENTATION.md) file.

## Contributing

If you'd like to contribute to Social Mountain, please follow these steps:

1. Fork the repository on GitHub.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with descriptive commit messages.
4. Push your changes to your fork on GitHub.
5. Create a pull request to the main repository.

## License

This project is not licensed.
