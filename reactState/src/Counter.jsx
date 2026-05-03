import { useState } from "react";

function init(){
  return Math.random();
}

export default function Counter() {
  // let count = 0;
  let [count,setCount]=useState(init);
  console.log("Component was re-rendered");
  
  // console.log(arr);
  
  function incCount() {
    // count++;
    setCount((a)=>{
      return a+1;
    });
    // setCount((a)=>{
    //   return a+1;
    // });

    //when new State value is dependent on old State value use callback

    // console.log(count);
  }

  return (
    <>
      <div>Count = {count}</div>
      <button onClick={incCount}>Click me!</button>
    </>
  );
}
