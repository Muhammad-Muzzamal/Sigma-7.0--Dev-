import React, { useState } from 'react'

const Count = () => {
    const [count, setCount] = useState(0);
    return (
        <div className='flex justify-center items-center flex-col'>
            <h1 className='text-center text-3xl font-bold py-3'>Count: {count}</h1>
            <div>
                <button className='bg-green-600 p-2 m-2 rounded-full text-white' onClick={() => {
                    setCount(count + 1);
                }}>Increment</button>
                <button className='bg-red-600 p-2 m-2 rounded-full text-white' onClick={() => {
                    setCount(count - 1)
                }}>Decrement</button>
            </div>
        </div>
    )
}

export default Count