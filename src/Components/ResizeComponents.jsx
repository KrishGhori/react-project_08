import React, {useEffect, useState } from 'react'

const ResizeComponents = () => {

    const[windowWidth , setwindowWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => setwindowWidth(window.innerWidth);
      console.log("event added");
      window.addEventListener('resize', handleResize);
    
      return () => {
        console.log("event remove");
        window.removeEventListener('resize',handleResize);
      }
    }, []);
    // it will run only on 1st render
    
  return (
    <div>
      <h1>window Width : {windowWidth}px</h1>
    </div>
  )
}

export default ResizeComponents
