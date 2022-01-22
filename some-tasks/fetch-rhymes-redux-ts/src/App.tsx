import React, { useEffect } from "react";

import "./App.css";
import { useAppSelector, useAppDispatch } from "./app/hooks";
import { selectCount, incrementAsync } from "./features/words/wordsSlice";
import { changeTerm } from "./features/words/wordsSlice";

function App() {
  const { words = [], term } = useAppSelector(selectCount);
  useEffect(() => {
    const fromUserWord = prompt("Enter a word to find rhymes");
    dispatch(changeTerm(fromUserWord));
    dispatch(incrementAsync(fromUserWord || term));
  }, []);

  useEffect(() => {
    dispatch(incrementAsync(term));
  }, [term]);

  const dispatch = useAppDispatch();
  const handleInputValue = (e: any) => {
    const value = e.target.value;
    dispatch(changeTerm(value));
  };
  return (
    <div className="App">
      <h2>change input to see rhymes</h2>
      <input type="text" onChange={handleInputValue} value={term} />
      {words.length > 1 &&
        words.map((item: any) => (
          <p key={item.score}>
            {item.word}, how popular:{item.score}
          </p>
        ))}
    </div>
  );
}

export default App;
