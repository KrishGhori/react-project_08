import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import LoggerComponent from './Components/LoggerComponents'
import TimeComponents from './Components/TimeComponents'
import DataFetcher from './Components/DataFetcher'
import ResizeComponents from './Components/ResizeComponents'
import MultiEffectComponents from './Components/MultiEffectComponents'

function App() {

  const [count , setcount] = useState(0);
  const [total , setTotal] = useState(1);
 
// variation :1 
// run on every render
//  useEffect(() => {
//    alert("i will run on each render");
//  })

// variation : 2 
// run on only frist render
// useEffect(() => {
//   alert("i will run on only frist render");
// }, [])

// variation : 3
// run evry time when count is updated
// useEffect(() => {
//   alert("i will run evry time when count is updated");
// }, [count])


// variation : 4
// multiple depandances
// useEffect(() => {
//   alert("i will run evry time when count/total is updated");
// }, [count,total])

// variation : 5
// clean-up funtion
// useEffect(() => {
//   alert("count is updated");

//   return () =>  {
//     alert("count is unmounted from the UI");
//   }
// }, [count])



 function handleclick(){
  setcount(count+1);
 
 }

 function handleTotal (){
  setTotal(total+1)
 }
 

  return (
   
    <div>

      <LoggerComponent />

      <TimeComponents />

      <DataFetcher />

      <ResizeComponents />

      <MultiEffectComponents />

      <button onClick={handleclick}>update count </button>

      <p>count is {count}</p>
      
      <br />
      <button onClick={handleTotal}>update Total </button>
      <p>total is {total}</p>
    </div>
  )
}

export default App
