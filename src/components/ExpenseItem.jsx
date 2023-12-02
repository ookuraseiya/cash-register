import * as React from 'react';
import { useContext } from 'react';
import { UserCount } from './Home';
import Button from '@mui/material/Button';

export const ExpenseItem = () => {
  return (
    <div className="ItemsListCard">
      <div className="ItemsListCard-card">
        <h1 className="ItemsListCard-title">支出一覧</h1>
        <ul>
          <li className="ItemsListCard-list">
            <h3 className="ItemsListCard-list__lead"></h3>
            <h3 className="ItemsListCard-list__income">円</h3>
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
