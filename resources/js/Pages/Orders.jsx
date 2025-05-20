import { Badge } from '@/Components/Badge';
import SettingIcon from '@/Icons/SettingIcon';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Direction, StatsItem } from '@/Partials/Stats/StatsItem';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon, EllipsisHorizontalIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { Head, Link } from '@inertiajs/react';
import { useMemo } from 'react';
import OrderItem from '../Partials/Orders/OrderItem';
import Pagination from '@/Components/Pagination';
import SingleOrder from '@/Partials/Orders/SingleOrder';

export default function ({orders, total, completed, pending, revenue}) {

    return (
        <AuthenticatedLayout title="Manage Orders">
            <Head title="Manage Orders" />
            <div className="space-y-2">
                <div className="grid md:grid-cols-4 grid-cols-2 gap-3 mb-5">
                    <StatsItem title={'Total Orders'} amount={total} direction={Direction.up} percentage={36} />
                    <StatsItem title={'Completed Orders'} amount={completed} direction={Direction.up} percentage={36} />
                    <StatsItem title={'Cancelled Orders'} amount={pending} direction={Direction.up} percentage={36} />
                    <StatsItem title={'Transactions Value'} amount={revenue} isPrice direction={Direction.up} percentage={36} />
                </div>

                <div className="card p-0 rounded-xl">
                    <div className="p-4 md:flex space-y-2 md:space-y-0 justify-between">
                        <div className="md:flex space-y-2 md:space-y-0 md:space-x-2">
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
                    </div>

                    <div className="border-t ml-4"></div>

                    <div className="overflow-x-auto">
                        <table className='border-b'>
                            <thead>
                                <tr>
                                    <th>Reference</th>
                                    <th>Patient</th>
                                    <th>Email Address</th>
                                    <th>Phone Number</th>
                                    <th>Address</th>
                                    <th>Amount</th>
                                    <th>Status</th>
                                    <th>Created At</th>
                                    <th>Payment Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {orders.data.map(order => <SingleOrder key={order.id} order={order} />)}
                            </tbody>
                        </table>
                    </div>

                    <Pagination items={orders} />
                </div>
            </div>
        </AuthenticatedLayout>
    )
}
