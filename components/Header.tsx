import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const Header = ({children} : HeaderProps) => {
  return (
    <div className="header">
         <Link href='/' className="md:flex-1">
        <Image 
          src="/assets/images/DIGITALDOC (3).png"
          alt="Logo with name"
          width={120}
          height={28}
          className="hidden md:block"
        />
        <Image 
          src="/assets/icons/logo-icon.svg"
          alt="Logo"
          width={32}
          height={32}
          className="mr-2 md:hidden"
        />
      </Link>
      {children}
    </div>
  )
}

export default Header
