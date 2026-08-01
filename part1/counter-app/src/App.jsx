import Button from './Button.jsx';
import Display from './Display.jsx';
import { useState } from 'react';

let counterRegular =1;
function App() {

const [counter, setCounter] = useState(1);


function clickMe() {
  setCounter(counter +1);
 let mydiv2= document.getElementById('mydiv2');
    counterRegular++;
//     div.textContent = `the counter is at ${counter}`;
//     console.log(counter)
    mydiv2.textContent = `the counterRegular is at ${counterRegular}`;
}

  return (
    <>
      <div id="mydiv">the counter is at {counter}</div>
      <Button onClickFunc = {clickMe} label="increase count"></Button> 
      <Button onClickFunc = {() => {
        setCounter(counter -1);
      }} label="Decrease count"></Button> 
      <Button onClickFunc = {() => {
        setCounter(0);
      }} label="Reset count"></Button>
      <div id="mydiv2">the counterRegular is at {counterRegular}</div>
      <Display counter={counter} />
    </>
  )
}

export default App
