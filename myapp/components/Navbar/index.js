import React from 'react'
import AuthLinks from './AuthLinks'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="fixed w-full z-50 flex justify-between items-center py-2 px-4 h-16 border-b border-grey/10 rounded-lg">
    <div className="flex items-center">
    <Link href="/">
         <h1 className={("md:block text-xl md:text-3xl font-bold text-primary")}>
           LOGO
         </h1>
       </Link>

    </div>
    <div className="flex items-center gap-x-3">
       <AuthLinks />
   </div>        
   </div>
  )
}

export default Navbar