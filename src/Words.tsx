type Props = {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
};

const Words = ({ guessedLetters, wordToGuess, reveal = false }: Props) => {
  const words: string[] = wordToGuess.split("");
  return (
    <div>
      {words.map((lett, index) => (
        <span
          key={index}
          className="font-bold text-[2em] w-1 border-b-[0.2em] border-b-black mx-2 uppercase"
        >
          <span
            className={`${
              guessedLetters.includes(lett) || reveal
                ? "visible text-black"
                : "text-transparent"
            } ${!guessedLetters.includes(lett) && reveal ? "text-red-600" : ""}`}
          >
            {lett}
          </span>
        </span>
      ))}
    </div>
  );
};

export default Words;
