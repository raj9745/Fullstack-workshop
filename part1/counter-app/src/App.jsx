import Display from './Display.jsx';
// import { useState } from 'react';

function App() {
let counter =1;
// const [counter, setCounter] = useState(1);


function increaseCount() {
 let div = document.getElementById('mydiv');
    counter++;
    div.textContent = `the counter is at ${counter}`;
    console.log(counter)
  
}

  return (
    <>
      <div id="mydiv">the counter is at {counter}</div>
      setCounter(counter + 1)
      <button onClick={increaseCount}>increase count</button>
      <Display counter={counter} />
    </>
  )
}

export default App
