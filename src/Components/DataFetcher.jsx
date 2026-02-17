import React, { useState , useEffect } from 'react'

const DataFetcher = () => {

    const[data , setdata] = useState([]);
    const[loding , setloding] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            setdata(data);
            setloding(false)
    });  
    }, []);
    // it is run only on 1st render


   
    
    

  return (
    <div>
      {loding ? (
        <h1>loding...</h1>
      ):(
        <ul>
            {
                data.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))
            }
        </ul>
      )}
    </div>
  )
}

export default DataFetcher
