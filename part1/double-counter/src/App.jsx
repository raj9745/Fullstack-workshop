
import { useState } from "react";
import Button from "./Button";
import Display from "./Display";


function App() {
  
   const [counter, setCounter] = useState({
    left: 0, right: 0
  });
  const [clickHistory, setClickHistory] = useState([]);
  const [totalClicks, setTotalClicks] = useState(0);


  function leftClick() { 
    
    // console.log("counter value before adding the value",counter)
    // let newCounter  = { ...counter};
    // newCounter.left =  newCounter.left + 1;
    // setCounter(newCounter);
    
    // console.log("counter value before after adding the value",counter)
       console.log("Counter before setClicks",counter)
      setCounter({...counter, left:counter.left+1});
       console.log("Counter after setClicks",counter)
    // setClickHistory([...clickHistory,"L"])
    // console.log("LeftClickHistory before adding the value",clickHistory)
    clickHistory.push("L");
    setClickHistory(clickHistory)
    // console.log("LeftClickHistory after adding the value",clickHistory)
    
    setTotalClicks(totalClicks + 1);

  };

  function rightClick() {
 
    // let newCounter1 = { ...counter};
    // newCounter1.right = newCounter1.right +1;
    // setCounter(newCounter1); 
    setCounter({...counter, right:counter.right+1});
   
    // setClickHistory([...clickHistory,"R"])
    // console.log("rightClickHistory before adding the value",clickHistory)

    clickHistory.push("R");
    setClickHistory(clickHistory)
    //  console.log("rightClickHistory before adding the value",clickHistory)
    setTotalClicks(totalClicks + 1);

  }

  return (
    <>
      <div>
    {counter.left}
      <Button
        onClickFunc={leftClick}
        label="LeftClick"
      />
      <Button
        onClickFunc={rightClick}
        label="RightClick"
       
      />
       {counter.right}
      </div>
      <div>
        The click history is {clickHistory.join("-")}
        
      </div>
     {/* <div> The total clicks are {totalClicks}</div> */}
     <Display total={totalClicks} />
     
    </>
  );
}

export default App;