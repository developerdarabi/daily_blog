import { CustomLink, Logo } from 'UI/index'
import Link from 'next/link'

export default function DesktopHeader() {
    return (
        <div className='flex items-center justify-between sticky top-0 left-0 shadow-md w-full z-[1000] bg-white p-4 text-sm font-medium'>
            <div className='flex items-center gap-8'>
                <Logo />
                <div className='flex items-center gap-8 text-md font-medium'>
                    <CustomLink href={'/'} >Home</CustomLink>
                    <CustomLink href={'/blogs'} >Blogs</CustomLink>
                    <CustomLink href={'/services'} >Services</CustomLink>
                    <CustomLink href={'/about-us'} >About us</CustomLink>
                </div>
            </div>
            <div className='flex gap-2 '>
                <Link href={'contact'} className='border border-gray-500 rounded-full py-2 px-4'>Contactus</Link>
                <Link href={'/dashboard'} className={`border bg-[var(--bg-color)] rounded-full py-2 px-4 text-white`}>Try for free</Link>
            </div>
        </div>
    )
}
