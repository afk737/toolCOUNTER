import React from "react"
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset } from './middleware/counterSlice';



function App() {


    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    return (
        <div>

            <h1 className="count">{count}</h1>
            <button  onClick={() => dispatch(increment()) }>plus</button>
            <button  onClick={() => dispatch(decrement())}>minus</button>
            <button  onClick={() => dispatch(reset())}>reset</button>

            
     
        </div>
    )
}

export default App
