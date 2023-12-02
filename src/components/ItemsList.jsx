import * as React from 'react';
import { ExpenseItem } from './ExpenseItem';
import { IncomeItem } from './IncomeItem';

export const ItemsList = (props) => {
  console.log(props.incomeProps);
  return (
    <div className="ItemsList">
      <div className="ItemsList-wrap">
        <IncomeItem />
        <ExpenseItem />
      </div>
    </div>
  );
};
