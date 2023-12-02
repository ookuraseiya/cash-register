import React from 'react';
import Button from '@mui/material/Button';

// useContextを使いたいのでexport function AddItems()
export const AddItems = ({
  addIncome,
  addExpense,
  value,
  setValue,
  inputText,
  setInputText,
  inputNumber,
  setInputNumber,
}) => {
  const valueHandler = (event) => {
    setValue(event.target.value);
  };

  const changeText = (event) => {
    setInputText(event.target.value);
  };

  const changeNumber = (event) => {
    setInputNumber(event.target.value);
  };

  const reset = () => {
    setInputText('');
    setInputNumber('');
  };

  const submitButton = (event) => {
    // preventDefaultを使えば勝手に更新されることがない。
    event.preventDefault();
    if (value === 'income') {
      addIncome(inputText, inputNumber);
      reset();
    } else {
      addExpense(inputText, inputNumber);
      reset();
    }
  };

  return (
    <div>
      <div className="AddItems">
        <form>
          <div className="AddItems-wrap">
            <select className="AddItems-select" onChange={valueHandler}>
              {/* valueHandler(event) */}
              <option className="AddItems-select__option" value="income" required>
                +
              </option>
              <option className="AddItems-select__option" value="expense">
                -
              </option>
            </select>
            <div className="AddItems-text">
              <label className="AddItems-text__label">内容</label>
              <input
                className="AddItems-text__input"
                type="text"
                value={inputText}
                onChange={changeText}
                required
              />
            </div>
            <div className="AddItems-amount">
              <label className="AddItems-amount__label">金額</label>
              <input
                className="AddItems-amount__input"
                type="number"
                value={inputNumber}
                onChange={changeNumber}
                required
              />
              <label className="AddItems-amount__yen">円</label>
            </div>
            <Button
              className="AddItem-submit"
              variant="contained"
              type="submit"
              onClick={submitButton}
            >
              決定
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
