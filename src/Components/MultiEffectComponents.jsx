import React, {useEffect, useState } from 'react'

const MultiEffectComponents = () => {

    const[count,setcount] = useState(0);
    const[seconds , setSeconds] = useState(0);

       useEffect(() => {
        console.log('count changed:', count);
       }, [count]);
         
    
        useEffect(() => {
            const intervalID = setInterval(() => {
            console.log("setInterval executed")
            setSeconds(prevSecond => prevSecond +1);
          }, 1000);
        
          return () => {
            console.log("time to stop")
            clearInterval(intervalID);
          };
        }, [])


  return (
    <div>
      <h1>count : {count}</h1>
       <button onClick={() => setcount(count+1)}>Increment count</button>
       <h2>seconds : {seconds}</h2>
    </div>
  )
}

export default MultiEffectComponents
