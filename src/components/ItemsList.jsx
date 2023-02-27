import * as React from 'react';
import { ExpenseItem } from './ExpenseItem';
import { IncomeItem } from './IncomeItem';

export const ItemsList = () => {
  return (
    <div className="ItemsList">
      <div className="ItemsList-wrap">
        <IncomeItem />
        <ExpenseItem />
      </div>
    </div>
  );
};
