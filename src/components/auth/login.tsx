'use client'

import {LoginForm} from "@/ui"
import { FetchHandler } from "@/utils/api"
import { useRouter } from "next/navigation"

export default function login() {
    const router = useRouter()

    const submitHandler = async (username: string, password: string) => {
        await FetchHandler({
            url:'api/user/login',
            options:{
                method:'post',
                body: JSON.stringify({
                    username,
                    password,
                }), 
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            },
            isLocal:true,
            onSuccess:()=>{
                router.push('/dashboard')
            }
        })
    }
    return (
        <div className='flex items-center justify-center p-12'>
            <LoginForm submitHandler={submitHandler} />
        </div >
    )
}
