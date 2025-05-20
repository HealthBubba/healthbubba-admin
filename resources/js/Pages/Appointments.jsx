import { Badge } from '@/Components/Badge';
import Pagination from '@/Components/Pagination';
import SettingIcon from '@/Icons/SettingIcon';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import AppointmentItem from '@/Partials/Appointments/AppointmentItem';
import { Direction, StatsItem } from '@/Partials/Stats/StatsItem';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { Head, router } from '@inertiajs/react';

export default function ({appointments, stats}) {

    return (
        <AuthenticatedLayout title="Manage Appointments">
            <Head title="Manage Appointments" />
            <div className="space-y-2">
                <div className="grid md:grid-cols-4 grid-cols-1 gap-3 mb-5">
                    <StatsItem title={'Total Appointments'} amount={stats.total} direction={Direction.up} percentage={36} />
                    <StatsItem title={'Completed Appointments'} amount={stats.completed} direction={Direction.up} percentage={36} />
                    <StatsItem title={'Cancelled Appointments'} amount={stats.cancelled} direction={Direction.up} percentage={36} />
                    <StatsItem title={'Revenue Generated'} amount={stats.revenue} isPrice direction={Direction.up} percentage={36} />
                </div>

                <div className="card p-0 rounded-xl">
                    <div className="p-4 md:flex space-y-2 md:space-x-2">
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

                    <div className="overflow-x-auto relative">
                        <table className='border-b'>
                            <thead>
                                <tr>
                                    <th>Patient name</th>
                                    <th >Practitioner Name</th>
                                    <th>Status</th>
                                    <th>Date</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    appointments.data.map(appointment => <AppointmentItem key={appointment.id} appointment={appointment} />)
                                }
                            </tbody>
                        </table>
                    </div>

                    <Pagination items={appointments} />
                </div>
            </div>
        </AuthenticatedLayout>
    )
}
