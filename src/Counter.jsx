import { useEffect, useState } from 'react';
import './App.css';
import React from 'react';

const Person = (props) => {
  return (
    <div>
      {props.name ? <h3>Name: {props.name}</h3> : 'hello'}
       
       <h3>Age: {props.age}</h3>
    </div>
  )
}


const Counter = () => {
  const [count, setCount] = useState(0);
  const [sum, setSum] = useState(5);

  useEffect(()=> setCount(0),[]);

  let dope = () => {setCount((prevcount)=> prevcount + 1)}
  let sly = () => {setCount((prevcount)=> prevcount - 1)}

  return (
    <div className='Counter-app'>
      <Person name='John' age={24} />
      <button onClick={dope}>+</button>
      <h4>{count}</h4>
      <button onClick={sly}>-</button>
      <button onClick={()=> setSum(()=> sum + count)}>add</button>
      <h4>{sum}</h4>
    </div>
  )
}

export default Counter;