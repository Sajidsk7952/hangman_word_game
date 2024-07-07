import React from "react";

type KeyboardProps = {
  disabled?:boolean,
  activeLetters: string[];
  inActiveLetters: string[];
  addGuessedLetters: (letter: string) => void;
};
const Alphas: string[] = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const Keyboard = ({
  disabled = false,
  activeLetters,
  inActiveLetters,
  addGuessedLetters,
}: KeyboardProps) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(75px,1fr))] gap-4">
      {Alphas.map((alp, index) => {
        const active = activeLetters.includes(alp);
        const inActive = inActiveLetters.includes(alp);
        return (
          <button
            onClick={() => addGuessedLetters(alp)}
            key={index}
            className={`btn ${active ? "btn-active" : ""} ${
              inActive ? "btn-inactive" : ""
            }`}
            disabled={active || inActive || disabled}
          >
            {alp}
          </button>
        );
      })}
    </div>
  );
};

export default Keyboard;
