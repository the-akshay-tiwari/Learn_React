import { useState } from "react";
import "./Btn.css";

export default function Btn({ clr }) {
  let styles = { backgroundColor: clr };

  let [redCount, setRedCount] = useState(0);
  let [blueCount, setBlueCount] = useState(0);
  let [greenCount, setGreenCount] = useState(0);
  let [yellowCount, setYellowCount] = useState(0);

  function incCount(val) {
    if (val == "red") {
      setRedCount(redCount + 1); 
    } else if (val === "blue") {
      setBlueCount(blueCount+1);
    } else if (val === "green") {
      setGreenCount(greenCount+1);
    } else if (val === "yellow") {
      setYellowCount(yellowCount+1);
    }
  }

  function showCount(val) {
    if (val == "red") {
      return redCount;
    } else if (val === "blue") {
      return blueCount;
    } else if (val === "green") {
      return greenCount;
    } else if (val === "yellow") {
      return yellowCount;
    }
  }

  return (
    <>
      <p>
        {clr} moves :{showCount(clr)}
        
      </p>
      <button
        onClick={() => {
          incCount(clr);
        }}
        style={styles}
      >
        +1
      </button>
    </>
  );
}
