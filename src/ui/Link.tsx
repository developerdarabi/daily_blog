'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface Props {
    href: string,
    children: React.ReactNode,
    className?: string
}

export default function CustomLink(props: Props) {
    const { href, children, className } = props

    const pathname = usePathname()

    return (
        <Link
            href={href}
            className={`transition-all ease-in-out delay-78 duration-78 hover:text-[var(--bg-color)] ${className} ${pathname === href ? 'text-[var(--bg-color)]' : 'text-black'}`}>
            {children}
        </Link>
    )
}
