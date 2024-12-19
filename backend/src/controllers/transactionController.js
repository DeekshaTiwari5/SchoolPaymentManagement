const Transaction = require('../models/transactionModel');
const fs = require('fs');
const path = require('path');

// Fetch all transactions
exports.getAllTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.json(transactions);
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ message: 'Server error' });
  }
};

// Fetch transactions by school
exports.getTransactionsBySchool = async (req, res) => {
  const { school_id } = req.params;
  try {
    const transactions = await Transaction.find({ school_id });
    if (transactions.length === 0) {
      return res
        .status(404)
        .json({ message: 'No transactions found for this school' });
    }
    res.json(transactions);
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ message: 'Server error' });
  }
};

// Check transaction status by custom_order_id
exports.checkTransactionStatus = async (req, res) => {
  const { custom_order_id } = req.body;
  try {
    const transaction = await Transaction.findOne({ custom_order_id });
    if (!transaction) {
      return res.status(404).json({ message: 'Transaction not found' });
    }
    res.json({ status: transaction.status });
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ message: 'Server error' });
  }
};

// Webhook for status updates
exports.updateTransactionStatus = async (req, res) => {
  const { order_id, status } = req.body.order_info;
  try {
    const [collect_id, transaction_id] = order_id.split('/');
    const transaction = await Transaction.findOneAndUpdate(
      { collect_id, _id: transaction_id },
      { status },
      { new: true },
    );
    if (!transaction) {
      return res.status(404).json({ message: 'Transaction not found' });
    }
    res.json({ message: 'Transaction status updated' });
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ message: 'Server error' });
  }
};

// Manual status update
exports.manualStatusUpdate = async (req, res) => {
  const { custom_order_id, status } = req.body;
  try {
    const transaction = await Transaction.findOneAndUpdate(
      { custom_order_id },
      { status },
      { new: true },
    );
    if (!transaction) {
      return res.status(404).json({ message: 'Transaction not found' });
    }
    res.json({ message: 'Transaction status updated' });
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ message: 'Server error' });
  }
};

// Import JSON data
exports.importJsonData = async (req, res) => {
  try {
    const data = JSON.parse(
      fs.readFileSync(path.join(__dirname, '../data/transactions.json')),
    );

    // Insert each transaction from the JSON file into MongoDB
    for (const row of data) {
      const newTransaction = new Transaction(row);
      await newTransaction.save();
    }
    res.json({ message: 'JSON data imported successfully' });
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ message: 'Error importing data' });
  }
};
