import { Badge } from '@/Components/Badge'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { EllipsisHorizontalIcon } from '@heroicons/react/24/solid'
import React from 'react'

export const PractitionerItem = ({user}) => {
    return (
        <tr>
            <td>{user.no.toLocaleString()}</td>
            <td>{user.full_name}</td>
            <td>{user.email}</td>
            <td>Jane Smith</td>
            <td>{user.licence_number}</td>
            <td></td>
            <td>
                <Badge className='capitalize' status={user.status} >{user.status}</Badge>
            </td>
            <td>Bank Transfer</td>
            <td>APPT56789</td>
            <td>
                <Menu>
                    <MenuButton className="border-2 p-1 rounded-lg">
                        <EllipsisHorizontalIcon className='size-5' />                                        
                    </MenuButton>
                    <MenuItems transition anchor="bottom end" className="w-32 origin-top-right mt-1 rounded-xl border-[1.5px] bg-white transition duration-100 ease-out text-sm" >
                        <div className='p-1'>
                            <MenuItem >
                                <button className="inline-flex w-full rounded-lg py-2 px-3 text-muted hover:bg-muted/10">Suspend</button>
                            </MenuItem>
                        </div>

                        <div className="border-t-[1.5px]"></div>

                        <div className='p-1'>
                            <MenuItem>
                                <button className="inline-flex w-full rounded-lg py-2 px-3 text-muted hover:bg-muted/10">Delete</button>
                            </MenuItem>
                        </div>
                    </MenuItems>
                </Menu>
            </td>
        </tr>
    )
}
