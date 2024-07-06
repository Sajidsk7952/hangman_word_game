import React from "react";

type HangmanDrawingProps = {
    noOfGuess : number,
};

const HEAD = <div className="absolute top-[50px] right-[-40px] h-[90px] w-[90px] rounded-[50%] border-black border-[10px]"></div>;
const BODY = <div className="absolute top-[140px] right-0 w-[10px] h-[150px] bg-black"></div>
const LEFT_ARM = <div className="absolute top-[150px] right-[70px] rotate-[45deg] origin-bottom-left w-[10px] h-[100px] bg-black"></div>
const RIGHT_ARM = <div className="absolute top-[150px] right-[-70px] rotate-[-45deg] origin-bottom-right w-[10px] h-[100px] bg-black"></div>
const LEFT_LEG = <div className="absolute top-[253px] right-[70px] rotate-[45deg] origin-bottom-left w-[10px] h-[100px] bg-black"></div>
const RIGHT_LEG = <div className="absolute top-[253px] right-[-70px] rotate-[-45deg] origin-bottom-right w-[10px] h-[100px] bg-black"></div>
const BODY_PARTS = [HEAD,BODY,LEFT_ARM,RIGHT_ARM,LEFT_LEG,RIGHT_LEG]
const HangmanDrawing = ({noOfGuess}: HangmanDrawingProps) => {
  return (
    <div className="relative">
      {BODY_PARTS.slice(0,noOfGuess)}
      <div className="w-[10px] h-[50px] bg-black absolute top-0 right-0"></div>
      <div className="h-[10px] w-[200px] bg-black ml-[120px]"></div>
      <div className="w-[10px] h-[450px] bg-black ml-[120px]"></div>
      <div className="w-[250px] h-[10px] bg-black"></div>
    </div>
  );
};

export default HangmanDrawing;
