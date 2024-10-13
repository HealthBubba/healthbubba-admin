import Button from '@/Components/Button/Button';
import Checkbox from '@/Components/Checkbox';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { AdjustmentsHorizontalIcon, ChevronDownIcon, EllipsisHorizontalIcon, MagnifyingGlassIcon, PencilIcon, PencilSquareIcon, TrashIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import { PlusIcon } from '@heroicons/react/24/solid';
import { Link } from '@inertiajs/react';
import { useMemo } from 'react';

export default function () {

    const practitioners = useMemo(() => {
        // return 
    }, [])

    return (
        <AuthenticatedLayout title="Health Practitioners">
            <div className="card p-0 rounded-xl">
                <div className="p-4 flex justify-between items-center">
                    <div className="inline-flex items-center space-x-2">
                        <UserCircleIcon className='size-7' />
                        <p className='font-semibold'>Users</p>
                    </div>
                    <div className=" flex items-center  space-x-2">
                        <div className="relative bg-[#F9FAFB] flex items-center border-[#E5E7EB] rounded-lg border-2">
                            <div className='px-2'>
                                <MagnifyingGlassIcon className='size-4 text-muted' />
                            </div>
                            <input type="text" placeholder='Search Users' className='pl-0 border-0 bg-transparent focus:ring-0 text-sm' />
                        </div>

                        <div>
                            <Button className='btn-primary py-[5px] h-full'>Create User <PlusIcon className='size-5' /></Button>
                        </div>
                    </div>
                </div>

                <div className="border-t ml-4"></div>

                <div className="overflow-x-auto">
                    <table className='border-b'>
                        <thead>
                            <tr>
                                <th>
                                    <Checkbox />
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
                            <tr>
                                <td>
                                    <Checkbox />
                                </td>
                                <td>1</td>
                                <td>Alexander Ogunyemi</td>
                                <td>TRX12345</td>
                                <td>APPT56789</td>
                                <td>APPT56789</td>
                                <td>
                                    <div className="flex space-x-4">
                                        <button className="border-2 p-1 bg-white rounded-lg">
                                            <PencilSquareIcon className='size-5' />                                        
                                        </button>
                                        <button className="border-2 p-1 bg-white rounded-lg">
                                            <TrashIcon className='size-5' />                                        
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="p-5 flex text-muted justify-between text-sm">
                    <div>
                        <p className=''>1 - 14 of 200 results</p>
                    </div>
                    <div className='flex space-x-5 '>
                        <div>
                            <p>1 of 16 pages</p>
                        </div>
                        <div className='flex space-x-3'>
                            <Link href='#' className='text-muted/75'>Prev</Link>
                            <Link href='#'>Next</Link>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}
