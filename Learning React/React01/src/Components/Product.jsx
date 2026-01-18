import React from 'react'

const Product = (props) => {
    return (
        <div className='relative border w-75 p-4 rounded-lg m-4 hover:shadow-lg transition-all duration-500 hover:bg-gray-100 sm:w-screen md:w-1/3 lg:w-1/4'>
            {props.price >= 2000 && <p className='bg-yellow-500 w-fit text-sm hover:scale-110 transition-all duration-300 p-1 rounded-full absolute right-2 top-2' onMouseEnter={(e)=> {
                console.log('Discount', props.price, e.target)
            }}>Save: {props.price * 0.2}</p>}
            <h1 className='font-bold'>{props.pName}</h1>
            <p className='text-gray-700 italic'>{props.pDescription}</p>
            <ul className='flex flex-wrap'>
                {props.features && props.features.map((feature) => (
                    <li key={feature} class="list-none bg-gray-500 w-fit m-1 p-1 rounded-full hover:bg-gray-600">{feature}</li>
                ))}
            </ul>
            <p className='font-bold'>Price: {props.price}</p>
        </div>
    )
}

export default Product