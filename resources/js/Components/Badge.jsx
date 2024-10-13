import React from 'react'

export const Badge = ({children}) => {
    return (
        <span className='inline-flex rounded-r-full rounded-s-full font-semibold bg-green-100 text-green-600 py-[6px] text-xs px-4 border-2 border-green-300 leading-none'>{children}</span>
    )
}
