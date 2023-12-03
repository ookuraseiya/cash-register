import { AddItems } from './AddItems';
import { IncomeExpenses } from './IncomeExpenses';
import React, { useEffect, createContext, useState } from 'react';
import { ItemsList } from './ItemsList';
import { Total } from './Total';

export const DataContext = createContext();

export const Home = () => {
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);

  return (
    <div className="Home">
      <div className="Home-top"></div>
      <div className="Home-bottom">
        <Total totalIncome={totalIncome} totalExpense={totalExpense} />
        <IncomeExpenses totalIncome={totalIncome} totalExpense={totalExpense} />
        <AddItems />
        <ItemsList
          totalIncome={totalIncome}
          setTotalIncome={setTotalIncome}
          totalExpense={totalExpense}
          setTotalExpense={setTotalExpense}
        />
      </div>
    </div>
  );
};
