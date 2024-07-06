import React from 'react'

type Props = {
    guessedLetters : String[],
    wordToGuess : String
}

const Words = ({guessedLetters,wordToGuess}: Props) => {
    // const word:String = "TEST";
    const words:String[] = wordToGuess.split("");
    // const guessedLetters: String[] = ["T"];
  return (
    <div>{words.map((lett,index)=>(
        <span key={index} className='font-bold text-[2em] w-1 border-b-4 border-b-black mx-2 uppercase'>
            <span className={guessedLetters.includes(lett) ? "visible" : "text-transparent"}>{lett}</span>
        </span>
    ))}</div>
  )
}

export default Words;