import React from 'react'
import { Button } from "@/components/ui/button"
import Image from 'next/image'

function Step1() {
    const importAll = (r) => {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item).default; });
        return images;
    };

    const images = importAll(require.context('../../../../public/toolsImg', false, /\.(png|jpe?g|svg)$/));
    return (
        <div className=''>
            <div className='flex flex-col items-center justify-center'>
                <div className='flex flex-col items-center justify-center'>
                    <p className='text-[rgb(238,95,56)] bg-[rgb(249,222,214)] text-sm font-bold py-1 px-2 rounded-lg'>Step 1</p>
                    <p className='text-4xl font-bold p-5'>Connect Your tools</p>
                    <p className=''>Simply provide your product catalog, pricing, and customer list.</p>
                    <p className=''>Data can be loaded from spreadsheets or through system integrations.</p>
                </div>
                <div className="">
                    <div className='grid lg:grid-cols-8 lg:gap-x-8 gap-y-8 rounded-xl lg:mt-16 lg:mb-16 grid-cols-4 gap-x-4 mt-12 mb-12'>
                        {Object.entries(images).map(([imageName, imageSrc]) => (
                            <Image key={imageName} src={imageSrc} alt={imageName} height={70} width={70} />
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}
function Products({ productsData }) {
    return (
        <div className=''>
            <Step1 />
            {productsData.map((pDetail, index) => {
                return (
                    <div className='container mx-auto px-4 lg:px-0' key={index}>
                        <div className='flex items-center justify-center p-2 md:pt-24 pb-24'>
                            <div className='w-full'>
                                <div className='flex flex-col justify-start items-start lg:py-5 py-5'>
                                    <div className={`flex flex-col lg:flex-row lg:gap-x-16 md:flex-col-reverse sm:flex-col-reverse ${pDetail.imgPos === 'right' ? 'flex-row-reverse' : ''}`}>
                                        <div className={`mb-5 ${pDetail.imgPos === 'right' ? 'lg:order-last md:order-last' : 'lg:order-first md:order-first'} flex flex-col items-center justify-center`}>
                                            <div className='lg:w-[40rem] sm:2-[20rem] mt-5'>
                                                <p className='text-[rgb(238,95,56)] font-bold'>Step {pDetail.step}</p>
                                                <h1 className='text-4xl font-bold mt-4'>
                                                    {pDetail.heading}
                                                </h1>
                                                <h1 className='mt-5 text-lg text-slate-600'>
                                                    {`${pDetail.desc}`}
                                                </h1>
                                            </div>
                                            <div className='w-full min-h-12'></div>
                                            {/* <div className='uui-button-row-2 is-reverse-mobile-landscape mt-2'>
                                                <Button variant="secondary" className=' p-5 round w-full lg:w-auto border border-gray-300'>Get Started</Button>
                                            </div> */}
                                        </div>
                                        <div className={`animate-drop-in border w-full h-full lg:min-h-[30rem] flex items-center relative overflow-hidden py-6 px-4 ${pDetail.imgPos === 'right' ? 'lg:order-first' : 'lg:order-last'}`}>
                                            <Image
                                                src={pDetail.imageSrc}
                                                alt="Body Image"
                                                layout="responsive"
                                                width={600}
                                                height={608}
                                                className="border-none ml-[-4.1rem] sticky top-0 right-0 bottom-0"
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
            })}
        </div>
    )
}


export default Products