import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { StatsItem } from '@/Partials/Stats/StatsItem';
import { ArrowLongRightIcon, ArrowRightIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { Head, Link } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <AuthenticatedLayout title="Dashboard">
            <Head title="Dashboard" />

            <div className="space-y-5">
                <div className='mb-4'>
                    <h3 className='font-semibold'>Hey Admin,</h3>
                    <p className='text-muted'>Here’s all your activities for today</p>
                </div>

                <div className="grid grid-cols-4 gap-4">
                    <StatsItem />
                    <StatsItem />
                    <StatsItem />
                    <StatsItem />
                    <StatsItem />
                    <StatsItem />
                    <StatsItem />
                    <StatsItem />
                </div>


                <div className="card p-0 rounded-xl">
                    <div className="p-4 flex justify-between">
                        <div>
                        <p className='font-semibold'>Transactions</p>
                        </div>
                        <div>
                            <Link className='text-sm inline-flex items-center' href='#'>See All Transactions <ChevronRightIcon className='size-3 ms-1' /></Link>
                        </div>
                    </div>

                    <div className="border-t ml-4"></div>

                    <div className="p-4 overflow-x-auto">
                        <table>
                            <thead>
                                <tr>
                                    <th>S/N</th>
                                    <th>Transaction ID</th>
                                    <th>Date/Time</th>
                                    <th >Patient Name</th>
                                    <th >Practitioner Name</th>
                                    <th>Type</th>
                                    <th>Amount</th>
                                    <th>Status</th>
                                    <th>Payment Method</th>
                                    <th>Appointment ID</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>TRX12345</td>
                                    <td>2023-10-12 15:42</td>
                                    <td>Alexander Ogunyemi</td>
                                    <td>Jane Smith</td>
                                    <td>Payment</td>
                                    <td>N 5,000,000</td>
                                    <td>
                                        <span className='rounded-r-full rounded-s-full font-semibold bg-green-100 text-green-600 py-[6px] text-xs px-4 border-2 border-green-300 leading-none'>Successful</span>
                                    </td>
                                    <td>Bank Transfer</td>
                                    <td>APPT56789</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>TRX12345</td>
                                    <td>2023-10-12 15:42</td>
                                    <td>Alexander Ogunyemi</td>
                                    <td>Jane Smith</td>
                                    <td>Payment</td>
                                    <td>N 5,000,000</td>
                                    <td>
                                        <span className='rounded-r-full rounded-s-full font-semibold bg-green-100 text-green-600 py-[6px] text-xs px-4 border-2 border-green-300 leading-none'>Successful</span>
                                    </td>
                                    <td>Bank Transfer</td>
                                    <td>APPT56789</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>TRX12345</td>
                                    <td>2023-10-12 15:42</td>
                                    <td>Alexander Ogunyemi</td>
                                    <td>Jane Smith</td>
                                    <td>Payment</td>
                                    <td>N 5,000,000</td>
                                    <td>
                                        <span className='rounded-r-full rounded-s-full font-semibold bg-green-100 text-green-600 py-[6px] text-xs px-4 border-2 border-green-300 leading-none'>Successful</span>
                                    </td>
                                    <td>Bank Transfer</td>
                                    <td>APPT56789</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
