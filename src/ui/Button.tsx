import React from 'react'

interface Props {
    type?: 'submit' | 'button' | 'reset'
    children: React.ReactNode
    className?:string
}

export default function Button(props: Props) {
    const { type='button', children,className='', ...rest } = props
    return (
        <button
            {...rest}
            type={type}
            className={`${className} bg-[var(--bg-color)] rounded-md p-3 text-white text-md font-medium`}
        >
            {children}
        </button>
    )
}
