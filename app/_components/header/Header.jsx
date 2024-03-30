'use client'
// import Image from 'next/image'
// import { Button } from "@/components/ui/button"
// import { LayoutGrid, Search, ShoppingBag, Menu } from 'lucide-react'
// function Header() {
//   return (
//     <header className="shadow-sm w-100">
//        <div className='flex justify-between container border-bottom p-8 gap-10'>
//         <div className="flex items-center gap-8">
//               <Image src='/logo.png' alt='logo' width={200} height={200} /> 
//               <div className='hidden lg:block'>
//               <Button variant="link" className='text-md'>Home</Button>
//               <Button variant="link" className='text-md'>Product</Button>
//               </div>
//           </div>
//           <div className='hidden lg:block'>
//             <Button className='p-5 round'>Sign up</Button>
//           </div>
//           <div className='lg:hidden'>
//           <Menu />
//           </div>
//        </div>
//     </header>
//   )
// }

// export default Header

import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { X, Menu } from 'lucide-react'
import { useState } from 'react' // Import useState for menu state

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Menu state

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuClasses = `
  absolute top-[calc(100% + 8px)] left-0 right-0 bg-white shadow-lg mt-2 transition-all duration-300 ease-in-out transform ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}
`;
  return (
    <header className="shadow-sm w-100 sticky lg:top-0 lg:bg-[white] z-10">
      <div className={`flex justify-between container border-bottom p-8 gap-10`}>
        <div className="flex items-center gap-8">
          <Image src="/logo.png" alt="logo" width={200} height={200} />
          <div className="hidden lg:block">
            <Button variant="link" className="text-md">
              Home
            </Button>
            <Button variant="link" className="text-md">
              Product
            </Button>
          </div>
        </div>
        <div className="hidden lg:block">
          <Button className="p-5 round">Sign Up</Button>
        </div>
        <div className="lg:hidden sm:block transition-transform duration-300 ease-in-out delay-100">
          <button onClick={toggleMenu}>
          {isMenuOpen ? <X /> : <Menu size={24} />} 
          </button>
          {isMenuOpen && <div className={menuClasses }> 
            <div className="flex flex-col items-start gap-4 p-8"> 
              <Button variant="link" className="text-md font-bold">
                Home
              </Button>
              <Button variant="link" className="text-md font-bold">
                Product
              </Button>
              <Button className="p-5 round w-full text-[white]">Sign Up</Button>
              <Button variant="secondary" className=' p-5 round w-full border border-gray-300 font-bold'>Sign In</Button>
            </div>
            
          </div>}
        </div>
      </div> 
    </header>
  );
}

export default Header;

            {/* {isMenuOpen ? <Menu size={24} /> : <X />} Use button for better accessibility */}




