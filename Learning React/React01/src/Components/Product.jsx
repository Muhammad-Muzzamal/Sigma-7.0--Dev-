import React from 'react'

const Product = (props) => {
    console.log(props);
    return (
        <div className='border w-75 p-4 rounded-lg m-4 hover:translate-px hover:shadow-lg transition-all duration-500 hover:bg-gray-100 sm:w-screen md:w-1/3 lg:w-1/4'>
            <h1 className='font-bold'>{props.pName}</h1>
            <p className='text-gray-700 italic'>{props.pDescription}</p>
        </div>
    )
}

export default Product