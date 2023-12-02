import * as React from 'react';
import { useState, useContext, useEffect } from 'react';
import { DataContext, useDataContext } from './Home';
import Button from '@mui/material/Button';

export const IncomeItem = () => {
  const IncomeItem = useContext(DataContext);
  console.log(IncomeItem);

  // const handleRemoveIncome = (index) => {
  //   removeIncome(index);
  // };
  return (
    <div className="ItemsListCard">
      <div className="ItemsListCard-card">
        <h1 className="ItemsListCard-title">収入一覧</h1>
        <ul>
          {/* {IncomeItem.map((item, index) => (
            <li className="ItemsListCard-list">
              <h3 className="ItemsListCard-list__lead">{item.text}</h3>
              <h3 className="ItemsListCard-list__income">{item.number}円</h3>
              <Button
                className="ItemsListCard-list__delete"
                type="submit"
                variant="contained"
                onClick={() => handleRemoveIncome(index)}
              >
                ×
              </Button>
            </li>
          ))} */}
        </ul>
      </div>
    </div>
  );
};
