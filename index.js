// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const expenseRoutes = require('./routes/expenseRoutes');
const settlementRoutes = require('./routes/settlementRoutes');
const peopleRoutes = require('./routes/peopleRoutes');
const balanceRoutes = require('./routes/balanceRoutes');
const analyticsRoutes = require('./routes/analyticsRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/expenses', expenseRoutes);
app.use('/settlements', settlementRoutes); 
app.use('/people', peopleRoutes);
app.use('/balances', balanceRoutes);
app.use('/analytics', analyticsRoutes);

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.error(err));