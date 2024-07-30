import React from 'react'
import UiContainer from '../Container'

interface Props {
    children: React.ReactNode
}

export default function BlogsContainer(props: Props) {
    const { children } = props
    return (
        <UiContainer>
            <div className='grid grid-cols-4 gap-4 p-4'>{children}</div>
        </UiContainer>
    )
}
