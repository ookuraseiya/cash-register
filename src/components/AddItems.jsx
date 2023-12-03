import { React, useState } from 'react';
import Button from '@mui/material/Button';
import { collection, addDoc } from 'firebase/firestore';
import db from './firebase';

export const AddItems = () => {
  const [value, setValue] = useState('income');
  const [inputText, setInputText] = useState('');
  const [inputNumber, setInputNumber] = useState('');

  const reset = () => {
    setInputText('');
    setInputNumber('');
  };

  const submitButton = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, 'posts'), {
        value: value,
        inputText: inputText,
        inputNumber: Number(inputNumber),
        created_at: new Date().getTime(),
      });
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="AddItems">
        <form>
          <div className="AddItems-wrap">
            <select
              className="AddItems-select"
              onChange={(e) => {
                setValue(e.target.value);
              }}
            >
              <option className="AddItems-select__option" value="income">
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
                onChange={(e) => {
                  setInputText(e.target.value);
                }}
              />
            </div>
            <div className="AddItems-amount">
              <label className="AddItems-amount__label">金額</label>
              <input
                className="AddItems-amount__input"
                type="number"
                value={inputNumber}
                onChange={(e) => {
                  setInputNumber(e.target.value);
                }}
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
