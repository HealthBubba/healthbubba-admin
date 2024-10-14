import React from 'react'

export const Badge = ({children, status = 'successfull', className, ...props}) => {

    const color = {
        success: '#047857',
        warning: '#B45309',
        danger: '#EE3731',
        successfull
    }

    return (
        <span className={`inline-flex rounded-r-full rounded-s-full font-medium py-[3px] bg-green-50 text-green-600  text-[13px] px-5 border-2 border-green-200 ${className}`} {...props} >{children}</span>
    )
}
