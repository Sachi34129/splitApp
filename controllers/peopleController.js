const Expense = require('../models/Expense');

exports.getAllPeople = async (req, res) => {
  try {
    const expenses = await Expense.find();
    const peopleSet = new Set();

    expenses.forEach(exp => {
      peopleSet.add(exp.paid_by);
      exp.split_between.forEach(p => peopleSet.add(p));
    });

    const people = Array.from(peopleSet);
    res.json({ success: true, data: people });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to fetch people' });
  }
};