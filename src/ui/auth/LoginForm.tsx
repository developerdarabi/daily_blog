'use client'

import { Button, Input } from '@/ui'

interface Props {
    submitHandler: (title: string, body: string) => void
}

export default function LoginForm(props: Props) {
    const { submitHandler } = props

    const onSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()
        const target = e.target as typeof e.target & {
            username: { value: string }
            password: { value: string }
        }
        submitHandler(target.username.value, target.password.value)
    }

    return (
        <form onSubmit={onSubmit} className='bg-white p-4 rounded-md w-2/5 flex flex-col gap-4'>
            <h1 className="text-xl font-semibold">Login </h1>
            <h3 className="w-1/2 text-xl text-center m-auto font-light">You can login an create your own blog</h3>
            <Input id={'username'} placeholder="Email / phone" />
            <Input id={'password'} placeholder="Password" />
            <Button type='submit'>Login</Button>
        </form>
    )
}
