import SettingIcon from '@/Icons/SettingIcon'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import React, { useEffect, useState } from 'react'

export default function Dropdown({value, options, icon = <SettingIcon className='size-5' />, action, placeholder}) {

    return (
        <Menu>
            <MenuButton className="border-2 font-medium px-3 h-full items-center space-x-1 text-sm rounded-lg inline-flex">
                {icon ?? ''}      
                <span className='capitalize' >{value ? value : placeholder }</span>
                <ChevronDownIcon className='size-3' />         
            </MenuButton>
            <MenuItems transition anchor="bottom start" className="min-w-32 divide-y origin-top-right mt-1 rounded-xl border-[1.5px] bg-white transition duration-100 ease-out text-sm" >
                {
                    options.map((option, i) => (
                        <div key={option + i} className='p-1'>
                            <MenuItem onClick={() => action(option.value)}  >
                                <button   className="inline-flex w-full rounded-lg py-2 px-3 text-muted hover:bg-muted/10">{option.label}</button>
                            </MenuItem>
                        </div>
                    ))
                }
            </MenuItems>
        </Menu>
    )
}
