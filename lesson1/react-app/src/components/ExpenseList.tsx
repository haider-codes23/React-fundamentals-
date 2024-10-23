import { useState } from "react";

// Shape of our Expense
interface Expense {
  id: number
  description: string;
  amount: number;
  category: string;
}
// Shape of our props --> array of expense objects
interface Props {
  expenses: Expense[];
  onDelete: (id: number) => void;
}

function ExpenseList({expenses, onDelete}: Props) {
  
  return (
    <table className="table table-bordered">
      <thead>
        <th>Description</th>
        <th>Amount</th>
        <th>Cateroy</th>
        <th></th>
      </thead>
      <tbody>
        {expenses.map(expense => <tr key={expense.id}>
          <td>{expense.description}</td>
          <td>{expense.amount}</td>
          <td>{expense.category}</td>
          <td>
            <button className="btn btn-outline-danger" onClick={() => onDelete(expense.id)}>Delete</button>
          </td>
        </tr>)}
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td>${expenses.reduce((acc, expense) => expense.amount + acc, 0).toFixed(2)}</td>
          <td></td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  )
};

export default ExpenseList;