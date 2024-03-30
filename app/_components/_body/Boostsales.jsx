import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"

function Boostsales() {
    return (  
        <div className='lg:container mx-auto px-4 lg:px-0 lg:mt-0 mt-4'>
            <div className='p-2'>
                <div className='w-full max-w-screen-xl flex flex-col justify-start lg:items-center'>
                    <div className='flex flex-col justify-start items-start pt-18 pb-13 sm:pt-10 sm:pb-8'>
                        <div class="grid justify-items-center lg:grid-cols-2 lg:grid-flow-row lg:gap-x-16 lg:gap-y-16 sm:grid-cols-1 sm:grid-rows-auto sm:grid-flow-row">
                            
                            <div className='flex flex-col lg:items-center justify-center'>
                                <div className='max-w-[40rem] mt-5 px-2'>
                                    <h1 className='text-4xl sm:text-5xl md:text-6xl whitespace-nowrap font-bold text-[rgb(238,95,56)]'>Boost B2B sales,</h1>
                                    <h1 className='text-4xl sm:text-5xl md:text-6xl whitespace-nowrap font-bold text-[rgb(238,95,56)]'>Automate operations.
                                    </h1>
                                    <h1 className='mt-5 text-lg text-slate-600'>
                                        Supershop is a multichannel sales tool for B2B sellers.
                                    </h1>
                                    <div className='w-full lg:min-h-12 min-h-10'></div>  
                                    <p className='lg:text-lg text-lg text-slate-600'>
                                        Engage your customers and reduce administrative tasks - no matter where orders come from: online, by email or in person.
                                    </p>
                                </div>
                                <div className='w-full min-h-12'></div>                                
                                <div className='mt-2 w-full'>
                                    <Button className='bg-[rgb(238,95,56)] text-md hover:[rgb(238,95,56)] text-white font-bold lg:p-10 sm:p-7 rounded-lg shadow-lg w-inline-block text-lg round md:w-1/2 sm:w-full  lg:w-auto border border-gray-300'>Accelerate B2B Sales</Button>
                                </div>
                            </div>

                            <div className='md:pt-10'>
                            <Image
                                src="/bodyImg1.jpeg"
                                alt="Body Image"
                                width={600}
                                height={640}
                                style={{ width: '100%', height: '640px' }}
                                className="p-5 object-cover rounded-tl-[100px] w-1/2 sm:p-0 lg:w-608 lg:h-640 sm:w-533 sm:h-612"
                                
                            />
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Boostsales
