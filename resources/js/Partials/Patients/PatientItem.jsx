import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline'
import React from 'react'

export default function PatientItem({patient}) {
    return (
        <tr>
            <td>{patient.no}</td>
            <td>{patient.full_name}</td>
            <td>{patient.email}</td>
            {/* <td>Jane Smith</td> */}
            <td></td>
            <td>{patient?.next_appointment_date?.date}</td>
            <td>
                <span className='rounded-r-full rounded-s-full font-semibold bg-green-100 text-green-600 py-[6px] text-xs px-4 border-2 border-green-300 leading-none'>Successful</span>
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
                                <button className="inline-flex w-full rounded-lg py-2 px-3 text-muted hover:bg-muted/10">Delete Patient</button>
                            </MenuItem>
                        </div>
                    </MenuItems>
                </Menu>
            </td>
        </tr>
    )
}
