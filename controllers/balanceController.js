const Expense = require('../models/Expense');

exports.getBalances = async (req, res) => {
  try {
    const expenses = await Expense.find();
    const balances = {};

    for (const exp of expenses) {
      const { paid_by, amount, split_type, split_values, split_between } = exp;

      balances[paid_by] = (balances[paid_by] || 0) + amount;

      if (split_type === 'equal') {
        const share = amount / split_between.length;
        split_between.forEach(p => {
          balances[p] = (balances[p] || 0) - share;
        });
      } else if (split_type === 'percentage') {
        split_values.forEach(({ name, value }) => {
          balances[name] = (balances[name] || 0) - (value / 100) * amount;
        });
      } else if (split_type === 'exact') {
        split_values.forEach(({ name, value }) => {
          balances[name] = (balances[name] || 0) - value;
        });
      }
    }

    const result = Object.entries(balances).map(([name, amount]) => ({
      name,
      balance: Math.round(amount * 100) / 100,
    }));

    res.json({ success: true, data: result });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to compute balances' });
  }
};