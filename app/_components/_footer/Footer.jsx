import React from 'react'
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar"
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
    return (
        <div className='container mt-5 px-8 py-16'>
            <div className='w-full max-w-screen-xl mx-auto'>
                <div className='flex flex-col content-center justify-center items-center'>
                    <Link href='/'><Image src='/logo.png' alt='logo' width={200} height={200} /></Link>
                    <Menubar className='mt-1 '>
                        <MenubarMenu className='gap-5'>
                            <MenubarTrigger>Home</MenubarTrigger>
                            <MenubarTrigger>Features</MenubarTrigger>
                            <MenubarTrigger>Careers</MenubarTrigger>
                            <MenubarTrigger>Help</MenubarTrigger>
                            <MenubarTrigger>Privacy</MenubarTrigger>

                        </MenubarMenu>
                    </Menubar>
                </div>
                <div className='border-t border-gray-200 justify-between mt-10 pt-8 flex lg:flex-row lex-col-reverse items-center text-slate-500 text-sm'>
                    <div className=''>
                        <p className=''>&copy; 2024 Super Shop Inc.</p>
                    </div>
                    <div className='gap-x-4 whitespace-normal flex'>
                        <Link href='/'>Terms</Link>
                        <Link href='/'>Privacy</Link>
                        <Link href='/'>Cookies</Link>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Footer