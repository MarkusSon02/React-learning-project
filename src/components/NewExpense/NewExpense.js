import React, {useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const saveDataHandler = (expenseData) => {
    props.onLiftNewExpenseData(expenseData);
  }
  
  const changeElementHandler = () => {
    setNewReturn(<ExpenseForm onSaveExpenseData={saveDataHandler} onCancel={cancelHandler}/>);
  }
  
  let orignalReturn = <button onClick={changeElementHandler}>Add New Expense</button>;
  
  const [newReturn, setNewReturn] = useState(orignalReturn);
  
  const cancelHandler = () => {
    setNewReturn(orignalReturn);
  }

  return (
    <div className='new-expense'>
      {newReturn}
    </div>
  );
};

export default NewExpense;
