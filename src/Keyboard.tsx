import React from 'react'

type Props = {}
const Alphas:String[] = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const Keyboard = (props: Props) => {
  return (
    <div className='grid grid-cols-[repeat(auto-fit,minmax(75px,1fr))] gap-4'>
        {Alphas.map((alp,index)=>(
            <button key={index} className='btn'>{alp}</button>
        ))}
    </div>
  )
}

export default Keyboard