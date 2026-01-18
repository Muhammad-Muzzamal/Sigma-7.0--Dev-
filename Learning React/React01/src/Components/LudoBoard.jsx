import React, {useState} from 'react'

const LudoBoard = () => {

    const [moves, setMoves] = useState({
        blue : 0,
        red : 0,
        green : 0,
        yellow : 0,
    })

    const updateBlue = () => {
        setMoves((prevMoves) => {
            return {
                ...prevMoves,
                blue : prevMoves.blue + 1,
            }
        })
    }

    return (
        <div className="flex justify-center items-center flex-col">
            <div className='text-3xl font-bold py-3'>LudoBoard</div>
            <div className='flex justify-center items-center flex-col'>
                <p>BlueMoves = {moves.blue}</p>
                <button className='bg-blue-600 p-2 m-2 rounded-full text-white'>+1</button>
            </div>
            <div className='flex justify-center items-center flex-col'>
                <p>RedMoves = {moves.red}</p>
                <button className='bg-red-600 p-2 m-2 rounded-full text-white'>+1</button>
            </div>
            <div className='flex justify-center items-center flex-col'>
                <p>GreenMoves = {moves.green}</p>
                <button className='bg-green-600 p-2 m-2 rounded-full text-white' >+1</button>
            </div>
            <div className='flex justify-center items-center flex-col'>
                <p>YellowMoves = {moves.yellow}</p>
                <button className='bg-yellow-600 p-2 m-2 rounded-full text-white'>+1</button>
            </div>
        </div>
    )
}

export default LudoBoard