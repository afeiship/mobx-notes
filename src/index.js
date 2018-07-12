import ReactDOM, { Component } from 'react-dom';
import React from 'react';
import { observable, autorun } from 'mobx';


const obArray = observable([1,2,3]);
const obObj = observable({ a: 1, b: 2});
const obMap = observable(new Map());
const obNum = observable.box(1);
const obStr = observable.box('Hello');

// console.log(obStr);


autorun(()=>{
  console.log('action?');
});


const App = () => {
  return (
    <div>Hello!</div>
  )
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
