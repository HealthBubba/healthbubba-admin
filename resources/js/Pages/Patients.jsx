import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { AdjustmentsHorizontalIcon, ChevronDownIcon, EllipsisHorizontalIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { Link } from '@inertiajs/react';
import { useMemo } from 'react';

export default function () {

    const practitioners = useMemo(() => {
        // return 
    }, [])

    return (
        <AuthenticatedLayout title="Patients">
            <div className="card p-0 rounded-xl">
                <div className="p-4 flex space-x-2">
                    <div>
                        <Menu>
                            <MenuButton className="border-2 p-1 h-full px-3 items-center space-x-1 text-sm rounded-lg inline-flex">
                                <AdjustmentsHorizontalIcon className='size-5' />         
                                <span>Filter</span>
                                <ChevronDownIcon className='size-3' />         
                            </MenuButton>
                            <MenuItems transition anchor="bottom start" className="w-32 origin-top-right mt-1 rounded-xl border-[1.5px] bg-white transition duration-100 ease-out text-sm" >
                                <div className='p-1'>
                                    <MenuItem >
                                        <button className="inline-flex w-full rounded-lg py-2 px-3 text-muted hover:bg-muted/10">Verified</button>
                                    </MenuItem>
                                </div>

                                <div className="border-t-[1.5px]"></div>

                                <div className='p-1'>
                                    <MenuItem>
                                        <button className="inline-flex w-full rounded-lg py-2 px-3 text-muted hover:bg-muted/10">Pending</button>
                                    </MenuItem>
                                </div>
                            </MenuItems>
                        </Menu>
                    </div>
                    <div>
                        <div className="relative bg-[#F9FAFB] flex items-center  border-[#E5E7EB] rounded-lg border-2">
                            <div className='px-2'>
                                <MagnifyingGlassIcon className='size-4 text-muted' />
                            </div>
                            <input type="text" placeholder='Search health practioner' className='pl-0 border-0 bg-transparent focus:ring-0 text-sm' />
                        </div>
                    </div>
                </div>

                <div className="border-t ml-4"></div>

                <div className="overflow-x-auto">
                    <table className='border-b'>
                        <thead>
                            <tr>
                                <th>S/N</th>
                                <th>Name</th>
                                <th >Patient ID</th>
                                <th>Email Address</th>
                                <th>Phone No.</th>
                                <th>Next Appointment</th>
                                <th>Status</th>
                                <th>Consultations</th>
                                <th>Total Payments</th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>TRX12345</td>
                                <td>Alexander Ogunyemi</td>
                                <td>Jane Smith</td>
                                <td>Payment</td>
                                <td>N 5,000,000</td>
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
