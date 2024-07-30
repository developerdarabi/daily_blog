import { BlogType } from '@/types'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
    blog: BlogType
}

export default function BlogCard(props: Props) {
    const { blog: { id, title, body } } = props
    return (
        <div className='border border-gray-300 rounded-xl p-2 flex flex-col gap-3'>
            <div className='relative w-full aspect-[16/7] rounded-xl overflow-hidden'>
                <Image src={'/statics/images/blog-header.jpg'} fill={true} alt={'blog'} />
            </div>
            <Link href={'blogs/' + id} className='text-md font-light '>{title.length > 20 ? title.substring(0, 20) + '....' : title}</Link>
            <span className='text-sm font-l\ opacity-50'>{body.substring(0, 50)}</span>
        </div>
    )
}
