'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

interface NavItemProps {
    href:string 
    children:React.ReactNode
}

const NavItem = ( { href, children}:NavItemProps) => {
    const pathName = usePathname()
    const isActive = href === '/' ? pathName === '/' : pathName.startsWith(href)
  return (
    <Link href={href} className={`px-3 py-2 rounded-xl hover:bg-blue-500 ${isActive && 'bg-blue-500' }`}>
      { children }
    </Link>
  )
}

export default NavItem
