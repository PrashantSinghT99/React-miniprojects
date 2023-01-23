import Dice from "./Components/Dice";
import "./App.css";
import { useState,useEffect } from "react";
import { nanoid } from "nanoid";
import Confetti from 'react-confetti'
function App() {
  const [dice, setDice] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false)

  useEffect(() => {
    const allHeld = dice.every(die => die.isHeld)
    const firstValue = dice[0].value
    const allSameValue = dice.every(die => die.value === firstValue)
    if (allHeld && allSameValue) {
        setTenzies(true)
        console.log("You won!")
    }
}, [dice])

  function allNewDice() {
    const ARRAY = [];
    for (let i = 0; i < 10; i++) {
      ARRAY.push({
        No: Math.floor(Math.random() * 6) + 1,
        isHeld: false,
        id: nanoid()
    });
    }
    return ARRAY;
  }

  function rollDice() {

    if(!tenzies)
    {
    setDice(oldDice => oldDice.map(die => {
        return die.isHeld ? 
            die : {
              No: Math.floor(Math.random() * 6) + 1,
              isHeld: false,
              id: nanoid()
          }
            
    }))}
    else{
      setTenzies(false)
      setDice(allNewDice())
    }
  }

  function holdDice(id) {
    setDice((prevDice) =>
      prevDice.map((ele) => {
        return ele.id === id ? { ...ele, isHeld: !ele.isHeld } : ele;
      })
    );
  }

  const obj = dice.map((die) => {
    return (
      <Dice
        die={die.No}
        key={die.id}
        held={die.isHeld}
        holdDice={() => holdDice(die.id)}
      />
    );
  });

  return (
    <main className="App">
       {tenzies&&<Confetti/>}
      <div className="container">
        <div className="header">
          <h1>Tenzies</h1>
          <p>
            Roll until all dice are the same. Click each die to freeze it at its
            current value between rolls.
          </p>
        </div>

        <div className="alldices">{obj}</div>
      </div>
      <button onClick={rollDice}>{tenzies?"New Game":"Roll"}</button>
    </main>
  );
}

export default App;
