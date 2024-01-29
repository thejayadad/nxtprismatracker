import React from 'react'

import {getServerSession} from "next-auth";
import { authOptions } from '@/lib/auth';
import LoginWithGoogle from '../Buttons/LoginWithGoogle';
import LogoutButton from '../Buttons/LogoutButton';

const AuthLinks = async () => {
    const session = await getServerSession(authOptions);
    const email = session?.user.email
    const image = session?.user.image
    console.log("image " + image)
    return (
        <div className='flex items-center gap-2'>
   {!!session && (
            <div className='flex gap-2 items-center'>
            {/* <Avatar src={image} /> */}

              {/* <Link
              className='links'
              href={'/dashboard/${email}'}>
                Hello, {session?.user?.name}
              </Link> */}
              <LogoutButton />
            </div>
          )}
          {!session && (
            <>
            <LoginWithGoogle />
            </>
          )}        
    </div>
  )
}

export default AuthLinks