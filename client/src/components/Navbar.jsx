import React from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
    return (
        <div>
            <div className='py-4 shadow'>
                <div className='px-4 container 2xl:px-20 mx-auto flex justify-between items-center  '>
                    <img src={assets.logo} alt="" />
                    <div className='flex gap-4 max-sm:text-xs'>
                        <button className='text-gray-600'>Recruiter Login</button>
                        <button className='bg-blue-500 text-white px-6 py-2 sm:px-9 rounded'>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
