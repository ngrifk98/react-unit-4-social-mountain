require('dotenv').config(); // Load environment variables
const jwt = require('jsonwebtoken'); // Import the jsonwebtoken library for token handling
const { SECRET } = process.env; // Get the secret key from environment variables

module.exports = {
    isAuthenticated: (req, res, next) => {
        // Get the token from the request's Authorization header
        const headerToken = req.get('Authorization');

        // If there's no token in the header, return a 401 (Unauthorized) response
        if (!headerToken) {
            console.log('ERROR IN auth middleware');
            res.sendStatus(401);
        }

        let token;

        try {
            // Verify the token using the secret key
            token = jwt.verify(headerToken, SECRET);
        } catch (err) {
            err.statusCode = 500;
            throw err;
        }

        // If the token verification fails, return a 401 response
        if (!token) {
            const error = new Error('Not authenticated.');
            error.statusCode = 401;
            throw error;
        }

        // If the token is valid, continue to the next middleware or route handler
        next();
    }
}
