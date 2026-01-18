import React, { useState } from 'react'

const Form = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

  return (
    <div>
        <form action="" onSubmit={(e)=> {
            e.preventDefault()
            console.log(name, email, password)
        }}
        className='flex flex-col items-center'
        >
            <input type="text" placeholder='Name' className='border border-black p-2 m-2' value={name} onChange={(e)=> setName(e.target.value)} />
            <input type="text" placeholder='Email' className='border border-black p-2 m-2' value={email} onChange={(e)=> setEmail(e.target.value)} />
            <input type="text" placeholder='Password' className='border border-black p-2 m-2' />
            <button type='submit' className='bg-red-500 p-2 m-2 rounded-full text-white'>Submit</button>
        </form>
    </div>
  )
}

export default Form