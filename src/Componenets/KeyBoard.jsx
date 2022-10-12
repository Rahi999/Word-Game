import React, { useState } from "react";
import { render } from "react-dom";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

export default function KeyBoard() {
  const [input, setInput] = useState("");
  const handleonChange = (input) => {
    setInput(input);
    console.log("Word Now", input);
  };

  const handleonChangeInput = (event) => {
    let input = event.target.value;
    setInput(input);
  };

  return (
    <div>
      <input
        value={input}
        placeholder={"Type on The Virtual Keyboard To Start The Game"}
        onChange={(e) => handleonChangeInput(e)}
      />
      <Keyboard
        keyboardRef={(r) => (this.keyboard = r)}
        theme={"hg-theme-default myTheme1"}
        onChange={(input) => handleonChange(input)}
      />
    </div>
  );
}
