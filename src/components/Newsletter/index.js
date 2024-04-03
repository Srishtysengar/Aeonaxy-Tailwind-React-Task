
import React from 'react';

const Newsletter = () => {
    return (
        <div className="relative w-full h-full mb-32">
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center gap-60">
                <div className='w-1/3 '>
                    <p className="text-white mb-12">STAY UPDATED</p>
                    <h1 className="text-white text-5xl mb-8">Subscribe to <br></br>the newsletter</h1>
                    <p className="text-white">Submit your email ,and once a month we'll send you our <br></br> best time-saving articles, videos and other resources</p>
                </div>
                
                <div className='border border-gray-100 bg-white rounded-2xl p-8'>
                    <form className="flex flex-col items-center">
                        <div className='flex '>
                        <div className='flex flex-col mb-8'>
                        <p className='mb-2'>First Name</p>
                        <input type="text" placeholder="First Name" className="mb-2 px-4 py-2 border border-gray-300 rounded" />
                        </div>
                        <div className='flex flex-col'>
                        <p className='ml-2 mb-2'>Last Name</p>
                        <input type="text" placeholder="Last Name" className="mb-2 px-4 py-2 border border-gray-300 rounded ml-2"  />
                        </div>
                        </div>
                        <div className='flex flex-col w-full mb-4'>
                        <p className='w-full mb-2'>Email Address</p>
                        <input type="email" placeholder="Enter your Email Address" className="mb-2 px-4 py-2 border border-gray-300 rounded " />
                        </div>
                        <button type="submit" className="bg-blue-500 text-white px-6 py-4 rounded-full hover:bg-blue-600 w-full">Submit</button>
                    </form>
                </div>
            </div>
            <img src='/images/newsletter.jpg' alt='newsletter' className="w-full h-1/2 object-cover newsletter" />
        </div>
    );
}

export default Newsletter;
