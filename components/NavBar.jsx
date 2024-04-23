'use client'

import { useSession, signIn, signOut } from "next-auth/react"
import Link from "next/link"

export default function NavBar() {
    const { data: session } = useSession()
    
    return (
        <nav className="mt-6">
            <h1 className="text-center text-4xl">Clip City</h1>
            <ul className="flex justify-center gap-24 mt-6">
                <li><Link href='/'><button className="px-4 py-2 rounded-md border border-black bg-white text-neutarl-700 text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">Home</button></Link></li>
                <li><Link href='/create'><button className="px-4 py-2 rounded-md border border-black bg-white text-neutarl-700 text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">Create</button></Link></li>
                {session ?
                    <li onClick={() => signOut()} className="cursor-pointer"><button className="px-4 py-2 rounded-md border border-black bg-white text-neutarl-700 text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
                    Logout
                  </button></li>
                    :
                    <li onClick={() => signIn()} className="cursor-pointer"><button className="px-4 py-2 rounded-md border border-black bg-white text-neutarl-700 text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
                    Login
                  </button></li>
                }
            </ul>
        </nav>
    )
}