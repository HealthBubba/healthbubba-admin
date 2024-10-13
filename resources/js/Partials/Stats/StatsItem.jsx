import { ArrowLongRightIcon } from '@heroicons/react/24/solid'
import React from 'react'

export const Direction = {
    up: '+',
    down: '-',
    normal: ''
}

export const StatsItem = ({title, amount, direction, percentage, isPrice = false}) => {
    return (
        <div className='card'>
            <div className='space-y-3'>
                <p className='uppercase font-medium text-muted text-sm'>{title}</p>
                <div className="flex justify-between items-end">
                    <p className='font-semibold text-xl'>{isPrice ? '₦' : ''}{amount.toLocaleString()}</p>
                    <p className='flex items-center font-medium text-sm text-green-500'>{direction}{percentage}%</p>
                </div>
            </div>
        </div>
    )
}
