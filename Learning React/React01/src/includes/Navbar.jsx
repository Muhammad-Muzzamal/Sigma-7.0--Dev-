import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-red-400 w-screen h-15 overflow-hidden flex justify-between px-10 align-center items-center'>
            <div className='font-extrabold text-xl'>Muzzamal</div>
            <ul className='flex gap-7 align-center items-center hidden lg:flex'>
                <li className='hover:underline transition-all duration-500'>Home</li>
                <li className='hover:underline transition-all duration-500'>About</li>
                <li className='hover:underline transition-all duration-500'>Contact</li>
            </ul>
            <div className='flex justify-center align-center gap-2'>
                <button className='bg-red-800 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-all duration-75'>Login</button>
                <button className='bg-red-800 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-all duration-75'>Register</button>
            </div>
        </nav>
    )
}

export default Navbar