const mongoose = require('mongoose');
const AuthModule = require('./auth/auth.controller');
const TransactionModule = require('./transaction/transaction.controller');

function AppModule(app) {
  // MongoDB connection
 mongoose
   .connect(process.env.MONGO_URI)
   .then(() => console.log('Connected to MongoDB'))
   .catch((err) => console.error('MongoDB connection error:', err));

  app.use('/auth', AuthModule);
  app.use('/transactions', TransactionModule);

}

module.exports = { AppModule };
