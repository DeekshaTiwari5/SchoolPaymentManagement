const jwt = require('jsonwebtoken');

// Protect route by verifying JWT token
exports.protect = (req, res, next) => {
  let token;

  // Check for token in Authorization header
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // Get token from header
      token = req.headers.authorization.split(' ')[1];

      // Decode token and set user in request
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = decoded; // Save user info in request object
      next(); // Proceed to the next middleware or route handler
    } catch (error) {
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  }

  if (!token) {
    res.status(401).json({ message: 'Not authorized, no token' });
  }
};
