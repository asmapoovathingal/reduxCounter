import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from '../redux/counterSlice';


const Counter = () => {
  const [amount,setAmount]=useState(0)
  

const handleIncrementAmount =()=>{
  if(amount){
  // dispatch action with input amount
  dispatch(incrementByAmount(amount))
  }else{
    alert("please enter input")
  }
}

const {count} = useSelector(state=>state.counterReducer)
console.log(count);
const dispatch = useDispatch()
  return (
    <div className='border rounded text-center'>
   <h1 style={{fontSize:'100px'}} className='pb-5'>{count}</h1>
<div style={{width:'500px'}} className='d-flex justify-content-between m-5'>
<button  onClick={()=>dispatch(decrement())} className='btn btn-warning me-5'>DECREMENT</button>
<button  onClick={()=>dispatch(reset())} className='btn btn-danger me-5'>RESET</button>
<button onClick={()=>dispatch(increment())} className='btn btn-success me-5'>INCREMENT</button>

</div>
<div className='d-flex justify-content-between m-5 '>
    <input onChange={e=>setAmount(e.target.value)} type="text" className='form-control' placeholder='Input Increment Amount'/>
<button onClick={handleIncrementAmount} className='btn btn-success ms-5'>Increment by Amount</button>
</div>
    </div>
  )
}

export default Counter