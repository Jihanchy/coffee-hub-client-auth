import React from 'react';
import { FaArrowLeft } from 'react-icons/fa6';
import { Link, useLoaderData } from 'react-router-dom';

const CoffeeDetails = () => {
    const coffee = useLoaderData()
    const {_id, name, chef, supplier, taste, category, details, photo, } = coffee
    return (
        <div className='bg-addCoffeeBanner'>
            <div className='w-10/12 mx-auto py-10'>
            <Link to='/'><h2 className='flex items-center gap-2 text-lg font-semibold'><span><FaArrowLeft /></span><span>Back to home</span></h2></Link>
            <div className='bg-gray-100 grid grid-cols-2 p-5 mt-5 items-center'>
                <div className='flex items-center justify-center'><img src={photo} alt="" /></div>
                <div>
                <h2><span className='font-semibold'>Name : </span><span>{name}</span></h2>
                <h2><span className='font-semibold'>Chef : </span><span>{chef}</span></h2>
                <h2><span className='font-semibold'>Category : </span><span>{supplier}</span></h2>
                <h2><span className='font-semibold'>Supplier : </span><span>{category}</span></h2>
                <h2><span className='font-semibold'>Taste : </span><span>{taste}</span></h2>
                <h2><span className='font-semibold'>Details : </span><span>{details}</span></h2>
                </div>
            </div>
            </div>
        </div>
    );
};

export default CoffeeDetails;