import React from 'react';

// 収入合計の計算
export const IncomeTotal = (incomeItem) => {
  const incomeArr = incomeItem.map((incomeItems) => Number(incomeItems.number));
  return incomeArr.reduce((a, c) => (a += c), 0);
};
