const express = require('express');
const mongoose = require('mongoose');
const { AppModule } = require('./app.module');
require('dotenv').config();

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Load app modules
AppModule(app);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

