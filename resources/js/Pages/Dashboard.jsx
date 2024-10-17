import Chart from '@/Components/Chart';
import ProgressBar from '@/Components/ProgressBar';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Direction, StatsItem } from '@/Partials/Stats/StatsItem';
import TransactionItem from '@/Partials/Transactions/TransactionItem';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { ArrowLongRightIcon, ArrowRightIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { Head, Link } from '@inertiajs/react';

export default function Dashboard({patients, practitioners, appointments, pending, transactions, completed}) {
    return (
        <AuthenticatedLayout title="Dashboard">
            <Head title="Dashboard" />

            <div className="space-y-5">
                <div className='mb-4'>
                    <h3 className='font-semibold'>Hey Admin,</h3>
                    <p className='text-muted'>Here’s all your activities for today</p>
                </div>

                <div className="grid grid-cols-4 gap-4">
                    <StatsItem title={'Total Active Patients'} amount={patients} direction={Direction.up} percentage={36} />
                    <StatsItem title={'Total Active Practitioners'} amount={practitioners}  direction={Direction.up} percentage={36} />
                    <StatsItem title={'Total Consultation Revenue'} isPrice amount={2000} direction={Direction.up} percentage={36} />
                    <StatsItem title={'Total Orders'} amount={2000}  direction={Direction.up} percentage={36} />
                    <StatsItem title={'Total Appointments'} amount={appointments} direction={Direction.up} percentage={36} />
                    <StatsItem title={'Completed Appointments'} amount={completed} direction={Direction.up} percentage={36} />
                    <StatsItem title={'Cancelled  Appointments'} amount={pending} direction={Direction.up} percentage={36} />
                    <StatsItem title={'Ongoing Orders'} amount={2000} direction={Direction.up} percentage={36} />
                </div>

                <div className="flex gap-5">
                    <div className="w-4/6">
                        <div className="card">
                            <Chart />
                        </div>
                    </div>

                    <div className="w-2/6">
                        <div className="card h-full space-y-10">
                            <div className="flex justify-between text-sm">
                                <div>
                                    <h4 className='font-semibold'>Traffic Sources</h4>
                                </div>

                                <div>
                                    <select className='appearance-none py-0 focus:outline-none focus:ring-none focus:border-none text-sm border-0 w-auto' >
                                        <option value="">Last 7 Days</option>
                                    </select>
                                </div>
                            </div>

                            <div className='space-y-7'>
                                <ProgressBar title='Total Order from iOS' value='1,43,382' percent={40} />
                                <ProgressBar title='Total Order from Android' value='1,43,382' percent={40} />
                                <ProgressBar title='Total Order from Web' value='1,43,382' percent={40} />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="card p-0 rounded-xl">
                    <div className="p-4 flex justify-between">
                        <div>
                        <p className='font-semibold'>Transactions</p>
                        </div>
                        <div>
                            <Link className='text-sm inline-flex items-center text-[#4F46E5] font-medium' href={route('transactions')}>See All Transactions <ChevronRightIcon className='size-3 ms-1' /></Link>
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
                                {transactions.data.map(transaction => <TransactionItem key={transaction.id} transaction={transaction} />)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
