import { Badge } from '@/Components/Badge'
import Disclose from '@/Components/Disclose'
import Swal from '@/Components/Swal'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { CheckIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/solid'
import { router } from '@inertiajs/react'
import React from 'react'
import { toast } from 'react-toastify'

export const PractitionerItem = ({user}) => {

    const suspend = (close) => {
        router.get(route('users.suspend', {user: user.id}))
    }

    const approve = () => {
        router.get(route('practitioners.approve', {user: user.id}))
    }
    
    const disapprove = () => {
        router.get(route('practitioners.disapprove', {user: user.id}))

    }
    
    const destroy = (close) => {
        router.get(route('practitioners.destroy', {user: user.id}))
    }

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
                <Disclose show={user.is_doctor_verified} >
                    <Menu>
                        <MenuButton className="btn border-2 p-1 bg-white rounded-lg">
                            <EllipsisHorizontalIcon className='size-5' />                                        
                        </MenuButton>
                        <MenuItems transition anchor="bottom end" className="w-32 origin-top-right mt-1 rounded-xl border-[1.5px] bg-white transition duration-100 ease-out text-sm" >
                            <div className='p-1'>
                                <MenuItem >
                                    <Swal 
                                        title={user.is_active ? 'Suspend User' : 'Restore User'} 
                                        type={user.is_active ? 'warning' : 'success'} 
                                        confirmLabel={user.is_active ? 'Suspend User' : 'Restore User'}
                                        onConfirm={suspend} 
                                        caption={`Are you sure you want to ${user.is_active ? 'suspend' : 'restore'} this user's account?`} 
                                        className="inline-flex w-full rounded-lg py-2 px-3 text-muted hover:bg-muted/10">{user.is_active ? 'Suspend' : 'Restore'}</Swal>
                                </MenuItem>
                            </div>

                            <div className="border-t-[1.5px]"></div>

                            <div className='p-1'>
                                <MenuItem>
                                    <Swal title="Delete User Account" type={'danger'} onConfirm={destroy} caption="Are you sure you want to delete this user's account? This action cannot be undone." className="inline-flex w-full rounded-lg py-2 px-3 text-muted hover:bg-muted/10">Delete</Swal>
                                </MenuItem>
                            </div>
                        </MenuItems>
                    </Menu>
                </Disclose>
                
                <Disclose show={!user.is_doctor_verified} >
                    <Swal title="Disapprove User Account" type={'danger'} onConfirm={destroy} caption="Are you sure you want to delete this user's account? This action cannot be undone." className="inline-flex w-full rounded-full p-3 text-primary hover:bg-success/10">
                        <CheckIcon className='size-6' />
                    </Swal>
                    <Swal title="Approve User Account" type={'danger'} onConfirm={destroy} caption="Are you sure you want to delete this user's account? This action cannot be undone." className="inline-flex w-full rounded-lg p-3 text-muted hover:bg-red/10">
                        <CheckIcon className='size-6' />
                    </Swal>
                </Disclose>
            </td>
        </tr>
    )
}
