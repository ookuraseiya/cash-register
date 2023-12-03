import * as React from 'react';

export const IncomeExpenses = ({ totalIncome, totalExpense }) => {
  return (
    <div className="IncomeExpenses">
      <div className="IncomeExpenses-wrap">
        <div className="IncomeExpenses-list">
          <div className="IncomeExpenses-list__wrap">
            <h2 className="IncomeExpenses-list__lead">収入</h2>
            <h2 className="IncomeExpenses-list__income">+ {totalIncome}円</h2>
          </div>
        </div>
        <div className="IncomeExpenses-list">
          <div className="IncomeExpenses-list__wrap">
            <h2 className="IncomeExpenses-list__lead">支出</h2>
            <h2 className="IncomeExpenses-list__expense">- {totalExpense}円</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
