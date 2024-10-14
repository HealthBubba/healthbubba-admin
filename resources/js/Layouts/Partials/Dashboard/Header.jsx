import { BellIcon } from '@/Icons/BellIcon'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { Bars2Icon, ChevronDownIcon } from '@heroicons/react/24/solid'
import React from 'react'

export default function ({title}) {
    return (
        <header className="w-full bg-white md:p-5 px-2 sticky z-50 top-0 py-2 flex border-b items-center justify-between">
            <div className='hidden md:block' >
                <h3 className="font-semibold md:text-lg">{title}</h3>
            </div>
            <div className='block md:hidden' >
                <img src="/assets/imgs/logo-icon.svg" alt="" />
            </div>

            <div className="flex space-x-2 items-center">
                <div className='md:flex hidden'>
                    <span>
                        <BellIcon className="size-6 text-[#71717A]" />
                    </span>
                </div>
                <div className='md:flex hidden space-x-2'>
                    <button className="card border shadow-sm p-1 px-2 inline-flex items-center space-x-1">
                        <span className="aspect-square rounded-full size-6 border">

                        </span>
                        <p className='text-sm font-medium'>John Doe</p>
                        <ChevronDownIcon className="size-3 ms-3" />
                    </button>

                </div>

                <button className='card inline-flex md:hidden p-1 items-center'>
                    <Bars2Icon className='size-5 6' />
                </button>
            </div>
        </header>
    )
}
