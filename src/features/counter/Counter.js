import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { decrement, increment, reset } from './CounterSlicer';

const Counter = () => {
    const count = useSelector(state=>state.count);
    const dispatch =useDispatch()
  return (
    <div>
        <h1>Count : {count}</h1>
        <button onClick={()=>dispatch(increment())}></button>
        <button onClick={()=>dispatch(decrement())}></button>
        <button onClick={()=>dispatch(reset())}></button>
    </div>
  )
}

export default Counter
