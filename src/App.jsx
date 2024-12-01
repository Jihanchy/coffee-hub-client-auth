
import { Link, useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './Components/CoffeeCard'
import { useState } from 'react'

function App() {
const loadedCoffees = useLoaderData()
const [coffees,setSingleCoffee] = useState(loadedCoffees)
  return (
    <div className='bg-home py-10'>
      <div className='w-9/12 mx-auto'>
        <div className='text-center space-y-2'>
          <p>---slip & savour---</p>
          <h3 className='text-3xl font-semibold'>Our popular products</h3>
          <button className='btn btn-sm rounded-sm bg-[#D2B48C] text-white'><Link to='/addCoffee'>Add Coffee</Link></button>
        </div> 
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 w-11/12 mx-auto pt-5'>
            {
              coffees.map(coffee => <CoffeeCard key={coffee._id} coffees={coffees} setSingleCoffee={setSingleCoffee} coffee={coffee}></CoffeeCard>)
            }
        </div>
      </div>
    </div>
  )
}

export default App
