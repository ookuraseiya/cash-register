import React, { useEffect, useState } from 'react';

export const Total = ({ totalIncome, totalExpense }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(totalIncome - totalExpense);
  }, [totalIncome, totalExpense]);

  return (
    <div className="Total">
      <div className="Total-wrap">
        <p className="Total-expenses">残高</p>
        <h1 className="Total-expenses__number">{total}</h1>
        <p className="Total-expenses__yen">円</p>
      </div>
    </div>
  );
};
