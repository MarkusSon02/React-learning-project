import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpenseFilter';

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2020")
  const yearFilterHandler = (year) => {
    setSelectedYear(year);
  }

  /// Better way to implement year filter
  let filterExpenses;
  if (selectedYear === "all") {
    filterExpenses = props.items;
  } else {
    filterExpenses = props.items.filter((expense) => {
      return expense.date.getFullYear().toString() === selectedYear;
    });
  }
  let finalExpenses = <div className="expenses__items">
                        <p>There is no expenses in this year</p>
                      </div>;
  if (filterExpenses.length > 0) {
    (finalExpenses = filterExpenses.map((expense) => 
      <ExpenseItem 
        id={expense.id} 
        key={expense.id}
        title={expense.title} 
        amount={expense.amount} 
        date={expense.date}/>))}

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selectedYear={selectedYear} onYearChange={yearFilterHandler}></ExpensesFilter>
        {finalExpenses}
        {/*One way to implement year filter*/}
        {/* {props.items.map((expense) => {
          if (selectedYear === "all") {
            return (
            <ExpenseItem 
                id={expense.id} 
                key={expense.id}
                title={expense.title} 
                amount={expense.amount} 
                date={expense.date} />);}
          if (expense.date.getFullYear().toString() === selectedYear) {
            return (
              <ExpenseItem 
                id={expense.id} 
                key={expense.id}
                title={expense.title} 
                amount={expense.amount} 
                date={expense.date} />);
          } else return null;
          })} */}
        {/* {filterExpenses.length === 0 ? 
          <p style={{color: "white"}}>There is no expenses in this year</p> : 
          (filterExpenses.map((expense) => 
            <ExpenseItem 
              id={expense.id} 
              key={expense.id}
              title={expense.title} 
              amount={expense.amount} 
              date={expense.date}/>))} */}
      </Card>
    </div>
  );
}

export default Expenses;
