import React from 'react'

interface Props {
    children: React.ReactNode
}
export default function MainPageContainer(props: Props) {
    return (
        <main className={''}>{props.children}</main>
    )
}
