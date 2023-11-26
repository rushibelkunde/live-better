"use client;"
import React from 'react'

import Link from 'next/link'

const Navbar = () => {
  return (
    <header className=' bg-black w-full flex items-center justify-between px-5 h-16 text-white font-semibold sm:text-base text-sm'>
        <Link className=' font-semibold' href={"/"}>LiveBetter</Link>
        <Link href={"/medicines"}>medicines</Link>
        <Link href={"/appointments"}>appointments</Link>
        <Link href={"/emergency"}>emergency</Link>
    </header>
  )
}

export default Navbar