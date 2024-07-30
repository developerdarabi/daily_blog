import React from 'react'

export default function UiContainer({children}:{children:React.ReactNode}) {
  return (
    <div className='px-40'>
        {children}
    </div>
  )
}
