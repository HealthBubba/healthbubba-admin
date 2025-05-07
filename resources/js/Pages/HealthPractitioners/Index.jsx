import DatePicker from '@/Components/Form/DatePicker';
import DateRangePicker from '@/Components/Form/DateRangePicker';
import Pagination from '@/Components/Pagination';
import useSearchParams from '@/Hooks/useSearchParams';
import SettingIcon from '@/Icons/SettingIcon';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { PractitionerItem } from '@/Partials/HealthPractitioners/PractitionerItem';
import { Direction, StatsItem } from '@/Partials/Stats/StatsItem';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { Head, Link, router } from '@inertiajs/react';

export default function ({users, totalDoctors}) {

    const params = useSearchParams()

    return (
        <AuthenticatedLayout title="Health Practitioners">
            <Head title="Health Practitioners" />

            <div className="space-y-5">
                <div className="grid md:grid-cols-4 gap-4">
                    <StatsItem title={'Total Health Practitioners'} amount={totalDoctors} direction={Direction.up} percentage={36} />
                </div>

                <div className="card p-0 rounded-xl">

                    <div className="p-4 md:flex md:space-x-2">
                        <div>
                            <Menu>
                                <MenuButton className="border-2 p-1 h-full px-3 font-medium items-center space-x-1 text-sm rounded-lg inline-flex">
                                    <SettingIcon className='size-5' />         
                                    <span>Filter</span>
                                    <ChevronDownIcon className='size-3' />         
                                </MenuButton>
                                <MenuItems transition anchor="bottom start" className="w-32 origin-top-right mt-1 rounded-xl border-[1.5px] bg-white transition duration-100 ease-out text-sm" >
                                    <div className='p-1'>
                                        <MenuItem >
                                            <button onClick={e => router.reload({data: {status: ''}})} className="inline-flex w-full rounded-lg py-2 px-3 text-muted hover:bg-muted/10">All</button>
                                        </MenuItem>
                                    </div>

                                    <div className="border-t-[1.5px]"></div>

                                    <div className='p-1'>
                                        <MenuItem >
                                            <button onClick={e => router.reload({data: {status: 'verified'}})} className="inline-flex w-full rounded-lg py-2 px-3 text-muted hover:bg-muted/10">Verified</button>
                                        </MenuItem>
                                    </div>

                                    <div className="border-t-[1.5px]"></div>

                                    <div className='p-1'>
                                        <MenuItem>
                                            <button onClick={e => router.reload({data: {status: 'unverified'}})} className="inline-flex w-full rounded-lg py-2 px-3 text-muted hover:bg-muted/10">Unverified</button>
                                        </MenuItem>
                                    </div>
                                </MenuItems>
                            </Menu>
                        </div>
                        <div>
                            <DatePicker val={{endDate: params.endDate, startDate: params.startDate}} onChange={(value) => router.reload({data: value})} />
                        </div>
                        <div>
                            <div className="relative bg-[#F9FAFB] flex items-center border-[#E5E7EB] rounded-lg border-2">
                                <div className='px-2'>
                                    <MagnifyingGlassIcon className='size-4 text-muted' />
                                </div>
                                <input type="text" onChange={e => router.reload({data: {keyword: e.currentTarget.value}})} placeholder='Search health practitioners' className='pl-0 border-0 bg-transparent focus:ring-0 text-sm' />
                            </div>
                        </div>
                    </div>

                    <div className="border-t ml-4"></div>
                    <div className='w-full' >
                        <div className="overflow-x-auto relative max-w-full">
                            <table className='border-b min-w-full'>
                                <thead>
                                    <tr>
                                        <th className='min-w-52'>Name</th>
                                        <th >Email</th>
                                        <th >Phone</th>
                                        {/* <th>License No.</th>
                                        <th className='min-w-32'>Licence Doc</th>
                                        <th className='min-w-32'>Other Document</th> */}
                                        <th>Status</th>
                                        <th>Consultations</th>
                                        <th>Earnings</th>
                                        <th></th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        users.data.map((user) => <PractitionerItem key={user.id} user={user} />)
                                    }
                                </tbody>
                            </table>

                            {
                                users.data?.length < 1 

                                ?

                                <p className='text-center py-3' >No records found</p>

                                :

                                ''
                            }
                        </div>
                    </div>

                    <Pagination items={users} />
                </div>
            </div>
        </AuthenticatedLayout>
    )
}
