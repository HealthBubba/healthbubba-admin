import Checkbox from '@/Components/Form/Checkbox'
import Swal from '@/Components/Swal'
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline'
import { Link } from '@inertiajs/react'
import React from 'react'

export default function ({admin, setSelected}) {

    const destroy = () => {

    }

    return (
        <tr>
            <td>
                <Checkbox />
            </td>
            <td>{admin.no}</td>
            <td>{admin.full_name}</td>
            <td>{admin.role}</td>
            <td>{admin.is_active ? 'Active' : 'Suspended'}</td>
            <td>{admin.created_at}</td>
            <td>
                <div className="flex space-x-4">
                    <Link href={route('admins.edit', {admin: admin.id})} className="border-2 p-1 bg-white rounded-lg">
                        <PencilSquareIcon className='size-5' />                                        
                    </Link>
                    <Swal onConfirm={destroy} type="danger" className="border-2 p-1 bg-white rounded-lg">
                        <TrashIcon className='size-5' />           
                    </Swal>
                </div>
            </td>
        </tr>
    )
}
