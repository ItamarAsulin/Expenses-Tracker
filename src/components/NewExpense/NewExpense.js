import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onNewExpense(expenseData);
    setShowForm(false);
  };
  const cancelBtnHandler = () => setShowForm(false);

  const newExpenseHandler = () => setShowForm(true);

  if (showForm) {
    return (
      <div className="new-expense">
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelBtnHandler}
        />
      </div>
    );
  }
  return (
    <div className="new-expense">
      <button onClick={newExpenseHandler}>New Expense</button>
    </div>
  );
};

export default NewExpense;
