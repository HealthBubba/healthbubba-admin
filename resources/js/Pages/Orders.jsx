import { Badge } from '@/Components/Badge';
import SettingIcon from '@/Icons/SettingIcon';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Direction, StatsItem } from '@/Partials/Stats/StatsItem';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon, EllipsisHorizontalIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { Head, Link, router } from '@inertiajs/react';
import { useMemo } from 'react';
import OrderItem from '../Partials/Orders/OrderItem';
import Pagination from '@/Components/Pagination';
import SingleOrder from '@/Partials/Orders/SingleOrder';
import Dropdown from '@/Components/Form/Dropdown';

export default function ({orders, total, completed, status, pending, revenue}) {

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
                                <Dropdown
                                    placeholder={'All Orders'}
                                    options={[
                                        {label: 'All Orders', value: ''},
                                        {label: 'Ongoing Orders', value: 'placed'},
                                        {label: 'Completed Orders', value: 'completed'},
                                    ]}
                                    value={status}
                                    action={value => router.reload({data: {status: value}})}
                                />
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
