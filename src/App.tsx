import { useEffect, useState } from "react";
import HangmanDrawing from "./HangmanDrawing";
import Keyboard from "./Keyboard";
import Words from "./Words";
import wordArr from './WordList.json';
const App = () => {
  const [word,setWord] = useState<String>("");
  useEffect(()=>{
    setWord(wordArr[Math.floor(Math.random() * wordArr.length)])
  },[])
  const [guessedWords,setGuessedWords] = useState<String[]>([])
  let inCorrectLetters : String[];
  inCorrectLetters = guessedWords.filter(lett=>(
    !guessedWords.includes(lett)
  ))
  return (
    <div className="flex flex-col w-full gap-8 mx-0 my-auto items-center">
      Text
      <HangmanDrawing noOfGuess = {inCorrectLetters.length}/>
      <Words wordToGuess={word} guessedLetters={guessedWords}/>
      <div className="self-stretch m-4">
      <Keyboard />
      </div>
    </div>
  )
}

export default App;