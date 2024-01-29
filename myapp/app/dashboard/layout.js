import Navbar from '@/components/Navbar'
import React from 'react'

const layout = ({children}) => {
  return (
    <div
    className="
             flex
             min-h-screen
             w-full
             flex-col
             items-center
   "
    >
        <Navbar />
        <main className="flex flex-grow w-full justify-center items-center">
            {children}
        </main>
    </div>
  )
}

export default layout