import Button from '@/Components/Button/Button';
import Checkbox from '@/Components/Form/Checkbox';
import Pagination from '@/Components/Pagination';
import useModal from '@/Hooks/useModal';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import AdminItem from '@/Partials/Admins/AdminItem';
import { EditModal } from '@/Partials/Admins/EditModal';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { AdjustmentsHorizontalIcon, ChevronDownIcon, EllipsisHorizontalIcon, MagnifyingGlassIcon, PencilIcon, PencilSquareIcon, TrashIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import { PlusIcon } from '@heroicons/react/24/solid';
import { Head, Link } from '@inertiajs/react';
import { useMemo, useState } from 'react';

export default function ({admins}) {

    const [selected, setSelected] = useState([])

    const toggleSelect = (value) => {
        if(selected.includes(value)) {
            setSelected(selected.filter(item => item != value))
        }else{
            setSelected([...selected, value])
        }
    }

    const selectAll = (checked) => {
        if(checked) {
            setSelected(admins.map(admin => admin.id))
        }else{
            setSelected([])
        }
    }

    const all = useMemo(() => {
        return admins.data.length && selected.length == admins.data.length;
    }, [selected, admins])

    const modal = useModal()

    return (
        <AuthenticatedLayout title="Admins">
            <Head title='Admins' />
            <div className="card p-0 rounded-xl">
                <div className="p-4 md:flex justify-between items-center">
                    <div className="inline-flex items-center space-x-2">
                        <UserCircleIcon className='size-7' />
                        <p className='font-semibold'>Users</p>
                    </div>
                    <div className="md:flex items-center space-y-3 md:space-y-0 md:space-x-2">
                        <div className="relative bg-[#F9FAFB] flex items-center border-[#E5E7EB] rounded-lg border-2">
                            <div className='px-2'>
                                <MagnifyingGlassIcon className='size-4 text-muted' />
                            </div>
                            <input type="text" placeholder='Search Users' className='pl-0 border-0 bg-transparent focus:ring-0 text-sm' />
                        </div>

                        <div>
                            <Button onClick={modal.open} className='btn-primary h-full'>Create User <PlusIcon className='size-5' /></Button>
                        </div>
                    </div>
                </div>

                <div className="border-t ml-4"></div>

                <div className="overflow-x-auto">
                    <table className='border-b'>
                        <thead>
                            <tr>
                                <th>
                                    <Checkbox onChange={e => selectAll(e.currentTarget.checked)} checked={all}  />
                                </th>
                                <th>S/N</th>
                                <th>Name</th>
                                <th >Role</th>
                                <th>Status</th>
                                <th>Date Added</th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            {admins.data.map(admin => <AdminItem admin={admin} toggle={toggleSelect} />)}
                        </tbody>
                    </table>
                </div>

                <Pagination items={admins} />
            </div>

            <EditModal {...modal} />
        </AuthenticatedLayout>
    )
}
