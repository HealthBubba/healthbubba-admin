import { Badge } from '@/Components/Badge';
import Pagination from '@/Components/Pagination';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import AppointmentItem from '@/Partials/Appointments/AppointmentItem';
import { Direction, StatsItem } from '@/Partials/Stats/StatsItem';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { AdjustmentsHorizontalIcon, ChevronDownIcon, EllipsisHorizontalIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { Link, router } from '@inertiajs/react';
import { useMemo } from 'react';

export default function ({appointments, stats}) {

    return (
        <AuthenticatedLayout title="Manage Orders">
            <div className="space-y-2">
                <div className="grid grid-cols-4 gap-3 mb-5">
                    <StatsItem title={'Total Appointments'} amount={stats.total} direction={Direction.up} percentage={36} />
                    <StatsItem title={'Completed Appointments'} amount={stats.completed} direction={Direction.up} percentage={36} />
                    <StatsItem title={'Cancelled Appointments'} amount={stats.cancelled} direction={Direction.up} percentage={36} />
                    <StatsItem title={'Revenue Generated'} amount={stats.revenue} isPrice direction={Direction.up} percentage={36} />
                </div>

                <div className="card p-0 rounded-xl">
                    <div className="p-4 flex space-x-2">
                        <div>
                            <Menu>
                                <MenuButton className="border-2 p-1 h-full px-3 items-center space-x-1 text-sm rounded-lg inline-flex">
                                    <AdjustmentsHorizontalIcon className='size-5' />         
                                    <span className='font-medium'>All Appointments</span>
                                    <ChevronDownIcon className='size-3' />         
                                </MenuButton>
                                <MenuItems transition anchor="bottom start" className="min-w-32 origin-top-right mt-1 rounded-xl border-[1.5px] bg-white transition duration-100 ease-out text-sm" >
                                    <div className='p-1'>
                                        <MenuItem >
                                            <button className="inline-flex w-full rounded-lg py-2 px-3 text-muted hover:bg-muted/10">All Appointments</button>
                                        </MenuItem>
                                    </div>

                                    <div className="border-t-[1.5px]"></div>

                                    <div className='p-1'>
                                        <MenuItem>
                                            <button className="inline-flex w-full rounded-lg py-2 px-3 text-muted hover:bg-muted/10">Confirmed Orders</button>
                                        </MenuItem>
                                    </div>

                                    <div className="border-t-[1.5px]"></div>

                                    <div className='p-1'>
                                        <MenuItem>
                                            <button className="inline-flex w-full rounded-lg py-2 px-3 text-muted hover:bg-muted/10">Cancelled Orders</button>
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
                                <input type="text" onChange={e => router.reload({data: {keyword: e.currentTarget.value}})} placeholder='Search Appointments' className='pl-0 border-0 bg-transparent focus:ring-0 text-sm' />
                            </div>
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
                                </tr>
                            </thead>

                            <tbody>
                                {appointments.data.map(appointment => <AppointmentItem appointment={appointment} />)}
                            </tbody>
                        </table>
                    </div>

                    <Pagination items={appointments} />
                </div>
            </div>
        </AuthenticatedLayout>
    )
}
