import React from 'react'
import Product from '../Components/Product'
import {ProductDetail} from "../Content/productDetail"

const Hero = () => {
    return (
        <>
            <h1 className='text-center text-3xl font-bold py-3'>Product Cards</h1>
            <div className='flex flex-wrap '>
                {ProductDetail.map((product) => (
                    <Product pName={product.pName} pDescription={product.pDescription} key={product.pName} />
                ))}
            </div>
        </>

    )
}

export default Hero