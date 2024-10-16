import React, { useMemo } from 'react'

const states = {
    success: ['successfull', 'verified', 'paid'],
    warning: ['pending', 'suspended'],
    danger: ['failed',],
    info: ['unpaid']
}

export const Badge = ({children, status = '', className, ...props}) => {

    const color = useMemo(() => {
        const success = 'bg-green-50 border-green-200 text-green-500';
        const warning = 'bg-orange-50 border-orange-200 text-orange-500';
        const danger = 'bg-red-50 border-red-200 text-red-500';
        const info = 'bg-gray-50 border-gray-200 text-gray-500';

        if(states.success.includes(status)) return success
        if(states.warning.includes(status)) return warning
        if(states.danger.includes(status)) return danger
        if(states.info.includes(status)) return info
        return info
    })

    return (
        <span className={`inline-flex capitalize font-semibold items-center gap-x-1.5 py-1 px-4 rounded-full text-xs font-medium bg-gray-100 border-2 ${color} ${className}`} {...props}>{children}</span>

        // <span className={`inline-flex rounded-r-full rounded-s-full font-medium py-[3px] bg-green-50 text-green-600  text-[13px] px-5 border-2 border-green-200 ${className}`} {...props} >{children}</span>
    )
}
