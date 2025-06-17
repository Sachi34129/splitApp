import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import AddExpenseForm from './components/AddExpenseForm';
import ExpenseList from './components/ExpenseList';
import BalanceSheet from './components/BalanceSheet';
import SettlementSummary from './components/SettlementSummary';
import Analytics from './pages/Analytics';
import './App.css';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">💰 Split App</h1>

      {/* Navigation */}
      <div className="text-center mb-6">
        <Link to="/" className="text-blue-500 hover:underline mr-4">Home</Link>
        <Link to="/analytics" className="text-blue-500 hover:underline">Analytics</Link>
      </div>

      <Routes>
        <Route path="/" element={
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AddExpenseForm />
            <BalanceSheet />
            <SettlementSummary />
            <div className="md:col-span-2">
              <ExpenseList />
            </div>
          </div>
        } />
        <Route path="/analytics" element={<Analytics />} />
      </Routes>
    </div>
  );
}