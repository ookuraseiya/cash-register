import { AddItems } from './AddItems';
import { IncomeExpenses } from './IncomeExpenses';
import React, { useEffect, createContext, useState } from 'react';
import { ItemsList } from './ItemsList';
import { Total } from './Total';
import { IncomeTotal } from './IncomeTotal';
import { ExpenseTotal } from './ExpenseTotal';

export const DataContext = createContext();

// ドット三つ→{...props}の...の部分。(ワンちゃんスプレッド構文)
//   setIncomeItem([...incomeItem, { incomes }]); ←スプレッド構文という
export const Home = () => {
  const [incomeItem, setIncomeItem] = useState([]);
  const [expenseItem, setExpenseItem] = useState([]);

  const addIncome = (inputText, inputNumber) => {
    setIncomeItem([...incomeItem, { text: inputText, number: inputNumber }]);
  };
  // console.log(incomeItem);

  const totalIncome = IncomeTotal(incomeItem);

  const addExpense = (inputText, inputNumber) => {
    setExpenseItem([...expenseItem, { text: inputText, number: inputNumber }]);
  };

  const totalExpense = ExpenseTotal(expenseItem);

  const removeIncome = (i) => {
    const updatedIncomeItem = [...incomeItem];
    updatedIncomeItem.splite(i, 1);
    setIncomeItem(updatedIncomeItem);
  };

  // useEffectよくわかんねえ

  return (
    <div className="Home">
      <div className="Home-top"></div>
      <div className="Home-bottom">
        <Total totalIncome={totalIncome} totalExpense={totalExpense} />
        <IncomeExpenses totalIncome={totalIncome} totalExpense={totalExpense} />
        <AddItems addIncome={addIncome} addExpense={addExpense} />
        <DataContext.Provider value={{ incomeItem, removeIncome }}>
          <ItemsList />
        </DataContext.Provider>
      </div>
    </div>
  );
};
