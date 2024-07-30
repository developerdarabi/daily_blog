'use client'

import { CreateBlogForm } from '@/ui';
import { FetchHandler } from '@/utils/api';
import { useRouter } from 'next/navigation';

export default function CreateBlog() {
    const router = useRouter()

    const submitHandler = async(title: string, body: string) => {
        if (!title || title.trim() === '' || !body || body.trim() === '') {
            alert('Field is empty')
            return
        }
        await FetchHandler({
            url: 'posts',
            options: {
                method: 'post',
                body: JSON.stringify({
                    title,
                    body,
                    userId: '00221',
                }), 
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            },
            onSuccess:()=>{
                router.back()
            },
            onError:()=>{
                alert('Error on post')
            }
        })

    }

    return (
        <CreateBlogForm submitHandler={submitHandler} />
    )
}
