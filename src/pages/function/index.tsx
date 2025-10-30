import { useState } from "react";
import { listWord } from "../../wordlist";
import { UtilGameWord } from "./gameutil";

export default function FunctionApp() {
  const { canBeCheck, displayRemain, isCorrect, randomIndex, randomString } =
    UtilGameWord();
  const [typing, setTyping] = useState("");
  const [word, setWord] = useState(listWord[randomIndex(listWord)]);
  const [randomWord, setRandomWord] = useState(randomString(word));

  function resetGame() {
    setTyping("");
    setWord(listWord[randomIndex(listWord)]);
    setRandomWord(randomString(word));
  }
  function Win() {
    return (
      <>
        <div>Correct</div>
        <button onClick={resetGame}>new random</button>
      </>
    );
  }
  function Lose() {
    return (
      <>
        <div>Wrong</div>
        <button onClick={() => setTyping("")}>Try Again</button>
      </>
    );
  }
  function SummaryView() {
    if (!canBeCheck(typing, word)) return;
    if (isCorrect(typing, word)) return Win();
    return Lose();
  }
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <div>function</div>
      <div style={{ backgroundColor: "red" }}>
        {displayRemain(randomWord, typing)}
      </div>
      <input
        value={typing}
        disabled={canBeCheck(typing, word)}
        onChange={(e) => setTyping(e.target.value)}
      ></input>
      <SummaryView />
    </div>
  );
}
