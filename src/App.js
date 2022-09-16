import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😀": "smiling",
  "😂": "laughing",
  "😘": "kiss",
  "🤗": "hug",
  "🤔": "thinking",
  "🫡": "Saluting",
  "🤫": "Shushing",
  "😐": "Neutral",
  "😪": "Sleepy",
  "😟": "Worried"
};

var emojiDictionaryList = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState();

  function changeEventHandler(event) {
    var userInput = event.target.value;
    meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "sorry! This emoji is not in our database";
    }
    setMeaning(meaning);
  }

  function clickEventHandler(emoji) {
    meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji Mania ❤️</h1>
      <input placeholder="type an emoji here!" onChange={changeEventHandler} />
      <div className="meaning">{meaning}</div>
      <h2>Select an emoji </h2>
      <div>
        {emojiDictionaryList.map(function (emoji) {
          return (
            <span key={emoji} onClick={() => clickEventHandler(emoji)}>
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
