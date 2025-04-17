import React from 'react'
import LicenseItem from '../HealthPractitioners/partials/LicenseItem'
import { Head, router } from '@inertiajs/react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Direction, StatsItem } from '@/Partials/Stats/StatsItem';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import SettingIcon from '@/Icons/SettingIcon';
import Pagination from '@/Components/Pagination';
import Status from '@/Enums/Status';

export default function ({licenses, status, all}) {

    return (
        <AuthenticatedLayout title="Manage Medical Licenses">
            <Head title="Manage Medical Licenses" />
            <div className="space-y-2">
                <div className="grid md:grid-cols-5 grid-cols-2 gap-3 mb-5">
                    <StatsItem title={'Total Licenses'} amount={all} direction={Direction.up} percentage={36} />
                    <StatsItem title={'Under Review'} amount={status.under_review} direction={Direction.up} percentage={36} />
                    <StatsItem title={'Verified'} amount={status.verified} isPrice direction={Direction.up} percentage={36} />
                    <StatsItem title={'Rejected'} amount={status.rejected} direction={Direction.up} percentage={36} />
                    <StatsItem title={'Expired'} amount={status.expired} isPrice direction={Direction.up} percentage={36} />
                </div>

                <div className="card p-0 rounded-xl">
                    <div className="p-4 md:flex space-y-2 md:space-y-0 md:space-x-2">
                        <div>
                            <Menu>
                                <MenuButton className="border-2 font-medium px-3 h-full items-center space-x-1 text-sm rounded-lg inline-flex">
                                    <SettingIcon className='size-4' />         
                                    <span >Filter By Status</span>
                                    <ChevronDownIcon className='size-3' />         
                                </MenuButton>
                                <MenuItems transition anchor="bottom start" className="min-w-32  origin-top-right mt-1 rounded-xl border-[1.5px] bg-white transition duration-100 ease-out text-sm" >
                                    <div className='p-1'>
                                        <MenuItem >
                                            <button onClick={() => router.reload({data: {status: ''}})} className="inline-flex w-full rounded-lg py-2 px-3 text-muted hover:bg-muted/10">All Licenses</button>
                                        </MenuItem>
                                    </div>

                                    <div className="border-t-[1.5px]"></div>

                                    <div className='p-1'>
                                        <MenuItem >
                                            <button onClick={() => router.reload({data: {status: Status.UNDER_REVIEW}})} className="inline-flex w-full rounded-lg py-2 px-3 text-muted hover:bg-muted/10">Under Review</button>
                                        </MenuItem>
                                    </div>

                                    <div className="border-t-[1.5px]"></div>

                                    <div className='p-1'>
                                        <MenuItem>
                                            <button onClick={() => router.reload({data: {status: Status.VERIFIED}})} className="inline-flex w-full rounded-lg py-2 px-3 text-muted hover:bg-muted/10">Verified</button>
                                        </MenuItem>
                                    </div>

                                    <div className="border-t-[1.5px]"></div>

                                    <div className='p-1'>
                                        <MenuItem>
                                            <button onClick={() => router.reload({data: {status: Status.REJECTED}})} className="inline-flex w-full rounded-lg py-2 px-3 text-muted hover:bg-muted/10">Rejected</button>
                                        </MenuItem>
                                    </div>

                                    <div className="border-t-[1.5px]"></div>

                                    <div className='p-1'>
                                        <MenuItem>
                                            <button onClick={() => router.reload({data: {status: Status.EXPIRED}})} className="inline-flex w-full rounded-lg py-2 px-3 text-muted hover:bg-muted/10">Expired</button>
                                        </MenuItem>
                                    </div>
                                </MenuItems>
                            </Menu>
                        </div>
                        <div>
                            <div className="relative bg-[#F9FAFB] h-full flex items-center border-[#E5E7EB] rounded-lg border-2">
                                <div className='px-2'>
                                    <MagnifyingGlassIcon className='size-4 text-muted' />
                                </div>
                                <input type="text" onChange={e => router.reload({data: {keyword: e.currentTarget.value}})} placeholder='Search Licenses' className='pl-0 border-0 bg-transparent focus:ring-0 text-sm' />
                            </div>
                        </div>
                    </div>

                    <div className="border-t ml-4"></div>

                    <div className="overflow-x-auto relative">
                        <table className='border-b'>
                            <thead>
                                <tr>
                                    <th>Practitioner</th>
                                    <th>File</th>
                                    <th>Expires At</th>
                                    <th>Qualification</th>
                                    <th>Status</th>
                                    <th></th>
                                </tr>
                            </thead>

                            <tbody>
                                {licenses.data.map(license => <LicenseItem showOwner key={license.id} license={license} />)}
                            </tbody>
                        </table>
                    </div>

                    <Pagination items={licenses} />
                </div>
            </div>
        </AuthenticatedLayout>
    )
}
