import { useCallback, useEffect, useState } from "react";
import HangmanDrawing from "./HangmanDrawing";
import Keyboard from "./Keyboard";
import Words from "./Words";
import wordArr from "./WordList.json";
function getWord() {
  return wordArr[Math.floor(Math.random() * wordArr.length)];
}
const App = () => {
  const [word, setWord] = useState<string>(getWord);
  const [guessedWords, setGuessedWords] = useState<string[]>([]);
  let inCorrectLetters: string[];
  inCorrectLetters = guessedWords.filter((lett) => !word.includes(lett));
  const isWinner = word.split("").every(letter => guessedWords.includes(letter));
  const isLoser = inCorrectLetters.length >= 6;
  const addGuessedKey = useCallback(
    (key: string) => {
      // console.log(key);
      if (guessedWords.includes(key)) return;
      setGuessedWords((currentLetter) => [...currentLetter, key]);
      console.log(guessedWords);
    },
    [guessedWords,isLoser,isWinner]
  );
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key: string = e.key;
      console.log(key);
      if (!key.match(/^[a-z]$/)) return;
      e.preventDefault();
      addGuessedKey(key);
    };
    document.addEventListener("keypress", handler);
    return () => document.removeEventListener("keypress", handler);
  }, [guessedWords]);
  useEffect(()=>{
    const handler = (e:KeyboardEvent) => {
      const key: string = e.key;
      if(key !== "Enter") return;
      e.preventDefault();
      setGuessedWords([])
      setWord(getWord());
    }
    document.addEventListener("keypress",handler);
    return ()=> document.removeEventListener("keypress",handler);
  },[])
  return (
    <div className="flex flex-col w-full gap-8 mx-0 my-auto items-center">
      {isWinner && <h1 className="text-[25px] font-bold ">Hurrayy !! You won the Game</h1>}
      {isLoser && <h1 className="text-[25px] font-bold ">Sorry !! You lost the Game</h1>}
      <p>Press Enter or Refresh the page to play again</p>
      <HangmanDrawing noOfGuess={inCorrectLetters.length} />
      <Words wordToGuess={word} guessedLetters={guessedWords} reveal = {isLoser}/>
      <div className="self-stretch m-4">
        <Keyboard disabled = {isLoser || isWinner} activeLetters={guessedWords.filter((lett)=>(word.includes(lett)))} inActiveLetters={inCorrectLetters} addGuessedLetters={addGuessedKey}/>
      </div>
    </div>
  );
};

export default App;
