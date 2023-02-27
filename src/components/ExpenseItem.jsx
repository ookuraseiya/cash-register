import * as React from 'react';
import Button from '@mui/material/Button';

export const ExpenseItem = () => {
  return (
    <div className="ItemsListCard">
      <div className="ItemsListCard-card">
        <h1 className="ItemsListCard-title">支出一覧</h1>
        <ul>
          <li className="ItemsListCard-list">
            <h3 className="ItemsListCard-list__lead">支出</h3>
            <h3 className="ItemsListCard-list__expense">- 10000円</h3>
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
