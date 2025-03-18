import Swal from '@/Components/Swal'
import useModal from '@/Hooks/useModal'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { EllipsisHorizontalIcon } from '@heroicons/react/24/solid'
import { router } from '@inertiajs/react'
import React from 'react'
import EditSpecialtyModal from './EditSpecialtyModal'

export default function ({specialty}) {
    const destroy = () => {
        router.get(route('specialties.destroy', {specialty: specialty.specialty_id}))
    }

    const modal = useModal()

    return (
        <tr>
            <td>{specialty.specialty_name}</td>
            <td>{specialty.practitioners_count}</td>
            <td>
                <Menu>
                    <MenuButton className="btn border-2 p-1 bg-white rounded-lg">
                        <EllipsisHorizontalIcon className='size-5' />                                        
                    </MenuButton>
                    <MenuItems transition anchor="bottom end" className="w-32 origin-top-right mt-1 rounded-xl border-[1.5px] bg-white transition duration-100 ease-out text-sm" >
                        <div className='p-1'>
                            <MenuItem>
                                <span onClick={modal.open} className='inline-flex w-full rounded-lg py-2 px-3 text-muted hover:bg-muted/10'role='button' >Edit</span>
                            </MenuItem>
                        </div>

                        <div className="border-t-[1.5px]"></div>

                        <div className='p-1'>
                            <MenuItem>
                                <Swal title="Delete Specialty" type={'danger'} onConfirm={destroy} caption="Are you sure you want to delete this specialty? This action cannot be undone." className="inline-flex w-full rounded-lg py-2 px-3 text-muted hover:bg-muted/10">Delete</Swal>
                            </MenuItem>
                        </div>
                    </MenuItems>
                </Menu>

                <EditSpecialtyModal modal={modal} specialty={specialty} />
            </td>
        </tr>
    )
}
