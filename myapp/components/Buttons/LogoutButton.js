'use client';
import {signOut} from "next-auth/react";

export default function LogoutButton({
  className = 'flex items-center gap-2 p-2 px-4',
}) {
  return (
    <button
      className='links'
      onClick={() => signOut()}>
      <span>Logout</span>

    </button>
  );
}