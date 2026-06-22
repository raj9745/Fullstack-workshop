import React from 'react';
import ReactDOM from 'react-dom/client';
import sayHello from './sayHello';
const react = document.getElementById('root');
const reactRoot = ReactDOM.createRoot(react);


const App = ()=>{
const myDiv=  React.createElement("div",{},[
  React.createElement('h1',{ class: 'raj' },'Hello World'),
  React.createElement(sayHello,{ name: 'Raj' }),
  React.createElement(sayHello,{ name: 'Milan' }),
 
 ]);
 return myDiv;
} 

reactRoot.render(App());