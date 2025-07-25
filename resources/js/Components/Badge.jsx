import React, { useMemo } from 'react'

const states = {
    success: ['successfull', 'verified', 'confirmed', 'active', 'paid'],
    warning: ['pending', 'suspended', 'PENDING'],
    danger: ['failed',],
    info: ['unpaid', 'unverified']
}

export const Badge = ({children, status = '', className, ...props}) => {

    const color = useMemo(() => {
        const success = 'bg-green-50 border-green-200 text-green-500';
        const warning = 'bg-[#FEF4C7] border-[#FDE68A] text-[#B45309]';
        const danger = 'bg-red-50 border-red-200 text-red-500';
        const info = 'bg-gray-50 border-gray-200 text-gray-500';

        if(states.success.includes(status)) return success
        if(states.warning.includes(status)) return warning
        if(states.danger.includes(status)) return danger
        if(states.info.includes(status)) return info
        return info
    })

    return (
        <span className={`inline-flex uppercase items-center gap-x-1.5 py-1.5 leading-none px-3 rounded-lg text-[12px] font-semibold border ${color} ${className}`} {...props}>{children}</span>
    )
}
