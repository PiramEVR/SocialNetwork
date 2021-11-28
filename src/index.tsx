import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id: 1, message: 'Hi', likesCount: 12},
    {id: 2, message: 'Hi sadfsad sadfsad', likesCount: 124543},
    {id: 3, message: 'Hi fsadfsadg gsdg', likesCount: 123},
    {id: 4, message: 'Hi sadfas sdgsg sg', likesCount: 112},
    {id: 5, message: 'Hi sadgsag hdfh d', likesCount: 2},
]



ReactDOM.render(
  <React.StrictMode>
    <App posts={posts}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
