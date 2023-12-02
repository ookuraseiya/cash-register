import * as React from 'react';
import Button from '@mui/material/Button';

export const IncomeItem = (incomeArray_text, incomeArray_number) => {
  return (
    <div className="ItemsListCard">
      <div className="ItemsListCard-card">
        <h1 className="ItemsListCard-title">収入一覧</h1>
        <ul>
          <li className="ItemsListCard-list">
            <h3 className="ItemsListCard-list__lead">収入</h3>
            {/* {incomeArray_number.map((number)=>(
              <h3 className="ItemsListCard-list__income">{number}</h3>
            ))} */}
            <Button
              className="ItemsListCard-list__delete"
              type="submit"
              variant="contained"
            >
              ×
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
};
