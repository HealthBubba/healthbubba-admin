import { Avatar } from '@/Components/Avatar'
import { BellIcon } from '@/Icons/BellIcon'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { Bars2Icon, ChevronDownIcon } from '@heroicons/react/24/solid'
import { Link, router, usePage } from '@inertiajs/react'
import React from 'react'

export default function ({title}) {

    const {props} = usePage()

    return (
        <header className="w-full bg-white md:p-5 px-2 sticky z-50 top-0 py-2 flex border-b items-center justify-between">
            <div className='hidden md:block' >
                <h3 className="font-semibold">{title}</h3>
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
                    <Menu>
                        <MenuButton className="border-2 p-1 h-full px-3 items-center space-x-1 text-sm rounded-lg inline-flex">
                            <span className="aspect-square rounded-full">
                                <Avatar className="size-6" />
                            </span>
                            <p className='text-sm font-medium text-gray-700'>{props?.auth?.user.data.firstname}</p>
                            <ChevronDownIcon className="size-3 ms-3" />        
                        </MenuButton>
                        <MenuItems transition anchor="bottom start" className="w-32 origin-top-right mt-1 rounded-xl border-[1.5px] bg-white transition duration-100 ease-out text-sm z-50" >
                            <div className='p-1'>
                                <MenuItem >
                                    <Link href={route('logout')} className="inline-flex w-full rounded-lg py-2 px-3 text-muted hover:bg-muted/10">Logout</Link>
                                </MenuItem>
                            </div>
                        </MenuItems>
                    </Menu>
                </div>

                <button className='card inline-flex md:hidden p-1 items-center'>
                    <Bars2Icon className='size-5 6' />
                </button>
            </div>
        </header>
    )
}
