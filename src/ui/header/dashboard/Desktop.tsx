import { Logo } from '@/ui'

export default function DashboardDesktopHeader() {
    return (
        <div className='flex items-center text-white justify-between sticky top-0 left-0 shadow-md w-full z-[1000] bg-gray-600 p-4 text-sm font-medium'>
            <div className='flex items-center gap-8'>
                <Logo />
                <div className='flex items-center gap-8 text-md font-medium'>
                </div>
            </div>
            <div className='flex gap-2 '>
                <h1 className='text-md font-bold'>My dashboard</h1>
            </div>
        </div>
    )
}
