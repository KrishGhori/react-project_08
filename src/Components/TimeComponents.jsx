import React, { useState , useEffect} from 'react'

const TimeComponents = () => {

    const[seconds , setSeconds] = useState(0);

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
        <h1>Seconds : {seconds}</h1>
    </div>
  )
}

export default TimeComponents
