import { useState , useEffect } from "react";

function LoggerComponent(){
    const [count,setcount] = useState(0);

useEffect(() => {
  console.log("Component render or count changed :" , count);
});

return  (
    <div>
        <h1>count {count}</h1>
        <button onClick={() => setcount(count+1)}>click on me</button>
    </div>
);
}

export default LoggerComponent