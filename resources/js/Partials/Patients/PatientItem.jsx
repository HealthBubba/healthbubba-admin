import { Badge } from '@/Components/Badge'
import Currency from '@/Components/Currency'
import Swal from '@/Components/Swal'
import TableLink from '@/Components/Table/TableLink'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline'
import { Link, router } from '@inertiajs/react'
import React from 'react'

export default function PatientItem({patient}) {

    const suspend = (close) => {
        router.get(route('users.suspend', {user: patient.id}))
    }
    
    const destroy = (close) => {
        router.get(route('patients.destroy', {user: patient.id}))
    }

    return (
        <tr>
            <TableLink href={route('patients.show', {user: patient.id})}>{patient.full_name}</TableLink>
            <TableLink href={route('patients.show', {user: patient.id})}>{patient.email}</TableLink>
            {/* <td>Jane Smith</td> */}
            <TableLink href={route('patients.show', {user: patient.id})}>{patient.phone}</TableLink>
            <TableLink href={route('patients.show', {user: patient.id})}>
                <Badge className='capitalize' status={patient.status} >{patient.status}</Badge>
            </TableLink>
            <TableLink href={route('patients.show', {user: patient.id})}>{patient.appointments_count}</TableLink>
            <TableLink href={route('patients.show', {user: patient.id})}><Currency />{patient.transactions_sum.toLocaleString()}</TableLink>
            <TableLink href={route('patients.show', {user: patient.id})}>{patient.joined_date}</TableLink>
            <td>
                <Menu>
                    <MenuButton className="border-2 p-1 rounded-lg">
                        <EllipsisHorizontalIcon className='size-5' />                                        
                    </MenuButton>
                    <MenuItems transition anchor="bottom end" className="w-32 origin-top-right mt-1 rounded-xl border-[1.5px] divide-y bg-white transition duration-100 ease-out text-sm" >
                        <div className='p-1'>
                            <MenuItem >
                                <Link href={route('patients.show', {user: patient.id})} className="inline-flex w-full rounded-lg py-2 px-3 text-muted hover:bg-muted/10">View</Link>
                            </MenuItem>
                        </div>
                        <div className='p-1'>
                            <MenuItem >
                                <Swal 
                                    title={patient.is_active ? 'Suspend User' : 'Restore User'} 
                                    type={patient.is_active ? 'warning' : 'success'} 
                                    confirmLabel={patient.is_active ? 'Suspend User' : 'Restore User'}
                                    onConfirm={suspend} 
                                    caption={`Are you sure you want to ${patient.is_active ? 'suspend' : 'restore'} this user's account?`} 
                                    className="inline-flex w-full rounded-lg py-2 px-3 text-muted hover:bg-muted/10">{patient.is_active ? 'Suspend' : 'Restore'}</Swal>
                            </MenuItem>
                        </div>

                        <div className='p-1'>
                            <MenuItem>
                                <Swal title="Delete User Account" type={'danger'} onConfirm={destroy} caption="Are you sure you want to delete this user's account? This action cannot be undone." className="inline-flex w-full rounded-lg py-2 px-3 text-muted hover:bg-muted/10">Delete</Swal>
                            </MenuItem>
                        </div>
                    </MenuItems>
                </Menu>
            </td>
        </tr>
    )
}
