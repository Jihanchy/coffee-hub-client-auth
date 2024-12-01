import React from 'react';
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
const AddCoffee = () => {
    const handleAddCoffee = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee = { name, chef, supplier, taste, category, details, photo, }

        fetch('http://localhost:5000/coffees', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                }
            }
        )

    }
    return (
        <div className='bg-addCoffeeBanner py-5'>
            <div className=' w-9/12 mx-auto '>
                <Link to='/'><h2 className='flex items-center gap-2 text-lg font-semibold'><span><FaArrowLeft /></span><span>Back to home</span></h2></Link>
                <div className='bg-gray-100 p-10 mt-4'>
                    <div className='text-center w-2/3 mx-auto space-y-2 pb-5'>
                        <h3 className='text-3xl'>Add new coffee</h3>
                        <p>It is a long established fact that a
                            reader will be distraceted by the
                            readable content of a page when
                            looking at its layout. The point
                            of using Lorem Ipsum is that it
                            has a more-or-less normal
                            distribution of letters,
                            as opposed to using Content here.</p>
                    </div>
                    <form onSubmit={handleAddCoffee}>
                        <div className='px-4'>
                            {/* row-1 */}
                            <div className='flex gap-5'>
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <label className="input-group">
                                        <input type="text" name='name' placeholder="Enter Coffee Name" className="input w-full input-bordered" />
                                    </label>
                                </div>
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Chef</span>
                                    </label>
                                    <label className="input-group">
                                        <input type="text" name='chef' placeholder="Enter Coffee Chef" className="input w-full input-bordered" />
                                    </label>
                                </div>
                            </div>
                            {/* row-2 */}
                            <div className='flex gap-5'>
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Supplier</span>
                                    </label>
                                    <label className="input-group">
                                        <input type="text" name='supplier' placeholder="Enter Coffee Supplier" className="input w-full input-bordered" />
                                    </label>
                                </div>
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Taste</span>
                                    </label>
                                    <label className="input-group">
                                        <input type="text" name='taste' placeholder="Enter Coffee Taste" className="input w-full input-bordered" />
                                    </label>
                                </div>
                            </div>
                            {/* row-3 */}
                            <div className='flex gap-5'>
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Category</span>
                                    </label>
                                    <label className="input-group">
                                        <input type="text" name='category' placeholder="Enter Coffee Category" className="input w-full input-bordered" />
                                    </label>
                                </div>
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Details</span>
                                    </label>
                                    <label className="input-group">
                                        <input type="text" name='details' placeholder="Enter Coffee Details" className="input w-full input-bordered" />
                                    </label>
                                </div>
                            </div>
                            {/* row-4 */}
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name='photo' placeholder="Enter Coffee Photo URL" className="input w-full input-bordered" />
                                </label>
                            </div>
                            <button className='btn w-full my-5 bg-[#D2B48C] text-white'>Add Coffee</button>
                        </div>
                    </form>


                </div>
            </div>
        </div>
    );
};

export default AddCoffee;