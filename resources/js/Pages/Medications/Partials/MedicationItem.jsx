import Currency from '@/Components/Currency'
import Swal from '@/Components/Swal'
import useModal from '@/Hooks/useModal'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { EllipsisHorizontalIcon } from '@heroicons/react/24/solid'
import { Link, router } from '@inertiajs/react'
import React from 'react'
import EditMedication from './EditMedication'

export default function ({medication}) {

    const destroy = () => {
        router.get(route('medications.destroy', {
            medication: medication.id
        }))
    }

    const modal = useModal()

    return (
        <tr>
            <td>{medication.name}</td>
            <td>{medication.category.name}</td>
            <td><Currency /> {medication.price}</td>
            <td>
                <Menu>
                    <MenuButton className="btn border-2 p-1 bg-white rounded-lg">
                        <EllipsisHorizontalIcon className='size-5' />                                        
                    </MenuButton>
                    <MenuItems transition anchor="bottom end" className="w-32 origin-top-right mt-1 rounded-xl border-[1.5px] bg-white transition duration-100 ease-out text-sm" >
                        <div className='p-1'>
                            <MenuItem>
                                <span role='button' onClick={modal.open} className='inline-flex w-full rounded-lg py-2 px-3 text-muted cursor-pointer hover:bg-muted/10' >Edit</span>
                            </MenuItem>
                        </div>

                        <div className="border-t-[1.5px]"></div>
                        
                        <div className='p-1'>
                            <MenuItem>
                                <Link className='inline-flex w-full rounded-lg py-2 px-3 text-muted hover:bg-muted/10' href={route('medications.show', {medication: medication.id})} >View</Link>
                            </MenuItem>
                        </div>

                        <div className="border-t-[1.5px]"></div>

                        <div className='p-1'>
                            <MenuItem>
                                <Swal title="Delete User Account" type={'danger'} onConfirm={destroy} caption="Are you sure you want to delete this medication? This action cannot be undone." className="inline-flex w-full rounded-lg py-2 px-3 text-muted hover:bg-muted/10">Delete</Swal>
                            </MenuItem>
                        </div>
                    </MenuItems>
                </Menu>

                <EditMedication medication={medication} {...modal} />
            </td>
        </tr>
    )
}
