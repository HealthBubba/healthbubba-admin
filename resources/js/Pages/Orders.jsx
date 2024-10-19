import { Badge } from '@/Components/Badge';
import SettingIcon from '@/Icons/SettingIcon';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Direction, StatsItem } from '@/Partials/Stats/StatsItem';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon, EllipsisHorizontalIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { Link } from '@inertiajs/react';
import { useMemo } from 'react';

export default function () {

    const practitioners = useMemo(() => {
        // return 
    }, [])

    return (
        <AuthenticatedLayout title="Manage Orders">
            <div className="space-y-2">
                <div className="grid grid-cols-4 gap-3 mb-5">
                    <StatsItem title={'Total Orders'} amount={2000} direction={Direction.up} percentage={36} />
                    <StatsItem title={'Completed Orders'} amount={2000} direction={Direction.up} percentage={36} />
                    <StatsItem title={'Cancelled Orders'} amount={2000} direction={Direction.up} percentage={36} />
                    <StatsItem title={'Revenue Generated'} amount={2000} direction={Direction.up} percentage={36} />
                </div>

                <div className="card p-0 rounded-xl">
                    <div className="p-4 flex justify-between">
                        <div className="flex space-x-2">
                            <div>
                                <Menu>
                                    <MenuButton className="border-2 p-1 h-full px-3 items-center space-x-1 text-sm rounded-lg inline-flex">
                                        <SettingIcon className='size-5' />         
                                        <span className='font-medium'>All Orders</span>
                                        <ChevronDownIcon className='size-3' />         
                                    </MenuButton>
                                    <MenuItems transition anchor="bottom start" className="min-w-32 origin-top-right mt-1 rounded-xl border-[1.5px] bg-white transition duration-100 ease-out text-sm" >
                                        <div className='p-1'>
                                            <MenuItem >
                                                <button className="inline-flex w-full rounded-lg py-2 px-3 text-muted hover:bg-muted/10">All Orders</button>
                                            </MenuItem>
                                        </div>

                                        <div className="border-t-[1.5px]"></div>

                                        <div className='p-1'>
                                            <MenuItem>
                                                <button className="inline-flex w-full rounded-lg py-2 px-3 text-muted hover:bg-muted/10">Ongoing Orders</button>
                                            </MenuItem>
                                        </div>

                                        <div className="border-t-[1.5px]"></div>

                                        <div className='p-1'>
                                            <MenuItem>
                                                <button className="inline-flex w-full rounded-lg py-2 px-3 text-muted hover:bg-muted/10">Completed Orders</button>
                                            </MenuItem>
                                        </div>
                                    </MenuItems>
                                </Menu>
                            </div>
                            <div>
                                <div className="relative bg-[#F9FAFB] flex items-center border-[#E5E7EB] rounded-lg border-2">
                                    <div className='px-2'>
                                        <MagnifyingGlassIcon className='size-4 text-muted' />
                                    </div>
                                    <input type="text" placeholder='Search Orders' className='pl-0 border-0 bg-transparent focus:ring-0 text-sm' />
                                </div>
                            </div>
                        </div>

                        <div>
                            <Menu>
                                <MenuButton className="border-2 p-1 h-full px-3 items-center space-x-1 text-sm rounded-lg inline-flex">
                                    <SettingIcon className='size-5' />         
                                    <span className='font-medium'>All Type</span>
                                    <ChevronDownIcon className='size-3' />         
                                </MenuButton>
                                <MenuItems transition anchor="bottom start" className="min-w-32 origin-top-right mt-1 rounded-xl border-[1.5px] bg-white transition duration-100 ease-out text-sm" >
                                    <div className='p-1'>
                                        <MenuItem >
                                            <button className="inline-flex w-full rounded-lg py-2 px-3 text-muted hover:bg-muted/10">Tests</button>
                                        </MenuItem>
                                    </div>

                                    <div className="border-t-[1.5px]"></div>

                                    <div className='p-1'>
                                        <MenuItem>
                                            <button className="inline-flex w-full rounded-lg py-2 px-3 text-muted hover:bg-muted/10">Medications</button>
                                        </MenuItem>
                                    </div>
                                </MenuItems>
                            </Menu>
                        </div>
                    </div>

                    <div className="border-t ml-4"></div>

                    <div className="overflow-x-auto">
                        <table className='border-b'>
                            <thead>
                                <tr>
                                    <th>S/N</th>
                                    <th>Patient name</th>
                                    <th >Practitioner Name</th>
                                    <th>Type</th>
                                    <th>Status</th>
                                    <th>Order Date</th>
                                    <th>Payment Status</th>
                                    <th>Amount</th>
                                    <th>Next Step</th>
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
                                        <Badge>Successful</Badge>
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
            </div>
        </AuthenticatedLayout>
    )
}
