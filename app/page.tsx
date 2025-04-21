'use client'

import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  if (session) {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen bg-blue-300">
        <div className="bg-white p-8 rounded-xl text-center">
          <h1>Welcome, {session.user?.name}</h1>
          <img src={session.user?.image || ''} className="w-20 h-20 rounded-full mt-4 mx-auto" />
          <p className="mt-3">{session.user?.email}</p>
          <button 
            onClick={() => signOut()} 
            className="mt-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
          >
            Sign out
          </button>
        </div>
      </main>
    )
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-blue-300">
      <div className="bg-white p-8 rounded-xl text-center">
        <h1>You are not signed in</h1>
        <button 
          onClick={() => signIn('github')} 
          className="mt-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
        >
          Sign in with GitHub
        </button>
      </div>
    </main>
  )
}
