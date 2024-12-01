import React from 'react';
import { FaRegEye } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee, coffees, setSingleCoffee }) => {
    const { _id, name, chef, supplier, taste, category, details, photo, } = coffee
    const handleDelete = (_id) => {
                Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!"
                }).then((result) => {
                    if (result.isConfirmed) {
                        fetch(`https://v1-coffee-store-server-phi.vercel.app/coffees/${_id}`,{
                            method:'DELETE'
                        })
                        .then(res => res.json())
                        .then(data => {
                            // console.log(data)
                            if(data.deletedCount > 0){
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your file has been deleted.",
                                    icon: "success"
                                });
                                const remaining = coffees.filter(coffee => coffee._id !== _id)
                                setSingleCoffee(remaining)
                            }
                        })
                    }
                });
                
    }
    return (
        <div className='flex justify-between items-center gap-4 p-3 rounded-md shadow-xl'>
            <div className='flex-1'><img src={photo} alt="" /></div>
            <div className='flex-1'>
                <h2><span className='font-semibold'>Name : </span><span>{name}</span></h2>
                <h2><span className='font-semibold'>Chef : </span><span>{chef}</span></h2>
                <h2><span className='font-semibold'>Category : </span><span>{category}</span></h2>
            </div>
            <div className="join join-vertical space-y-3 rounded-none">
                <Link to={`/coffeeDetails/${_id}`}><button className="btn join-item  bg-orange-400 text-white"><FaRegEye /></button></Link>
                <Link to={`/updateCoffee/${_id}`}><button className="btn join-item  bg-gray-900 text-white"><MdEdit /></button></Link>
                <button onClick={() => handleDelete(_id)} className="btn join-item  bg-red-500 text-white"><MdDelete /></button>
            </div>
        </div>
    );
};

export default CoffeeCard;