import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset } from './counterSlice';
 
const Counter = () => {

//   const count = useSelector((state)=>console.log(state))
  const value = useSelector((state)=>state.counter.count)
//   console.log(count)

const dispatch =useDispatch();
 
  return (
    <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
            {/* <!-- header --> */}
            <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
                 Counter App Using Redux-toolkit
            </h1>

            {/* <!-- counters --> */}
            <div className="max-w-md mx-auto mt-10 space-y-5">
                <div
                    className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow"
                >
                    <div className="text-2xl font-semibold">{value}</div>
                    <div className="flex space-x-3">
                        <button
                        onClick={()=>{dispatch(increment())}}
                            className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
                        >
                            Increment
                        </button>
                        <button
                        onClick={()=>{dispatch(decrement())}}
                            className="bg-red-400 text-white px-3 py-2 rounded shadow"
                        >
                            Decrement
                        </button>
                        <button
                        onClick={()=>{dispatch(reset())}}
                            className="bg-purple-400 text-white px-3 py-2 rounded shadow"
                        >
                           Reset
                        </button>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Counter;