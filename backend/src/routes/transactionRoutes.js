const express = require('express');
const {
  getAllTransactions,
  getTransactionsBySchool,
  checkTransactionStatus,
  updateTransactionStatus,
  manualStatusUpdate,
  importJsonData, // Update method name for importing JSON data
} = require('../controllers/transactionController');
const { protect } = require('../utils/authMiddleware'); // Authorization middleware

const router = express.Router();

// Routes for handling transactions
router.get('/transactions', protect, getAllTransactions); // Fetch all transactions
router.get('/transactions/school/:school_id', protect, getTransactionsBySchool); // Fetch transactions by school ID
router.post('/transactions/check-status', protect, checkTransactionStatus); // Check status of a transaction by custom_order_id
router.post('/transactions/webhook', protect, updateTransactionStatus); // Webhook for status updates
router.post('/transactions/manual-update', protect, manualStatusUpdate); // Manual status update

// Import JSON data into the database (use this route to populate data from transactions.json)
router.post('/transactions/import', protect, importJsonData);

module.exports = router;
