import React from 'react';
// import ExpenseItem from './component/ExpenseItem';
import Expense from './component/Expense';
import NewExpense from './component/newExpense/NewExpense';
const expense = [
  { id: 'e1', title: 'Toilet paper', amount: 295.87, date: new Date(2021, 1, 4) },
  { id: 'e2', title: 'New TV', amount: 95.87, date: new Date(2021, 0, 12) },
  { id: 'e3', title: 'Car Insurance', amount: 295.87, date: new Date(2021, 9, 20) },
  { id: 'e4', title: 'New Disk', amount: 495.87, date: new Date(2021, 8, 11) }
];
const App = () => {
  return (
    <div>
      <NewExpense />
      <Expense items={expense} />
      
    </div>
  )
}

export default App;