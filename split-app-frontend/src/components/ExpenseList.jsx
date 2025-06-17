import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ExpenseList() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_BASE}/expenses`)
      .then(res => setExpenses(res.data.data))
      .catch(() => alert('Error fetching expenses'));
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">All Expenses</h2>
      {expenses.map(exp => (
        <div key={exp._id} className="border-b py-2">
          ₹{exp.amount} - {exp.description} (Paid by {exp.paid_by})
        </div>
      ))}
    </div>
  );
}