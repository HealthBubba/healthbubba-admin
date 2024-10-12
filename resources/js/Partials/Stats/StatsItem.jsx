import { ArrowLongRightIcon } from '@heroicons/react/24/solid'
import React from 'react'

export const StatsItem = () => {
    return (
        <div className='card'>
            <div className='space-y-3'>
                <p className='uppercase font-medium text-muted text-sm'>Total Active Patients</p>
                <div className="flex justify-between items-end">
                    <p className='font-semibold text-xl'>#2,38,485</p>
                    <p className='flex items-center font-medium text-sm text-green-500'>+ 36%</p>
                </div>
            </div>
        </div>
    )
}
