// import React from 'react'
// import {
//     Card,
//     CardContent,
//     CardDescription,
//     CardFooter,
//     CardHeader,
//     CardTitle,
// } from "@/components/ui/card"
import accelerasteData from './accelerasteData'
import { Button } from "@/components/ui/button"
// import { PiChatsTeardrop } from "react-icons/pi";
function Accelarate() {
    return (
        <div className='container'>
            <div className=''>
                <h1 className='text-2xl lg:text-4xl sm:text-4xl font-bold'>Accelerate your B2B sales</h1>
                <br />
                <p className='lg:text-lg text-md text-slate-700'>Powerful, self-serve product and powerful copilots to help you convert, engage, and retain more users.</p>
                <br />
            </div>
            <div className='flex lg:flex-row flex-col gap-6'>
            {accelerasteData.map((data, index) => {
                return (
                    <div className=''>
                        <div className="uui-layout72_item w-full bg-gray-100 flex flex-col justify-between items-start p-6">
                            <div className="uui-layout72_item-content">
                                <div className="icon-featured-square-large w-12 h-12 bg-primary-600 text-white rounded-md flex justify-center items-center">
                                    <div className="bg-orange-600 w-embed p-2">
                                        {data.icon}
                                    </div>
                                </div>
                                <div className="uui-space-xxlarge w-full min-h-20"></div>
                                <h3 className="uui-heading-xxsmall-2 text-gray-900 leading-normal font-semibold text-lg font-bold">{data.title}</h3>
                                <div className="uui-space-xxsmall-2 w-full min-h-1"></div>
                                <div className="uui-text-size-medium-2 text-gray-600 leading-relaxed text-base">{data.desc}</div>
                            </div>
                        </div>
                    </div>
                )
            })}
            </div>
            <div className='flex content-center justify-center py-5'>
                <Button className='font-bold lg:p-5 md:p-4 round w-full lg:w-1/2 sm:p-0 lg:w-60 border border-gray-300'>Accelerate B2B Sales</Button>
            </div>
        </div>
    )
}

export default Accelarate