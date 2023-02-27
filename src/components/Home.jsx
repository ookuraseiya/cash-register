import { AddItems } from './AddItems';
import { IncomeExpenses } from './IncomeExpenses';
import React, { useEffect, useState } from 'react';
import { ItemsList } from './ItemsList';
import { Total } from './Total';
import { IncomeTotal } from './IncomeTotal';
import { ExpenseTotal } from './ExpenseTotal';

// ドット三つ→{...props}の...の部分。(ワンちゃんスプレッド構文)
//   setIncomeItem([...incomeItem, { incomes }]); ←スプレッド構文という

export const Home = () => {
  const [value, setValue] = useState('income');
  const [inputText, setInputText] = useState('');
  const [inputNumber, setInputNumber] = useState('');
  const [incomeItem, setIncomeItem] = useState([]);
  const [expenseItem, setExpenseItem] = useState([]);

  const addIncome = (inputText, inputNumber) => {
    setIncomeItem([...incomeItem, { text: inputText, number: inputNumber }]);
  };

  const totalIncome = IncomeTotal(incomeItem);

  const addExpense = (inputText, inputNumber) => {
    setExpenseItem([...expenseItem, { text: inputText, number: inputNumber }]);
  };

  const totalExpense = ExpenseTotal(expenseItem);

  // useEffectよくわかんねえ
  useEffect(() => {}, [incomeItem]);

  return (
    <div className="Home">
      <div className="Home-top"></div>
      <div className="Home-bottom">
        <Total totalIncome={totalIncome} totalExpense={totalExpense} />
        <IncomeExpenses totalIncome={totalIncome} totalExpense={totalExpense} />
        <AddItems
          addIncome={addIncome}
          addExpense={addExpense}
          value={value}
          setValue={setValue}
          inputText={inputText}
          setInputText={setInputText}
          inputNumber={inputNumber}
          setInputNumber={setInputNumber}
        />
        <ItemsList />
      </div>
    </div>
  );
};
