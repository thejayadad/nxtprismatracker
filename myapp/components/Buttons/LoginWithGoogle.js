'use client'
import {signIn} from "next-auth/react";

export default function LoginWithGoogle() {
  return (
    <button
      onClick={() => signIn('google')}
    >
      <span>Sign In with Google</span>
    </button>
  );
}