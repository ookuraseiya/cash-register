import Button from '@mui/material/Button';
import { collection, onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { doc, deleteDoc } from 'firebase/firestore';
import db from './firebase';

const getStrTime = (time) => {
  let t = new Date(time);
  return `${t.getFullYear()}/${t.getMonth() + 1}/${t.getDate()}`;
};

export const ItemsList = ({
  totalIncome,
  setTotalIncome,
  totalExpense,
  setTotalExpense,
}) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db, 'posts'), (posts) => {
      setPosts(
        posts.docs
          .map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
          .sort((a, b) => b.created_at - a.created_at)
      );
    });
  }, []);

  useEffect(() => {
    const totalIncomeInputNumber = posts.reduce((total, post) => {
      if (post.value === 'income') {
        return total + post.inputNumber;
      } else {
        return total;
      }
    }, 0);

    setTotalIncome(totalIncomeInputNumber);

    const totalExpenseInputNumber = posts.reduce((total, post) => {
      if (post.value === 'expense') {
        return total + post.inputNumber;
      } else {
        return total;
      }
    }, 0);

    setTotalExpense(totalExpenseInputNumber);
  }, [posts]); // posts が変更されたときだけ useEffect が実行される

  // postsの出力
  useEffect(() => {
    console.log(posts);
  }, [posts]);

  const deletePost = async (id) => {
    const postRef = doc(db, 'posts', id);
    await deleteDoc(postRef);
  };

  return (
    <div className="ItemsList">
      <div className="ItemsList-wrap">
        <div className="ItemsListCard">
          <div className="ItemsListCard-card">
            <h1 className="ItemsListCard-title">収入一覧</h1>
            <ul>
              {posts.map((post) =>
                post.value === 'income' ? (
                  <li className="ItemsListCard-list" key={post.id}>
                    <h3 className="ItemsListCard-list__lead">
                      {getStrTime(post.created_at)}
                    </h3>
                    <h3 className="ItemsListCard-list__lead">
                      {post.inputText}
                    </h3>
                    <h3 className="ItemsListCard-list__income">
                      {post.inputNumber}円
                    </h3>
                    <Button
                      className="ItemsListCard-list__delete"
                      type="submit"
                      variant="contained"
                      onClick={() => deletePost(post.id)}
                    >
                      ×
                    </Button>
                  </li>
                ) : null
              )}
            </ul>
          </div>
        </div>
        <div className="ItemsListCard">
          <div className="ItemsListCard-card">
            <h1 className="ItemsListCard-title">支出一覧</h1>
            <ul>
              {posts.map((post) =>
                post.value === 'expense' ? (
                  <li className="ItemsListCard-list" key={post.id}>
                    <h3 className="ItemsListCard-list__lead">
                      {getStrTime(post.created_at)}
                    </h3>
                    <h3 className="ItemsListCard-list__lead">
                      {post.inputText}
                    </h3>
                    <h3 className="ItemsListCard-list__income">
                      {post.inputNumber}円
                    </h3>
                    <Button
                      className="ItemsListCard-list__delete"
                      type="submit"
                      variant="contained"
                      onClick={() => deletePost(post.id)}
                    >
                      ×
                    </Button>
                  </li>
                ) : null
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
