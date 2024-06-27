import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Increment, Decrement, Reset } from './Features/Redux/All slice/Counteraslice';


const App = () => {
  const dispatch=useDispatch();
  const countervalue = useSelector((state) =>state.count.value, )

 
  return (
    <>
   <div className='Buttonbody'>
      <h1>Count:{countervalue}</h1>
     <div className='Button'>
      <button onClick={()=> dispatch(Increment(2))}>Increment</button>
      <button onClick={()=> dispatch(Decrement(2))}>Decrement</button>
      <button onClick={()=> dispatch(Reset())}>Reset</button>
    </div>
   </div>
   </>
  )
}

export default App
