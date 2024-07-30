import { BlogType } from "@/types";
import Image from "next/image";
import UiContainer from "../Container";

interface Props {
    blog: BlogType
}

export default function BlogContainer(props: Props) {
    const { blog: { title, body } } = props

    return (
        <UiContainer>
            <div className='p-4 flex flex-col gap-4'>
                <div className='relative w-full aspect-[16/6] max-h-[600px] rounded-xl overflow-hidden'>
                    <Image src={'/statics/images/blog-header.jpg'} fill={true} alt={'blog'} />
                </div>
                <h1 className='text-xl font-semibold'>{title}</h1>
                <p className='text-sm '>{body}</p>
            </div>
        </UiContainer>
    )
}
