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
    <h2>Data Fetcher</h2>
    {loding ? (
      <div className="loader"></div>
    ) : (
      <ul className="post-list">
        {data.slice(0, 10).map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    )}
  </div>
);

}

export default DataFetcher
