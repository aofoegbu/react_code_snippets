import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Blog from './blog';
import reportWebVitals from './reportWebVitals';
import NumberList from './App'

const numbers = [1,2,3,4,5]
ReactDOM.render(
  <NumberList  numbers={numbers}/>,
document.getElementById('root')
);

const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React'},
  {id: 2, title: 'Installation', content: 'You can install React from npm'}
];
ReactDOM.render(
  <Blog posts={posts} />,
  document.getElementById('root1')
);


// ReactDOM.render(
    // <App />,
  // document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
