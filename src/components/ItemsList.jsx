import * as React from 'react';
import Button from '@mui/material/Button';

export const ItemsList = () => {
  return (
    <div className="ItemsList">
      <div className="ItemsList-wrap">
        <div className="ItemsListCard">
          <div className="ItemsListCard-card">
            <h1 className="ItemsListCard-title">収入一覧</h1>
            <ul>
              <li className="ItemsListCard-list">
                <h3 className="ItemsListCard-list__lead">{}</h3>
                <h3 className="ItemsListCard-list__income">{}円</h3>
                <Button
                  className="ItemsListCard-list__delete"
                  type="submit"
                  variant="contained"
                  // onClick={() => ()}
                >
                  ×
                </Button>
              </li>
            </ul>
          </div>
        </div>
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
      </div>
    </div>
  );
};
