import Chart from '@/Components/Chart';
import ProgressBar from '@/Components/ProgressBar';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Direction, StatsItem } from '@/Partials/Stats/StatsItem';
import TransactionItem from '@/Partials/Transactions/TransactionItem';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { ArrowLongRightIcon, ArrowRightIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { Head, Link, usePage } from '@inertiajs/react';
import { useMemo } from 'react';

export default function Dashboard({patients, practitioners, revenue, appointments, pending, transactions, orders, sources, completed, pending_orders}) {

    const {props} = usePage()

    const percentages = useMemo(() => {
        const total = sources.web + sources.android + sources.ios

        return {
            web: total ? (sources.web / total) * 100 : 0,
            android: total ? (sources.android / total) * 100 : 0,
            ios: total ? (sources.ios / total) * 100 : 0,
        }
    }, [sources])

    return (
        <AuthenticatedLayout title="Dashboard">
            <Head title="Dashboard" />

            <div className="space-y-5">
                <div className='mb-4'>
                    <h3 className='font-semibold'>Hey {props.auth.user.data.firstname},</h3>
                    <p className='text-muted'>Here’s all your activities for today</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <StatsItem title={'Total Active Patients'} amount={patients} direction={Direction.up} percentage={36} />
                    <StatsItem title={'Total Active Practitioners'} amount={practitioners}  direction={Direction.up} percentage={36} />
                    <StatsItem title={'Total Consultation Revenue'} isPrice amount={revenue} direction={Direction.up} percentage={36} />
                    <StatsItem title={'Total Orders'} amount={orders}  direction={Direction.up} percentage={36} />
                    <StatsItem title={'Total Appointments'} amount={appointments} direction={Direction.up} percentage={36} />
                    <StatsItem title={'Completed Appointments'} amount={completed} direction={Direction.up} percentage={36} />
                    <StatsItem title={'Cancelled  Appointments'} amount={pending} direction={Direction.up} percentage={36} />
                    <StatsItem title={'Ongoing Orders'} amount={pending_orders} direction={Direction.up} percentage={36} />
                </div>

                <div className="md:flex md:space-x-4 space-y-5 md:space-y-0">
                    <div className="md:w-4/6">
                        <div className="card">
                            <Chart />
                        </div>
                    </div>

                    <div className="md:w-2/6">
                        <div className="card h-full space-y-10">
                            <div className="flex justify-between items-center">
                                <div>
                                    <h4 className='font-semibold'>Traffic Sources</h4>
                                </div>

                                <div>
                                    <select className='appearance-none py-0 px-0 bg-none active:outline-none active:ring-0 focus:outline-0 focus:ring-0 focus:border-0 text-sm border-0 w-auto' >
                                        <option value="">Last 7 Days</option>
                                    </select>
                                </div>
                            </div>

                            <div className='space-y-7'>
                                <ProgressBar title='Total Order from iOS' value={sources.ios} percent={percentages.ios} />
                                <ProgressBar title='Total Order from Android' value={sources.android} percent={percentages.android} />
                                <ProgressBar title='Total Order from Web' value={sources.web} percent={percentages.web} />
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
