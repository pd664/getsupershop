import React from 'react'
import Image from 'next/image'


function SalesChannel() {
    return (
        <div className='container px-0 lg:px-0 px-2'>
            <div className='flex items-center justify-center p-2'>
                <div className='w-full flex flex-col justify-start items-center'>
                    <div className='flex flex-col justify-center items-center items-center lg:pt-28 pt-20 pb-28'>
                        <div class="grid lg:grid-cols-2 grid-flow-row gap-x-16 lg:gap-y-16 md:grid-cols-2 md:grid-flow-row md:gap-y-8 sm:grid-cols-1 sm:grid-flow-row">
                            <div className='max-w-[30rem] flex content-center flex-col justify-center w-full px-8 sm:px-2'>
                                <div className=''>
                                    <p className='text-[rgb(238,95,56)] font-bold '>Supercharge B2B</p>
                                    <br />
                                    <h1 className='lg:text-4xl text-3xl sm:text-2xl font-bold'>Instant results</h1>
                                    <br />
                                    <p className='text-lg text-slate-700'>Growth and productivity when you need it most.</p>
                                    <br />
                                </div>
                                <div className='flex content-center justify-between w-full lg:px-8 sm:px-2'>
                                    <div className=''>
                                        <h1 className='text-[rgb(238,95,56)] font-bold lg:text-6xl text-4xl'>10x</h1>
                                        <p className='text-sm font-bold'>Faster to validate your orders</p>
                                    </div>
                                    <div className=''>
                                        <h1 className='text-[rgb(238,95,56)] font-bold lg:text-6xl text-4xl'>0%</h1>
                                        <p className='text-sm font-bold'>Commission on sales</p>
                                    </div>
                                </div>
                            </div>
                            <div className=''>
                            <Image
                                src="/salesChannel.png"
                                alt="sales Channel"
                                layout="responsive"
                                width={600}
                                height={608}
                                className="p-5 object-cover w-1/2"
                                style={{
                                    maxWidth: '100vw',
                                    width: '100%',
                                    '@screen sm': { maxWidth: '94vw' },
                                    '@screen md': { maxWidth: '45vw' },
                                    '@screen lg': { maxWidth: '608px' }
                                }}
                            />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SalesChannel