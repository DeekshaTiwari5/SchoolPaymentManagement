const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const transactionRoutes = require('./routes/transactionRoutes');
const authRoutes = require('./routes/authRoutes');
const bodyParser = require('body-parser');

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', transactionRoutes);
app.use('/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
