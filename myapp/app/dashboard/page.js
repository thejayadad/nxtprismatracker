import getServerUser from '@/lib/getServerUser'
import React, { Suspense } from 'react'

const DashboardPage = async () => {
  return (
    <>
    <Suspense fallback={<WelcomeFallback />}>
        <WelcomeMessage />
    </Suspense>
    </>
  )
}

async function WelcomeMessage(){
    const user = await getServerUser()
    const email = user.email
    if(!user){
        return <h2 className='text-center'>Error Accessing</h2>
    }
    return (
        <div className="flex w-full mb-12">
            <h1 className='text-4xl font-bold'>
                Welcome Back, <br /> {email}
            </h1>
        </div>
    )
}
function WelcomeFallback(){
    return (
        <div className="flex w-full mb-12">
              <h1 className="text-4xl font-bold">
                Loading....
              </h1>            
        </div>
    )
}

export default DashboardPage