'use client'

import { Button, Input, TextArea } from '@/ui'

interface Props {
    submitHandler: (title: string, body: string) => void
}

export default function CreateBlogForm(props: Props) {
    const { submitHandler } = props

    const onSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()
        const target = e.target as typeof e.target & {
            title: { value: string }
            body: { value: string }
        }
        submitHandler(target.title.value, target.body.value)
    }
    return (
        <form onSubmit={onSubmit} className='flex flex-col gap-4 p-4'>
            <h1 className='text-xl font-bold'>Create blog</h1>
            <Input id={'title'} placeholder='Enter title ...' />
            <TextArea
                id={'body'}
                placeholder='Enter text...'
            />
            <Button type='submit'>Create</Button>
        </form>
    )
}
