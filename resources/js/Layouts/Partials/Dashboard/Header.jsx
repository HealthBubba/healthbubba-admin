import { BellIcon } from '@/Icons/BellIcon'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import React from 'react'

export default function ({title}) {
    return (
        <header className="w-full bg-white p-5 py-2 flex items-center justify-between">
            <div >
                <h3 className="font-semibold text-lg">{title}</h3>
            </div>

            <div className="flex space-x-2 items-center">
                <div>
                    <span>
                        <BellIcon className="size-7 text-[#71717A]" />
                    </span>
                </div>
                <div>
                    <button className="border-2 border-[#9F9F9F40] p-2 py-[6px] rounded-xl items-center inline-flex space-x-2">
                        <span className="aspect-square rounded-full size-8 border">

                        </span>
                        <p>John Doe</p>
                        <ChevronDownIcon className="size-4" />
                    </button>
                </div>
            </div>
        </header>
    )
}
