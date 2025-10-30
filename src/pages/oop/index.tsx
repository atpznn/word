import { useState } from "react";
import { WordGame } from "./word";
import { listWord } from "../../wordlist";
import { randomIndex } from "../../util";
export default function OOPApp() {
  const [typing, setTyping] = useState("");
  const [word, setWord] = useState(listWord[randomIndex(listWord)]);
  const [currentWord, setCurrentWord] = useState(() => new WordGame(word));
  function resetGame() {
    setTyping("");
    setWord(listWord[randomIndex(listWord)]);
    setCurrentWord(new WordGame(word));
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
    if (!currentWord.canBeCheck(typing)) return;
    if (currentWord.isCorrect(typing)) return Win();
    return Lose();
  }
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <div>oop</div>
      <div style={{ backgroundColor: "red" }}>
        {currentWord.remainWord(typing)}
      </div>
      <input
        value={typing}
        disabled={currentWord.canBeCheck(typing)}
        onChange={(e) => setTyping(e.target.value)}
      ></input>
      <SummaryView />
    </div>
  );
}
