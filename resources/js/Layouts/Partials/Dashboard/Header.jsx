import { BellIcon } from '@/Icons/BellIcon'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import React from 'react'

export default function ({title}) {
    return (
        <header className="w-full bg-white p-5 sticky z-50 top-0 py-2 flex border-b items-center justify-between">
            <div >
                <h3 className="font-semibold text-lg">{title}</h3>
            </div>

            <div className="flex space-x-2 items-center">
                <div>
                    <span>
                        <BellIcon className="size-6 text-[#71717A]" />
                    </span>
                </div>
                <div>
                    <button className="card border shadow-sm p-1 px-2 inline-flex items-center space-x-1">
                        <span className="aspect-square rounded-full size-6 border">

                        </span>
                        <p className='text-sm font-medium'>John Doe</p>
                        <ChevronDownIcon className="size-3 ms-3" />
                    </button>
                </div>
            </div>
        </header>
    )
}
