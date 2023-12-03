import { React, useState } from 'react';
import Button from '@mui/material/Button';
import { collection, addDoc } from 'firebase/firestore';
import db from './firebase';

export const AddItems = () => {
  const [value, setValue] = useState('income');
  const [inputText, setInputText] = useState('');
  const [inputNumber, setInputNumber] = useState('');
  const [errorInputText, setErrorInputText] = useState('');
  const [errorInputNumber, setErrorInputNumber] = useState('');

  const reset = () => {
    setInputText('');
    setInputNumber('');
  };

  const erroe_reset = () => {
    setErrorInputText('');
    setErrorInputNumber('');
  };

  const submitButton = async (e) => {
    e.preventDefault();

    if (inputText.length === 0 && inputNumber.length !== 0) {
      setErrorInputText({
        errorMessage: '※未入力エラーです。',
      });
      setErrorInputNumber('');
    } else if (inputText.length !== 0 && inputNumber.length === 0) {
      setErrorInputText('');
      setErrorInputNumber({
        errorMessage: '※未入力エラーです。',
      });
    } else if (inputText.length === 0 && inputNumber.length === 0) {
      setErrorInputText({
        errorMessage: '※未入力エラーです。',
      });
      setErrorInputNumber({
        errorMessage: '※未入力エラーです。',
      });
      return false;
    } else if (inputText.length !== 0 && inputNumber.length !== 0) {
      try {
        await addDoc(collection(db, 'posts'), {
          value: value,
          inputText: inputText,
          inputNumber: Number(inputNumber),
          created_at: new Date().getTime(),
        });
        erroe_reset();
        reset();
      } catch (error) {
        console.log(error);
      }
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
              {errorInputText && (
                <p className="AddItems-error">{errorInputText.errorMessage}</p>
              )}
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
              {errorInputNumber && (
                <p className="AddItems-error">
                  {errorInputNumber.errorMessage}
                </p>
              )}
            </div>
            <Button
              className="AddItem-submit"
              variant="contained"
              type="submit"
              onClick={submitButton}
            >
              入力
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
