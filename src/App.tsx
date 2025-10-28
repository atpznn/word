import { useState } from "react";
import "./App.css";
function UtilGameWord() {
  function randomIndex(listItem: unknown[]) {
    const randomIndex = Math.floor(Math.random() * listItem.length);
    return randomIndex;
  }
  function randomString(word: string) {
    const listIndex = word.split("").map((_, index) => index);
    let result = "";
    word.split("").forEach(() => {
      const index = randomIndex(listIndex);
      const selectedValue = listIndex[index];
      listIndex.splice(index, 1);
      result += word[selectedValue];
    });
    return result;
  }
  function isCorrect(typing: string, compare: string) {
    return typing == compare;
  }
  function canBeCheck(typeing: string, word: string) {
    return typeing.length == word.length;
  }
  function displayRemain(source: string, typeing: string) {
    const _source = source.split("");
    const _typeing = typeing.split("");
    let result = "";
    _source.forEach((x) => {
      const indexToDelete = _typeing.findIndex((f) => f == x);
      if (indexToDelete > -1) {
        _typeing.splice(indexToDelete, 1);
      } else {
        result += x;
      }
    });
    return result;
  }
  return {
    displayRemain,
    canBeCheck,
    isCorrect,
    randomIndex,
    randomString,
  };
}
function App() {
  const { canBeCheck, displayRemain, isCorrect, randomIndex, randomString } =
    UtilGameWord();
  const [typing, setTyping] = useState("");
  const [listWord] = useState([
    "persistence",
    "coke",
    "my book",
    "name",
    "test",
  ]);
  const [word, setWord] = useState(listWord[randomIndex(listWord)]);
  const [randomWord, setRandomWord] = useState(randomString(word));
  return (
    <>
      <div style={{ backgroundColor: "red" }}>
        {displayRemain(randomWord, typing)}
      </div>
      <input
        value={typing}
        disabled={canBeCheck(typing, word)}
        onChange={(e) => setTyping(e.target.value)}
      ></input>
      {canBeCheck(typing, word) ? (
        isCorrect(typing, word) ? (
          <>
            <div>Correct</div>
            <button
              onClick={() => {
                setTyping("");
                setWord(listWord[randomIndex(listWord)]);
                setRandomWord(randomString(word));
              }}
            >
              new random
            </button>
          </>
        ) : (
          <>
            <div>Wrong</div>
            <button onClick={() => setTyping("")}>Try Again</button>
          </>
        )
      ) : null}
    </>
  );
}

export default App;
